export const IDR = (number) => {
  if (typeof number !== 'number') throw new TypeError('Params must be a number')
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0,
  }).format(number)
}