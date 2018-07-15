// Asynchronous Javascript tutorial

function doAsyncTask(cb) {
  setImmediate(() => {
    console.log('Async Task Calling Callback');
    cb();
  });
  
  process.nextTick(() => {
    
  });
}
