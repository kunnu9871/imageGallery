import React, { useState, useEffect } from 'react';

const LoadingAnimation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 30000);

    return () => clearTimeout(timeoutId);c
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center transition-opacity ${loading ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none'}`}>
      <div className="border-t-8 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default LoadingAnimation;
