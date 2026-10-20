# Defect Lifecycle and Reporting Standard

## Defect states

`New -> Triaged -> In Progress -> Fixed -> Retest -> Closed`

Alternative outcomes are `Rejected`, `Duplicate`, `Cannot Reproduce` and `Deferred`. Always record the reason and linked evidence.

## Severity and priority

| Severity | Definition | Typical priority |
| --- | --- | --- |
| Critical | Data loss, security exposure or order flow unusable | P0 |
| High | Major business flow blocked or materially incorrect | P1 |
| Medium | Functional issue with workaround or limited scope | P2 |
| Low | Cosmetic, content or minor usability issue | P3 |

Severity describes impact; priority describes how soon the team should act.

## Report quality checklist

- Unique ID and concise title
- Environment, build and preconditions
- Numbered reproducible steps
- Expected versus actual result
- Severity, priority and reproducibility
- Screenshot/video/log evidence
- Requirement and test-case links
- No credentials or personal data

## Retest rules

Retest the exact original steps first. Then run a focused regression around the changed area. Close the defect only when the expected result is verified and no regression is found.

