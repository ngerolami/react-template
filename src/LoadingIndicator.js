
import React from 'react';
const LoadingIndicator = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="spinner" />
    <span style={{ marginLeft: '10px' }}>Loading...</span>
  </div>
);
export default LoadingIndicator;