/**
 * 这是测试的入口文件，你的测试代码可以写在这个文件或是这个文件引用的文件中
 */
import assert from 'power-assert'
import isEqual from 'lodash/isEqual'
import intervalsMerge from '../../src/index'

describe('区间解析方法测试', function () {
    it('前开后闭区间测试', function () {
        const interval = '(0,1]'
        assert(isEqual(intervalsMerge.parseInterval(interval), { min: 0, max: 1, leftOperator: '(', rightOperator: ']' }))
    })

    it('前闭后开区间测试', function () {
        const interval = '[0,1)'
        assert(isEqual(intervalsMerge.parseInterval(interval), { min: 0, max: 1, leftOperator: '[', rightOperator: ')' }))
    })

    it('无穷大数解析测试', function () {
        const interval = '[0,+∞)'
        assert(isEqual(intervalsMerge.parseInterval(interval), { min: 0, max: Infinity, leftOperator: '[', rightOperator: ')' }))
    })
})

describe('区间合并方法测试', () => {
    it('合并两个区间', () => {
        const intervals = [ { min: 0, max: 1, leftOperator: '(', rightOperator: ']' }, { min: 1, max: 2, leftOperator: '(', rightOperator: ']' } ]
        const mergedIntervals = [ { min: 0, max: 2, leftOperator: '(', rightOperator: ']' } ]
        assert(isEqual(intervalsMerge.merge(intervals), mergedIntervals))
    })
})
