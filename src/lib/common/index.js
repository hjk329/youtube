export const formatNumber = (num) => {
  if (num < 10000) return num;
  return `${(Number(num) / 10000).toFixed()}만회`
}

export const formatDate = (date) => {
  const published = new Date(date)
  const year = published.getFullYear()
  const month = published.getMonth() + 1
  const day = published.getDay()
  return `${year}. ${month}. ${day}`
}

export const formatThousandDigit1 = (num) => {
  if (num < 1000) return num;
  return `${(Number(num) / 1000).toFixed(1)}천`
};
