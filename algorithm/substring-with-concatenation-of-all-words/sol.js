/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var p = [];
    
    var sl = s.length;
    
    var match = Array(sl).fill(-1);
    var next = [], tag;
    var wl = words[0].length;
    var same = [];

	words = words.sort();

	for (var i = words.length - 1; i >= 0; --i) {
		if (words[i] == words[i + 1])
			same[i] = same[i + 1] + 1;
		else
			same[i] = 1;
	}

    for (var i = 0; i < words.length; ++i) {
    	if (i && words[i] == words[i - 1]) 
			continue;
        // KMP
        next[0] = 0;
        
        var w  = words[i];
            
        for (var j = 1; j < wl; ++j) {
            var k = next[j - 1];
            while (w[k] != w[j] && k) 
                k = next[k - 1];
            if (w[k] == w[j])
                next[j] = k + 1;
            else
                next[j] = 0;
        }
        
        var ps = 0, pw = 0;
        
        while (ps < sl) {
            if (s[ps] == w[pw]) {
                ++ps; ++pw;
            } else {
                if (pw)
                    pw = next[pw - 1];
                else
                    ++ps;
            }
            
            if (pw == wl) {
                match[ps - wl] = i;
                pw = next[pw - 1];
            }
        }
    }

    var tg;
    var las = {};
    for (var i = 0; i < words.length; ++i) las[i] = [];

    for (var i = sl - 1; i >= 0; --i) {
        p[i] = i;
        var j = match[i];
        if (j >= 0) {
	        tg = i + wl;
	        if (tg < sl && p[tg] >= 0) {
	        	if (typeof las[j][las[j].length - same[j]] == 'undefined' || p[tg] <= las[j][las[j].length - same[j]]) {
	        		p[i] = p[tg];
	        	} else {

	        		var top = las[j].length - 1;
	        		var cnt = same[j] - 1;
	        		if (top >= cnt)
		        		for (var k = i; k < p[tg]; k += wl) {
		        			while (top >= 0 && las[j][top] < k) --top; 
		        			if (top >= 0 && las[j][top] == k) {
		        				--cnt;
		        				--top;
		        				if (cnt < 0) {
		        					p[i] = k;
		        					break;
		        				}
		        				if (top < 0) break;
		        			}
		        		}

	        		if (cnt >= 0) p[i] = p[tg];
	        	}
	        } else 
	        	p[i] = i + wl;
	        las[j].push(i);
        }
    }

    return p.map((x, i) => x - i == words.length * wl ? i : -1).filter(i => i >= 0);
};
