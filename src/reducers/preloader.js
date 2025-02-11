```jsx
/**
 * Preloader reducer
 *
 * This reducer manages the state of the preloader, which indicates whether
 * a long-running operation (e.g., fetching data from an API) is in progress.
 */

// Define the initial state
const initialState = {
  isVisible: false,
};

// Define the action types
const SHOW_PRELOADER = 'SHOW_PRELOADER';
const HIDE_PRELOADER = 'HIDE_PRELOADER';

// Define the reducer function
const preLoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRELOADER:
      return {
        ...state,
        isVisible: true,
      };
    case HIDE_PRELOADER:
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
};

// Action creators
export const showPreloader = () => ({
  type: SHOW_PRELOADER,
});

export const hidePreloader = () => ({
  type: HIDE_PRELOADER,
});

export default preLoaderReducer;
```