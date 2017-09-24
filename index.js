const conversions = {
  y: (v) => v * 3.15576e10,
  d: (v) => v * 8.64e7,
  h: (v) => v * 3.6e6,
  m: (v) => v * 6e4,
  s: (v) => v * 1e3,
  ms: (v) => v
}

module.exports = function timeTo (input, out) {
  const val = isNaN(input)
    ? input
        .match(/([0-9]+(y|d|h|m?s?))/g)
        .reduce((accum, curr) => accum + conversions[curr[curr.length - 1]](curr.slice(0, -1)), 0)
    : input

  return val / conversions[out || 'ms'](1)
}
