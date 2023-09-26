#!/usr/bin/node

export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error());
    }
  })
    .then((response) => {
      console.log('Got a response from the API');
      return response;
    })
    .catch(() => {
      console.error('The fake API is not working currently');
      return new Error();
    });
}
