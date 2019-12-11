export function obj2str(obj) {
  let arr = [];
  for (let [k, v] of Object.entries(obj)) {
    arr.push(`${k}=${v}`);
  }
  return arr.join('&');
}