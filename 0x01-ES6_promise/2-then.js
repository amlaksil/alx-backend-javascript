#!/usr/bin/node

export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return response;
    })
    .catch(() => new Error());
}
