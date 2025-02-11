import React from 'react';
import PreLoader from '../PreLoader';

/**
 * NewPage component
 *
 * This component represents a new page in the application.
 * It renders a preloader while the page is loading, and
 * the page content once the loading is complete.
 *
 * @component
 * @example
 * return (
 *   <NewPage isLoading={false}>
 *     <h1>New Page Content</h1>
 *   </NewPage>
 * )
 */
const NewPage = ({ isLoading, children }) => {
  return (
    <div>
      <PreLoader isLoading={isLoading} />
      {!isLoading && <div>{children}</div>}
    </div>
  );
};

export default NewPage;