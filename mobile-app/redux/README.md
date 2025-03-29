# Redux Setup Guide

## Creating New Redux Slices

1. Create action types and action creators in `/actions`.
2. Implement the reducer in `/reducers`.
3. Add selectors in `/selectors`.
4. Combine the reducer in `rootReducer`.

## Dispatching Actions

Use `useDispatch` from `react-redux` to dispatch actions.

```typescript
import { useDispatch } from 'react-redux';
import { login } from './redux/actions/authActions';

const dispatch = useDispatch();
dispatch(login(userData));