```javascript
// Initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

/**
 * Reducer function for the new page
 * Handles actions related to fetching data for the new page.
 */
const newPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_START':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, data: action.payload, isLoading: false, error: null };
    case 'FETCH_DATA_FAILURE':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default newPageReducer;
```