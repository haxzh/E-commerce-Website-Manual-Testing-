# Harsh's E-commerce Manual Testing Portfolio

**Owner / Tester:** Harsh  
**Project type:** Manual functional testing and QA documentation  
**Application under test:** [SauceDemo](https://www.saucedemo.com/)

## Project objective

This project demonstrates a structured manual testing approach for an e-commerce user journey:

`Login -> Browse products -> Sort inventory -> Manage cart -> Checkout -> Confirm order`

The coverage includes positive, negative, UI, smoke and regression scenarios. The workbook is intentionally kept execution-ready: planned cases start as **Not Run** and must be updated only after Harsh personally executes them.

## Repository structure

| Location | Purpose |
| --- | --- |
| [`docs/Test_Plan.md`](docs/Test_Plan.md) | Scope, strategy, risks, environment and completion criteria |
| [`test-cases/Manual_Test_Cases.xlsx`](test-cases/Manual_Test_Cases.xlsx) | Prioritized test cases, execution fields and instructions |
| [`bug-reports/Bug_Report_Template.md`](bug-reports/Bug_Report_Template.md) | Reusable defect report template |
| [`docs/Test_Summary_Template.md`](docs/Test_Summary_Template.md) | Execution summary for the completed test cycle |

## How to execute

1. Read the [test plan](docs/Test_Plan.md) and record the actual browser, OS and execution date.
2. Open SauceDemo and use only the demo credentials displayed by the application.
3. Execute the workbook cases in priority order.
4. Record the observed result and set each status to `Pass`, `Fail`, `Blocked` or `Not Run`.
5. For every reproduced failure, capture evidence and create a separate defect using the [bug report template](bug-reports/Bug_Report_Template.md).
6. Complete the [test summary](docs/Test_Summary_Template.md) using actual counts from the workbook.

## Quality and safety notes

- Do not enter real personal, payment or confidential information.
- Do not report assumed or previously known behaviour as a defect; reproduce it first.
- Keep screenshots and recordings free of personal information.
- The demo site can change or become unavailable, so record environment details with every execution.

## Portfolio outcome

After execution, this project should show Harsh's ability to plan coverage, write clear test cases, execute tests consistently, document defects with evidence and communicate release risk.
