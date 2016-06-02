/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    let l = -1, r = -1, ret = [];
    
    intervals
        .sort((i, j) => i.start - j.start)
        .forEach(i => {
            if (i.start > r) {
                ret.push([l, r]);
                l = i.start;
                r = i.end;
            } else if (i.end > r){
                r = i.end;
            }
        });
    
    ret.push([l, r]);

    return ret.slice(1);
};
