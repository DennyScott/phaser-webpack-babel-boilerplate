export default function(cb) {
  console.log('this is a test');
  cb();
}

export function add(a, b) {
  return a + b;
}
