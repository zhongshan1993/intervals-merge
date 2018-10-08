export const parseInterval = interval => {
  const intervalTemp = String(interval).slice(1, -1).replace(/∞/g, 'Infinity')
  const inputRegexp = /(?:,|，)/g
  const text = intervalTemp.split(inputRegexp)
  const min = Number(text[0])
  const max = Number(text[1])
  const leftOperator = interval.substring(0, 1)
  const rightOperator = interval.charAt(interval.length - 1)
  return {
    min,
    max,
    leftOperator,
    rightOperator
  }
}
