# QA Strategy

## 1. Purpose

This strategy defines how quality will be evaluated for the local e-commerce application. It gives the project a repeatable, risk-based process rather than a checklist-only approach.

## 2. Quality objectives

- Protect the primary customer journey: login to confirmed order.
- Detect functional, validation, usability and data-integrity risks early.
- Keep every result reproducible through test-case IDs and evidence.
- Provide a clear release recommendation based on measurable gates.

## 3. Test levels

| Level | Scope | Owner | Evidence |
| --- | --- | --- | --- |
| System | Complete local application journey | Manual QA | Execution workbook |
| Integration | Cart, checkout and order state transitions | Manual QA | Case result and screenshots |
| Regression | Previously validated critical flows after a change | Manual QA | Regression run |
| Exploratory | Unscripted risk discovery around changed areas | Manual QA | Session notes and defects |

## 4. Test types

- Functional and business-rule validation
- Positive, negative and boundary-value testing
- Smoke testing for build readiness
- UI consistency and responsive layout checks
- Regression testing of stable critical paths
- Basic compatibility check on the selected supported browser

Security penetration, load testing, real payment processing and formal accessibility certification are outside this portfolio scope.

## 5. Risk-based priority

| Priority | Meaning | Execution expectation |
| --- | --- | --- |
| P0 | Release-blocking customer journey | Execute first and every cycle |
| P1 | High business impact | Execute before release decision |
| P2 | Important supporting behaviour | Execute in the planned cycle |
| P3 | Cosmetic or low-impact behaviour | Execute when time permits |

## 6. Test design techniques

- Equivalence partitioning for valid/invalid inputs
- Boundary value analysis for required fields and quantities
- Decision tables for checkout validation and order outcomes
- State-transition testing for cart and order status
- Error guessing for session, refresh and duplicate-action risks

## 7. Quality reporting

The final report must include execution totals, pass rate, failed/blocked cases, defect severity, residual risk, environment details and a Go/No-Go/Conditional-Go recommendation.

