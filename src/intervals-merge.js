export const merge = intervals => {
  intervals.sort((a, b) => {
    if (a.min !== b.min) {
        return a.min - b.min;
    }
    if (a.max === b.max) {
      if (a.rightOperator === ']' && b.rightOperator === ')') {
        return true
      } else {
        return false
      }
    } else {
      return a.max - b.max
    }
  })
  const len = intervals.length
  let ans = []
  let leftOperator
  let rightOperator
  let start
  let end

  for (let i = 0; i < len; i++) {
    let interval = intervals[i]
    let s = interval.min
    let  e = interval.max
    if (start === undefined) {
      start = s
      end = e
      leftOperator = interval.leftOperator
      rightOperator = interval.rightOperator
    } else if ((s === end && !(rightOperator === ')' && interval.leftOperator === '(')) || s < end) {
      if (e === end) {
        if (interval.rightOperator === ']' && rightOperator === ')') {
          rightOperator = ']'
        } else if (interval.rightOperator === ')' && rightOperator === ']') {
          rightOperator = ']'
        } else {
          // TODO:
          rightOperator = rightOperator
        }
        // TODO:
        end = end
      } else if (e > end) {
        end = e
        rightOperator = interval.rightOperator
      } else {
        // TODO:
        end = end
      }
    } else {
      let part = {
        min: start,
        max: end,
        leftOperator,
        rightOperator
      }
      ans.push(part)
      start = s
      end = e
      leftOperator = interval.leftOperator
      rightOperator = interval.rightOperator
    }
  }

  if (start !== undefined) {
    let part = {
      min: start,
      max: end,
      leftOperator,
      rightOperator
    }
    ans.push(part)
  }

  return ans
}
