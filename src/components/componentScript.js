import React, { useEffect } from 'react';

const ComponentWithScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?09c837e25a9734288e9675cf71b";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
   <></>
  );
};

export default ComponentWithScript;