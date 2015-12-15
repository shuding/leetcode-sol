/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var ro = ["","I","II","III","IV","V","VI","VII","VIII","IX","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","M","MM","MMM"];
    var res = "", offset = 0;
    while (num) {
        res = ro[num % 10 + offset] + res;
        num = ~~(num / 10);
        offset += 10;
    }
    return res;
};