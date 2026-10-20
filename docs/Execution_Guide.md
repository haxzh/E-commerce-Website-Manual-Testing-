# Local Execution Guide

## Before execution

1. Start the local application using its project-specific start command.
2. Confirm the application URL responds and the expected build is running.
3. Record the environment in [Test Data and Environment](Test_Data_and_Environment.md).
4. Read the test plan and identify all P0/P1 cases.
5. Create a local evidence folder outside version control if it contains screenshots.

## Execution sequence

### Phase 1: Smoke

Run login, inventory visibility, add-to-cart and the primary checkout journey. If a P0 smoke case is blocked, record the reason and stop dependent testing.

### Phase 2: Core functional

Execute the workbook in priority order. For each case:

1. Read the preconditions and steps completely.
2. Reset only the state required by the case.
3. Perform the steps exactly as written.
4. Compare actual behaviour with the expected result.
5. Record actual result, status, tester and execution date.
6. Capture evidence for failures or important pass checkpoints.

### Phase 3: Regression and exploratory

Retest changed areas, then spend a bounded session exploring edge cases around the highest-risk feature. Log a separate note for exploratory coverage.

## Failure handling

Do not silently mark a case as failed. Reproduce the mismatch, capture the exact data and environment, then create a defect using the standard template. Use `Blocked` only when execution cannot continue because of an external dependency.

## Completion

Update the traceability matrix, reconcile defect IDs, calculate metrics and complete the test summary. Give a release recommendation only after reviewing the quality gates in the README.

