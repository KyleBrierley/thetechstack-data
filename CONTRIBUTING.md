# Contributing a correction

Thank you for helping keep TheTechStack accurate. Corrections are decided by evidence
quality, not seniority or vendor preference.

## Two ways to contribute

### Open a pull request

1. Edit the relevant `records/<company>.json`.
2. **Every change needs evidence**: add or update the `evidence` array — URL, source type, a short quote, access date. PRs that change facts without sources will be asked for them.
3. Pick the honest confidence label:
   - `confirmed` — the company said it publicly (or you work there and say so in the PR — we'll verify)
   - `inferred` — strong technical evidence (job post, repo, fingerprint)
   - `reported` — credible third party
4. If a tool was replaced, don't delete it — set `status: "previous"` and add the replacement as a new entry with `replaced` set. Migrations are data, not noise.
5. Run `npm install && npm run validate` before opening the PR.
6. Company employees may describe their relationship in the PR, but should not post a
   private work email, employee ID, or other sensitive proof publicly.

### Open a correction issue

If you do not want to edit JSON, use the
[stack correction issue form](https://github.com/KyleBrierley/thetechstack-data/issues/new?template=stack-correction.yml).
A maintainer can turn an evidence-backed issue into a pull request.

## Company verification

Only a maintainer may change `verified_by_company` to `true`. Employment or company
authority can be verified privately when needed; verification evidence is not committed
to this repository.

## Publication status

The automated path from an approved public correction to the private site build is still
being completed. A merged correction is accepted into the public record, but it should
not be described as live on the site until a maintainer confirms the site update.
