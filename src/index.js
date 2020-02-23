function toVal(mix) {
  var k,
    y,
    str = ''
  if (mix || mix === 0) {
    if (typeof mix === 'object') {
      if (Array.isArray(mix)) {
        for (k = 0; k < mix.length; k++) {
          if (mix[k] && (y = toVal(mix[k]))) {
            str && (str += ' ')
            str += y
          }
        }
      } else {
        for (k in mix) {
          if (mix[k] && (y = toVal(k))) {
            str && (str += ' ')
            str += y
          }
        }
      }
    } else if (typeof mix !== 'boolean' && !mix.call) {
      str && (str += ' ')
      str += mix
    }
  }
  return str
}

function clsx(...args) {
  var i = 0,
    x,
    str = ''
  while (i < args.length) {
    if ((x = toVal(args[i++]))) {
      str && (str += ' ')
      str += x
    }
  }
  return str
}

function slsx(...args) {
  return clsx(...args)
    .split(' ')
    .map(s => parseInt(s))
    .filter(i => i >= 0)
}

module.exports = slsx
