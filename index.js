const conversions = {
  y: (v) => v * 3.15576e10,
  d: (v) => v * 8.64e7,
  h: (v) => v * 3.6e6,
  m: (v) => v * 6e4,
  s: (v) => v * 1e3,
  ms: (v) => v
}

module.exports = function timeIn (str, out) {
  const msValue = str
    .match(/([0-9]+[a-z]{1,2})/g)
    .reduce((accum, curr) => accum + conversions[curr[curr.length - 1]](curr.slice(0, -1)), 0)

  return msValue / conversions[out || 'ms'](1)
}
