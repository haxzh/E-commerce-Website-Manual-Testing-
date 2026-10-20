# Test Plan — Harsh's E-commerce Demo Store Testing

| Field | Value |
| --- | --- |
| Document owner | Harsh |
| Version | 1.0 |
| Status | Ready for execution |
| Application | [SauceDemo](https://www.saucedemo.com/) |
| Test approach | Manual functional, negative, UI and regression testing |

## 1. Objective

Validate the most important customer journeys in the SauceDemo store and produce traceable evidence for each observed result. This plan is designed as a practical manual testing portfolio deliverable for Harsh.

## 2. Application and test data

- Application: https://www.saucedemo.com/
- Credentials: use only the demo credentials shown on the application login page.
- Test products: select products available in the current inventory; record the selected product in Actual Result when relevant.
- Checkout data: use non-sensitive demo values only. Never enter real personal or payment data.

## 3. In scope

- Login and logout
- Product inventory visibility
- Product sorting
- Add/remove items from cart
- Cart contents and item count
- Checkout information form validation
- Order review and order confirmation

## 4. Out of scope

- Real payment processing
- Load/performance testing
- Security penetration testing
- Testing against production systems or unauthorized endpoints
- Accessibility compliance certification
- Cross-browser compatibility beyond the browser selected for this cycle

## 5. Test types and coverage

- Functional testing
- Positive and negative testing
- UI validation
- Smoke testing
- Regression testing
- Boundary/value validation where applicable

The workbook contains 20 planned cases covering Login, Inventory, Cart, Checkout, UI and Regression. High-priority cases should be executed first because they cover authentication and the primary purchase path.

## 6. Test environment

Record these values before execution:

- OS: actual operating system and version
- Browser and version: actual browser/version
- Viewport: desktop or mobile viewport used
- Test date: actual execution date
- Network: normal internet connection
- Build/release: record if the application exposes one

## 7. Entry criteria

- Demo site is reachable
- Browser is available
- Test cases and test data are prepared
- Test evidence folder/location is available
- Harsh has recorded the execution environment

## 8. Exit criteria

- All planned test cases have an execution status
- Failed cases have reproducible steps and evidence
- Test summary is completed with actual results
- Any blocked tests are documented with reasons
- No high-priority case remains unexecuted without a documented reason

## 9. Defect reporting and severity

Each defect report should include ID, title, environment, preconditions, steps to reproduce, expected result, actual result, severity, priority, evidence, reproducibility and status.

| Severity | Meaning |
| --- | --- |
| Critical | Core application unusable, data loss or order flow cannot continue |
| High | Major business flow is blocked or materially incorrect |
| Medium | Functional issue with a workaround or limited impact |
| Low | Cosmetic, content or minor usability issue |

## 10. Risks, assumptions and mitigations

| Risk / assumption | Impact | Mitigation |
| --- | --- | --- |
| Demo site changes or is unavailable | Tests may be blocked | Record timestamp and environment; retry later |
| Demo accounts behave differently | Results may vary | Record the account type used |
| Browser-specific behaviour | Defect may not reproduce elsewhere | Include browser/version in every result |
| No real payment gateway exists | Payment coverage is limited | Keep payment processing out of scope |

## 11. Execution rules

- A test is `Pass` only when the observed result satisfies the expected result.
- A test is `Fail` only when the mismatch is reproducible or supported by clear evidence.
- Use `Blocked` when execution cannot continue because of an environment or dependency issue.
- Leave `Actual Result` blank until the case is executed; do not pre-fill pass/fail outcomes.
