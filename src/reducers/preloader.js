```javascript
/**
 * preLoader reducer
 *
 * This reducer manages the state of the pre-loader.
 */

// Define the initial state
const initialState = {
  isLoading: false, // Initial state, assuming not loading
};

// Define the reducer function
const preLoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'STOP_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default preLoaderReducer;
```