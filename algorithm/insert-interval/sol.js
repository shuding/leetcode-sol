/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    intervals = intervals.concat([newInterval, {start: Infinity}]);
    intervals.sort((a, b) => a.start - b.start);
    let m = -1, s = 0;
    let ret = [];
    intervals.forEach(i => {
        if (i.start <= m) {
            m = Math.max(m, i.end);
        } else {
            if (m >= 0) ret.push([s, m]);
            m = i.end;
            s = i.start;
        }
    });
    return ret;
};
