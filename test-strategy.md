# Test Strategy

## Objective

Build a scalable and maintainable automation framework supporting UI, API, and integration testing.

---

## Test Approach

### UI Testing
Playwright with POM architecture is used for UI automation.

Covered:
- Login flow
- Validations
- Navigation

### API Testing
Playwright APIRequestContext is used for API automation.

Covered:
- GET APIs
- POST APIs
- Response validations

### Integration Testing
Combined API + UI validation.

---

## Risks Identified

1. Flaky UI locators
2. Environment instability
3. API dependency failures

---

## Improvements Planned

- Dockerized execution
- Test analytics dashboard
- Parallel execution
- Performance testing integration