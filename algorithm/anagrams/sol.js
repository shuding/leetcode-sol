/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    function calc(s) {
        // get the hash value of a str
        var v = 0, c;
        for (var i = 0; i < s.length; ++i) {
            c = s[i].charCodeAt(0);
            v += c + c % 10 + Math.floor(233333300000 / c);
        }
        return v;
    }
    
    var hash = {};
    for (var i = 0; i < strs.length; ++i) {
        var h = calc(strs[i]);
        if (hash[h])
            hash[h].push(strs[i]);
        else
            hash[h] = [strs[i]];
    }
    
    var ans = [];
    for (var h in hash) {
        ans.push(hash[h].sort());
    }
    return ans;
};
