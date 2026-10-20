# Test Data and Environment

## Environment record

Complete this section at the start of every execution cycle.

| Field | Value |
| --- | --- |
| Application/build | |
| OS/version | |
| Browser/version | |
| Viewport | |
| Test date/time | |
| Tester | Harsh |
| Network | |
| Database/API state | |

## Approved synthetic data

| Data type | Example format | Rule |
| --- | --- | --- |
| Username | `qa_user_01` | Use a local test account only |
| Password | Stored privately | Never commit credentials |
| First name | `Test` | Synthetic value |
| Last name | `User` | Synthetic value |
| Postal code | `400001` | Non-sensitive test value |
| Product | Current catalogue item | Record exact name and quantity |

Do not use real names, addresses, phone numbers, payment cards, tokens or production credentials.

## Reset and cleanup

1. Start from a clean browser session when the case requires it.
2. Empty the cart before an independent cart case.
3. Record any seeded account or catalogue state that can affect results.
4. Remove local screenshots containing accidental sensitive data.
5. Do not alter production or shared data.

