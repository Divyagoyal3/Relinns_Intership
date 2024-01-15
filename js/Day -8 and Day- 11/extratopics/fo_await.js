async function* asyncGenerator() {
    yield new Promise(resolve => setTimeout(() => resolve(1), 1000));
    yield new Promise(resolve => setTimeout(() => resolve(2), 1000));
    yield new Promise(resolve => setTimeout(() => resolve(3), 1000));
  }
  
  async function processAsyncData() {
    // Using for await...of to iterate over an asynchronous generator
    for await (const item of asyncGenerator()) {
      console.log(item);
    }
  }
  
  processAsyncData();
  