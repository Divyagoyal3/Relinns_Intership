function delayedFunction() {
    console.log('This function was delayed.');
  }
  
  // Set a timeout and store the timer ID
  const timerId = setTimeout(delayedFunction, 2000);
  
  // Cancel the timeout before it executes
  clearTimeout(timerId);
  
  console.log('Timeout canceled. The delayed function will not be executed.');
  

  // Example function to be debounced
function fetchData(query) {
    // Simulate an asynchronous operation (e.g., AJAX request)
    console.log(`Fetching data for query: ${query}`);
  }
  
  // Create a debounced version of the function with a delay of 500 milliseconds
  const debouncedFetchData = debounce(fetchData, 500);
  
  // Simulate typing in a search input
  debouncedFetchData('A');
  debouncedFetchData('Aj');
  debouncedFetchData('Aja');
  debouncedFetchData('Ajay');
  
  // After 500 milliseconds of no typing, fetchData will be called with the final query 'Ajay'
  