import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const recordsDir = path.join(root, "records");
const schema = JSON.parse(fs.readFileSync(path.join(root, "schema/stack-record.schema.json"), "utf8"));
const categoryText = fs.readFileSync(path.join(root, "schema/categories.md"), "utf8");
const documentedCategories = new Set(
  [...categoryText.matchAll(/^- `([a-z0-9-]+)`/gm)].map((match) => match[1]),
);
const schemaCategories = new Set(schema.properties.tools.items.properties.category.enum);

const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);
const validate = ajv.compile(schema);
const files = fs.readdirSync(recordsDir).filter((name) => name.endsWith(".json")).sort();
const failures = [];
const slugs = new Set();

for (const category of documentedCategories) {
  if (!schemaCategories.has(category)) failures.push(`categories.md includes '${category}' but the schema does not`);
}
for (const category of schemaCategories) {
  if (!documentedCategories.has(category)) failures.push(`schema includes '${category}' but categories.md does not`);
}

for (const file of files) {
  const record = JSON.parse(fs.readFileSync(path.join(recordsDir, file), "utf8"));
  const expectedSlug = path.basename(file, ".json");

  if (!validate(record)) {
    for (const error of validate.errors ?? []) {
      failures.push(`${file}${error.instancePath || "/"} ${error.message}`);
    }
  }
  if (record.slug !== expectedSlug) failures.push(`${file} must contain slug '${expectedSlug}'`);
  if (slugs.has(record.slug)) failures.push(`${file} duplicates slug '${record.slug}'`);
  slugs.add(record.slug);
}

if (failures.length) {
  console.error("Stack record validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Validated ${files.length} stack records and ${schemaCategories.size} categories.`);
