module.exports = {
  add,
};

// function add(a = 0, b = 0) {
//   // a = a || 0
//   return a + b;
// }

//reduce

function add(x){
  const args = Array.isArray(x) ? x : Array.from(arguments)

  return args.reduce((acc, val) => {
    return acc + val
  }, 0)
}
