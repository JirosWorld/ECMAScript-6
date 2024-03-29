// introduction to destructuring a nested object:

  const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
  
    const { tomorrow : { max : maxOfTomorrow }} = forecast; 
  
    return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); 

  // better: only pass in what you need:

  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = (function() {
  
    return function half({ max, min }) {
      return (max + min) / 2.0;
    };

    // so: do NOT use this method:
    // return function half(stats) {
    //     return (stats.max + stats.min) / 2.0;
    //   };
  
  })();
  console.log(stats); 
  console.log(half(stats)); 