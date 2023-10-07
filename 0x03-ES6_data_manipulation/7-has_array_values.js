export default function hasValuesFromArray(Set, Array) {
  const status = Array.map((element) => Set.has(element));
  return (status.every((element) => element));
}
