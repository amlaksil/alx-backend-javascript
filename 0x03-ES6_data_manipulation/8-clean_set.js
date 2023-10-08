export default function cleanSet(set, startString) {
  if (startString === '') return ('');

  const strList = [...set].filter((str) => str.startsWith(startString));
  return strList.join('-').split(startString).join('');
}
