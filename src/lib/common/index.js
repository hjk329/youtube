export const formatNumber = (num) => {
  if (num < 10000) return num;
  if (num > 100000000) {
    // eslint-disable-next-line no-unused-expressions
    return `${(Number(num) / 100000000).toFixed(1)}억회`
  }
  // eslint-disable-next-line no-unused-expressions
  return `${(Number(num) / 10000).toFixed()}만회`
}

export const formatDate = (dateInfo) => {
  const published = new Date(dateInfo)
  const year = published.getFullYear()
  const month = published.getMonth() + 1
  const date = published.getDate()
  return `${year}-${month}-${date}`
}

export const formatThousandDigit1 = (num) => {
  if (num < 1000) return num;
  return `${(Number(num) / 1000).toFixed(1)}천`
};

export const formatCommentsTime = (timeInfo) => {
  const now = new Date()
  const published = new Date(timeInfo)
  const timeDiff = now.getTime() - published.getTime()
  const passedHour = Math.round(timeDiff / (1000 * 60 * 60))
  const passedDay = Math.round(timeDiff / (1000 * 60 * 60 * 24))
  const passedMonth = Math.round(timeDiff / (1000 * 60 * 60 * 24 * 30))
  const passedYear = Math.round(timeDiff / (1000 * 60 * 60 * 24 * 30 * 12))
  return passedDay
}
