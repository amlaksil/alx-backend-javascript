export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const strList = [...set]
    .filter((str) => str.startsWith(startString))
    .map((str) => str.substring(startString.length))
    .join('-');

  return strList;
}
