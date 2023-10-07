// Define a constant WeakMap instance
export const weakMap = new WeakMap();

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint exists in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count for the endpoint
    weakMap.set(endpoint, 1);
  } else {
    // If it exists, increment the count for the endpoint
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
  }

  // Get the current count for the endpoint
  const count = weakMap.get(endpoint);

  // Check if the number of queries is >= 5
  if (count >= 5) {
    // Throw an error with the message "Endpoint load is high"
    throw new Error('Endpoint load is high');
  }
}
