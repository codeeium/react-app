const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals')
        .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          if (getCLS) getCLS(onPerfEntry);
          if (getFID) getFID(onPerfEntry);
          if (getFCP) getFCP(onPerfEntry);
          if (getLCP) getLCP(onPerfEntry);
          if (getTTFB) getTTFB(onPerfEntry);
        })
        .catch((error) => {
          console.error('Failed to load web-vitals module:', error);
        });
  }
};

export default reportWebVitals;
