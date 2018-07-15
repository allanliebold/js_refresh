// Asynchronous Javascript tutorial

function doAsyncTask(cb) {
  setImmediate(() => {
    console.log('Async Task Calling Callback');
    cb();
  });
  
  process.nextTick(() => {
    console.log('Async Task Calling Callback');
    cb();
  });
  
  doAsyncTask(() => console.log(message));
  
  let message = 'Callback Called';
}
