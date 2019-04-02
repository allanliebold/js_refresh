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

// Read file
const fs = require("fs");

fs.readFile("myFile.txt", (err, data) => {
  // Execute once the file has been loaded. 
  console.log(data);
});

console.log("This will run before the file is loaded.");
