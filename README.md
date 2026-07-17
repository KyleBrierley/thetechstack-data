# TheTechStack — Public Stack Records

[![Validate public stack data](https://github.com/KyleBrierley/thetechstack-data/actions/workflows/validate.yml/badge.svg)](https://github.com/KyleBrierley/thetechstack-data/actions/workflows/validate.yml)

Structured, evidence-backed records of what companies actually run. This data powers
[thetechstack.com/stacks](https://www.thetechstack.com/stacks).

Every tool entry carries a status (`current` / `previous` / `evaluating`), a confidence
label (`confirmed` / `inferred` / `reported`), and cited evidence with source URLs.

## How the system works

```mermaid
flowchart LR
    A["Cited public evidence"] --> B["Structured stack record"]
    B --> C["Schema and evidence checks"]
    C --> D["Human review"]
    D --> E["Approved public commit"]
    E --> F["Exact-SHA import"]
    F --> G["Private revalidation + build"]
    G --> H["TheTechStack site"]
```

The private research and editorial system remains private. This repository exposes the
public contract: records, evidence, confidence labels, validation rules, and correction
history.

## Corrections welcome — especially from the companies themselves

Work at one of these companies and see something wrong or stale? **Open a pull request.**
That's the whole point of this repo. If editing JSON is inconvenient, open a
[stack correction issue](https://github.com/KyleBrierley/thetechstack-data/issues/new?template=stack-correction.yml)
instead. See [CONTRIBUTING.md](CONTRIBUTING.md) for the evidence and review rules.

Records verified by the company get a ✓ badge on the site.

> Publication status: after an approved change merges, the exact validated public commit
> is imported into the private site repository, validated again, built, and deployed.
> A maintainer still confirms the production result before treating a correction as live.

## Schema

Records conform to [`schema/stack-record.schema.json`](schema/stack-record.schema.json),
categories to [`schema/categories.md`](schema/categories.md).

Run the same validation used in pull requests:

```bash
npm ci
npm run validate
```

## What this demonstrates

- Evidence-backed structured research with explicit provenance.
- Honest `confirmed`, `inferred`, and `reported` confidence labels.
- Current, previous, and evaluating states instead of destructive history edits.
- Automated contract checks paired with human editorial and verification gates.
- A public correction surface that does not expose private product or orchestration code.

## License

Data and schema: [CC BY 4.0](LICENSE) — use them with attribution to TheTechStack.

The records and schema in this repository are the public source of truth. The site imports
approved public commits by exact SHA, so private publishing work cannot overwrite accepted
public corrections.
