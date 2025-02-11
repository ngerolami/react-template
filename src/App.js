import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
// Import other components and styles as needed

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate delayed content loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {loading && <Preloader />}
      {/* Render other components */}
    </div>
  );
};

export default App;