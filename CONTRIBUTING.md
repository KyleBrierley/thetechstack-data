# Contributing a correction

1. Edit the relevant `records/<company>.json`.
2. **Every change needs evidence**: add or update the `evidence` array — URL, source type, a short quote, access date. PRs that change facts without sources will be asked for them.
3. Pick the honest confidence label:
   - `confirmed` — the company said it publicly (or you work there and say so in the PR — we'll verify)
   - `inferred` — strong technical evidence (job post, repo, fingerprint)
   - `reported` — credible third party
4. If a tool was replaced, don't delete it — set `status: "previous"` and add the replacement as a new entry with `replaced` set. Migrations are data, not noise.
5. Company employees: say so in the PR description (work email or LinkedIn helps). Verified company PRs flip `verified_by_company: true` and earn the ✓ badge on the site.

Merged changes deploy to thetechstack.com automatically. We review within a few days;
disagreements get resolved by evidence quality, not seniority.
