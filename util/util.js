function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  const hour = parseInt(time / 3600, 10)
  time %= 3600
  const minute = parseInt(time / 60, 10)
  time = parseInt(time % 60, 10)
  const second = time

  return [hour, minute, second]
    .map(function(n) {
      n = n.toString()
      return n[1] ? n : '0' + n
    })
    .join(':')
}

function formatLocation(longitude, latitude, speed, accuracy, altitude, horizontalAccuracy) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.'),
    speed: speed, 
    accuracy: accuracy, 
    altitude: altitude, 
    horizontalAccuracy: horizontalAccuracy
  }
}

function fib(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

function formatLeadingZeroNumber(n, digitNum = 2) {
  n = n.toString()
  const needNum = Math.max(digitNum - n.length, 0)
  return new Array(needNum).fill(0).join('') + n
}

function formatDateTime(date, withMs = false) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const ms = date.getMilliseconds()

  let ret =
    [year, month, day].map(value => formatLeadingZeroNumber(value, 2)).join('-') +
    ' ' +
    [hour, minute, second].map(value => formatLeadingZeroNumber(value, 2)).join(':')
  if (withMs) {
    ret += '.' + formatLeadingZeroNumber(ms, 3)
  }
  return ret
}

function waitForTimeout (delay)  {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(true)
      } catch (e) {
        reject(false)
      }
    }, delay)
  })
}

/**
 * @desc Parse Url( 地址 => {pathname: '', query: { // 参数Object }})
 * @param {*} url - 需要 parse 的地址
 */
function parseUrl(url) {
  const matchs = url.match(/(.*?)\?(.*)/)
  const result = {
    pathname: matchs ? matchs[1] : url,
    query: {}
  }
  if (matchs) {
    const re = /([^&=]+)=([^&]*)/g
    let m
    while ((m = re.exec(matchs[2])) !== null) {
      result.query[decodeURIComponent(m[1])] = decodeURIComponent(m[2])
    }
  }
  return result
}


module.exports = {
  waitForTimeout,
  formatTime,
  formatLocation,
  fib,
  formatDateTime,
  parseUrl
}
