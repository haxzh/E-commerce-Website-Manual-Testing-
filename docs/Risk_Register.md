# QA Risk Register

Score each risk as **Likelihood (1-5) x Impact (1-5)**. Prioritise scores of 15 or more.

| ID | Risk | Likelihood | Impact | Score | Mitigation | Owner | Status |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| R-001 | Login blocks the main customer journey | 3 | 5 | 15 | Run smoke login first; keep a valid local test account | QA | Open |
| R-002 | Cart total or item state is incorrect | 3 | 5 | 15 | Verify add, remove, refresh and checkout review independently | QA | Open |
| R-003 | Required checkout validation is incomplete | 3 | 4 | 12 | Use empty, boundary and invalid input partitions | QA | Open |
| R-004 | Local build differs from the documented environment | 3 | 4 | 12 | Record build/version and reset data before each run | QA | Open |
| R-005 | Browser layout hides a critical action | 2 | 4 | 8 | Check supported desktop viewport and a narrow viewport | QA | Open |
| R-006 | Test evidence contains sensitive data | 2 | 5 | 10 | Use synthetic data and review screenshots before storage | QA | Open |

## Release risk interpretation

- **0-7:** Low; monitor.
- **8-14:** Medium; mitigation or explicit acceptance required.
- **15-25:** High; must be addressed before an unconditional release recommendation.

