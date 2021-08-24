export const formatNumber = (num) => {
  if (num < 10000) return num;
  return `${(Number(num) / 10000).toFixed()}만회`
}
