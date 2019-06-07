// HTTP Requests

setTimeout(() => {
  console.log('Delayed message.');
}, 2000);
console.log('First message.');

const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

setTimeout(() => {
  console.log('Really delayed message.');
}, 9000);
