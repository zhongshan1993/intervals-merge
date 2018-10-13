import { merge } from './intervals-merge'
import { parseInterval } from './utils'

// let development = '{{DEVELOPMENT}}' === 'development'
export default {
    version: '{{VERSION}}',
    parseInterval,
    merge
    // merge: (intervals = []) => merge(intervals.map(interval => parseInterval(interval)))
}