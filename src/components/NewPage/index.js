```jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PreLoader from '../PreLoader';
import { fetchData, selectLoading, selectData } from '../../reducers/newPageReducer';
import './styles.css'; // Import the styles for the NewPage component

/**
 * NewPage component
 * Displays the new page with a pre-loader while data is being fetched.
 */
const NewPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="new-page">
      {isLoading ? (
        <PreLoader />
      ) : (
        <div>
          {/* Render the content of the new page using the fetched data */}
          <h2>New Page</h2>
          <p>Data fetched: {data}</p>
        </div>
      )}
    </div>
  );
};

export default NewPage;
```