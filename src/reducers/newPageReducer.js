```jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulated async data fetching
const fetchDataFromAPI = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve('Sample data from API'), 2000)
  );

// Async thunk for fetching data
export const fetchData = createAsyncThunk('newPage/fetchData', async () => {
  const response = await fetchDataFromAPI();
  return response;
});

// Redux slice for the new page
const newPageSlice = createSlice({
  name: 'newPage',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectLoading = (state) => state.newPage.loading;
export const selectData = (state) => state.newPage.data;
export const selectError = (state) => state.newPage.error;

export default newPageSlice.reducer;
```