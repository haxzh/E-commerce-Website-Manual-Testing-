# Harsh's E-commerce QA Portfolio

> **Professional manual testing project for a local e-commerce application**

![QA](https://img.shields.io/badge/QA-Manual%20Testing-2563EB)
![Coverage](https://img.shields.io/badge/Coverage-Functional%20%7C%20UI%20%7C%20Regression-16A34A)
![Status](https://img.shields.io/badge/Status-Ready%20for%20Execution-F59E0B)

**Owner / Tester:** Harsh
**Project type:** Full-stack-ready local e-commerce testing project
**Application under test:** ShopSphere local e-commerce website
**Technology:** HTML, CSS and vanilla JavaScript
**Application version:** 1.0.0

## Project objective

This project contains a fully runnable local e-commerce storefront and a complete, risk-based manual QA approach for the following customer journey:

`Login -> Browse products -> Sort inventory -> Manage cart -> Checkout -> Confirm order`

The website includes a catalogue, search, category filters, sorting, cart management, checkout validation, order confirmation, order history and logout. The QA coverage includes positive, negative, UI, smoke, regression, boundary and exploratory scenarios.

## Repository structure

| Location | Purpose |
| --- | --- |
| [`local-app/index.html`](local-app/index.html) | Local storefront structure, login, catalogue and checkout screens |
| [`local-app/styles.css`](local-app/styles.css) | Responsive visual design and component styling |
| [`local-app/app.js`](local-app/app.js) | Product data, authentication, cart, checkout and order logic |
| [`docs/QA_Strategy.md`](docs/QA_Strategy.md) | Quality goals, approach, test levels and governance |
| [`docs/Test_Plan.md`](docs/Test_Plan.md) | Scope, scenarios, entry/exit criteria and execution rules |
| [`docs/Requirements_and_Traceability.md`](docs/Requirements_and_Traceability.md) | Business requirements and test coverage mapping |
| [`docs/Risk_Register.md`](docs/Risk_Register.md) | Risk-based prioritisation and mitigation plan |
| [`docs/Test_Data_and_Environment.md`](docs/Test_Data_and_Environment.md) | Safe test data, environment matrix and reset rules |
| [`docs/Execution_Guide.md`](docs/Execution_Guide.md) | Step-by-step local execution workflow |
| [`docs/Defect_Lifecycle.md`](docs/Defect_Lifecycle.md) | Defect quality standard and lifecycle |
| [`docs/Exploratory_Test_Charter.md`](docs/Exploratory_Test_Charter.md) | Time-boxed exploratory testing worksheet |
| [`docs/Evidence_Standard.md`](docs/Evidence_Standard.md) | Evidence naming, quality and privacy rules |
| [`test-cases/Manual_Test_Cases.xlsx`](test-cases/Manual_Test_Cases.xlsx) | Prioritized test cases, execution fields and instructions |
| [`bug-reports/Bug_Report_Template.md`](bug-reports/Bug_Report_Template.md) | Reusable defect report template |
| [`docs/Test_Summary_Template.md`](docs/Test_Summary_Template.md) | Execution summary for the completed test cycle |

## Quick start

### Run the local e-commerce website

1. Open PowerShell in the repository root.
2. Run `python -m http.server 4173 --directory local-app`.
3. Open `http://localhost:4173` in a browser.
4. Login with `qa_user` / `qa123`.
5. Test the catalogue, search, category filter, sorting, cart, checkout, order history and logout.

The complete runnable website is in [local-app](local-app). It uses vanilla JavaScript and stores cart/orders only in the browser's local storage. No external website, API or database is required.

### Test account

| Field | Value |
| --- | --- |
| Username | `qa_user` |
| Password | `qa123` |

This is synthetic demo data. Do not replace it with real credentials.

### Reset local test data

To start with a clean cart and order history, open the browser developer console and run:

```javascript
localStorage.clear();
location.reload();
```

To stop the local server, return to the PowerShell window running it and press `Ctrl+C`.

### Execute the QA cycle

1. Read the [QA strategy](docs/QA_Strategy.md), [test plan](docs/Test_Plan.md) and [execution guide](docs/Execution_Guide.md).
2. Record the application version, browser, OS, viewport and test date.
3. Prepare only approved, non-sensitive test data using [Test Data and Environment](docs/Test_Data_and_Environment.md).
4. Execute the Excel cases in priority order and update only executed rows.
5. For a reproducible mismatch, create a defect from the [bug report template](bug-reports/Bug_Report_Template.md).
6. Maintain screenshots/recordings in the ignored `evidence` folder.
7. Complete the [test summary](docs/Test_Summary_Template.md), metrics and release recommendation.

## Execution status rules

| Status | Use when |
| --- | --- |
| `Pass` | Actual result satisfies the expected result |
| `Fail` | Reproducible mismatch exists and evidence is captured |
| `Blocked` | Environment, dependency or access issue prevents execution |
| `Not Run` | Case has not yet been executed |

## Quality gates

- 100% of P0/P1 cases executed before release recommendation.
- Every failed case has a reproducible defect or documented accepted risk.
- No open Critical defect; High defects require explicit disposition.
- Test summary contains actual counts and a clear go/no-go recommendation.
- Evidence is traceable to test case ID and contains no sensitive data.

## Quality and safety notes

- Do not enter real personal, payment or confidential information.
- Do not report assumed or previously known behaviour as a defect; reproduce it first.
- Keep screenshots and recordings free of personal information.
- Record the local application version/build and environment details with every execution.
- This is a local demo application; checkout does not process real payments.

## Portfolio outcome

After execution, this project demonstrates Harsh's ability to plan coverage, derive tests from requirements, execute tests consistently, document defects with evidence, measure quality and communicate release risk.
