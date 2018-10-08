import { merge } from './intervals-merge'
import { parseInterval } from './utils'

let development = '{{DEVELOPMENT}}' === 'development'
if (development) {
    console.log('开发模式  ')
} else {
    console.log('打包模式')
}

export default {
    version: '{{VERSION}}',
    merge: (intervals = []) => merge(intervals.map(interval => parseInterval(interval)))
}