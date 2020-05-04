// 获取点前年月日
export function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

// 时间戳转换为年月日
export function formatDate(value) {
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? ('0' + MM) : MM;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let m = date.getMinutes();
  m = m < 10 ? ('0' + m) : m;
  let s = date.getSeconds();
  s = s < 10 ? ('0' + s) : s;
  // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
  return y + '-' + MM + '-' + d;
}

// 时间戳转换为年月
export function formatDateMonth(value) {
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? ('0' + MM) : MM;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let m = date.getMinutes();
  m = m < 10 ? ('0' + m) : m;
  let s = date.getSeconds();
  s = s < 10 ? ('0' + s) : s;
  // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
  // return y + '-' + MM + '-' + d;
  return y + '-' + MM;
}

// 日期时间格式化
export function datetimeFormat (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// 今日0点时间（精确到秒）
export function getTodayZeroTimestamp () {
  // return Math.floor(new Date(new Date().toLocaleDateString()).getTime() / 1000)

  // IE 11浏览器中不支持new Date('2019-08-02')的形式
  let todayDate = new Date()
  let todayString =
    todayDate.getFullYear() + '/' + (todayDate.getMonth() + 1) + '/' + todayDate.getDate()
  return Math.floor(new Date(todayString).getTime() / 1000)
}

// 现在时间（精确到秒）
export function getNowTimestamp () {
  return Math.floor(new Date().getTime() / 1000)
}

/**
 * 获取传入时间的时间戳(精确到秒)
 *
 * @export
 * @param {*} input 时间数组或字符串
 * @returns
 */
export function getTimestamp (input) {
  return Array.isArray(input)
    ? [_getTimestamp(input[0]), _getTimestamp(input[1])]
    : _getTimestamp(input)
}

function _getTimestamp (datetime = new Date()) {
  return Math.floor(new Date(datetime).getTime() / 1000)
}

/**
 * 相对的时间 (默认相对当前时间的时间)
 *
 * @export
 * @param {*} time
 * @returns
 */
export function relativeTime (datetime, basetime = new Date()) {
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  // const gap = Math.abs(basetime - new Date(datetime))
  let gap = basetime - new Date(datetime)
  if (gap < 0) {
    // 将未来时间统一显示为 "1秒前"
    gap = 1000
  }

  if (gap < msPerMinute) {
    return Math.floor(gap / 1000) + ' 秒前'
  } else if (gap < msPerHour) {
    return Math.floor(gap / msPerMinute) + ' 分钟前'
  } else if (gap < msPerDay) {
    return Math.floor(gap / msPerHour) + ' 小时前'
  } else if (gap < msPerMonth) {
    return Math.floor(gap / msPerDay) + ' 天前'
  } else if (gap < msPerYear) {
    return Math.floor(gap / msPerMonth) + ' 月前'
  } else {
    return Math.floor(gap / msPerYear) + ' 年前'
  }
}

/**
 * 获取昨天， 前天， 明天， 后天的日期
 * const yesterday = getDay(-1, '/')  // IE 不支持 new Date()中使用横杠
 * @param {*} num
 * @param {*} str
 * @returns
 */
export function getDay (num = 0, str = '/') {
  const today = new Date()
  const nowTime = today.getTime()
  const ms = 24 * 3600 * 1000 * num
  today.setTime(parseInt(nowTime + ms))
  const oYear = today.getFullYear()

  let oMoth = (today.getMonth() + 1).toString()
  if (oMoth.length <= 1) {
    oMoth = '0' + oMoth
  }

  let oDay = today.getDate().toString()
  if (oDay.length <= 1) {
    oDay = '0' + oDay
  }

  return oYear + str + oMoth + str + oDay
}


export function timestamp2str (timestamp) {
  // 以秒为单位
  let date = new Date(timestamp * 1000)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate()) + ' '
  let h = (date.getHours() < 10 ? '0' + date.getHours() : '' + date.getHours()) + ':'
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : '' + date.getMinutes()) + ':'
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : '' + date.getSeconds()
  return Y + M + D + h + m + s
}

/*
 ** 获取本周的起止日期
 * @returns 数组[0]为周一, [1]为周日
 */
export function getWeek () {
  // 按周日为一周的最后一天计算
  var date = new Date()
  // 今天是这周的第几天
  var today = date.getDay()
  // 上周日距离今天的天数（负数表示）
  var stepSunDay = -today + 1
  // 如果今天是周日
  if (today == 0) {
    stepSunDay = -7
  }
  // 周一距离今天的天数（负数表示）
  var stepMonday = 7 - today
  var time = date.getTime()
  var monday = new Date(
    time +
      stepSunDay * 24 * 3600 * 1000 -
      date.getHours() * 3600 * 1000 -
      date.getMinutes() * 60 * 1000 -
      date.getSeconds() * 1000
  )
  var sunday = new Date(
    time +
      stepMonday * 24 * 3600 * 1000 -
      date.getHours() * 3600 * 1000 -
      date.getMinutes() * 60 * 1000 -
      date.getSeconds() * 1000 +
      23 * 3600 * 1000 +
      59 * 60 * 1000 +
      59 * 1000
  )

  let timeArr = []
  timeArr.push(monday, sunday)
  return timeArr
}
