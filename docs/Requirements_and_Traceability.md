# Requirements and Traceability Matrix

Use this matrix to prove that planned tests map to business outcomes. Update test-case IDs if the workbook is extended.

| Requirement ID | Business requirement | Priority | Acceptance criteria | Test case IDs |
| --- | --- | --- | --- | --- |
| REQ-AUTH-01 | User can sign in with valid credentials | P0 | Authenticated user reaches the product area | TC-LOGIN-001 |
| REQ-AUTH-02 | Invalid login is rejected safely | P1 | Clear validation is shown and access is denied | TC-LOGIN-002, TC-LOGIN-003 |
| REQ-CAT-01 | Inventory displays usable product information | P1 | Product name, price, image and action are visible | TC-INV-001, TC-UI-001 |
| REQ-CAT-02 | User can sort products correctly | P1 | Selected sort order is reflected accurately | TC-INV-002, TC-INV-003 |
| REQ-CART-01 | User can add and remove products | P0 | Cart state and item count remain accurate | TC-CART-001, TC-CART-002 |
| REQ-CART-02 | Cart persists the selected items during checkout | P0 | Review shows the same products and quantities | TC-CART-003, TC-CHECK-001 |
| REQ-CHECK-01 | Required checkout fields are validated | P0 | Missing/invalid values are rejected with useful feedback | TC-CHECK-002, TC-CHECK-003 |
| REQ-CHECK-02 | User can review and confirm an order | P0 | Confirmation appears once a valid order is submitted | TC-CHECK-004, TC-CHECK-005 |
| REQ-SESSION-01 | User can end a session safely | P1 | Logout returns user to an unauthenticated state | TC-REG-001 |

## Traceability rules

1. Every P0/P1 requirement must have at least one executed test.
2. A failed test must link to a defect ID or accepted-risk decision.
3. New requirements must be added before adding orphan test cases.

