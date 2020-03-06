function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [50, 85, 45, 14, 35, 78];
      break;
    default:
      res = null;
  }
  return res;
}
module.exports = chart;
