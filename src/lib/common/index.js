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
  return `${year}. ${month}. ${date}`
}

export const formatThousandDigit1 = (num) => {
  if (num < 1000) return num;
  return `${(Number(num) / 1000).toFixed(1)}천`
};
