export default function(n, m, polyfill = false, unit = '') {
  const arr = [];
  for (let i = n; i <= m; i++) {
    const value = (polyfill && i < 10 ? '0' + i : i) + unit;
    arr.push(value);
  }
  return arr;
}
