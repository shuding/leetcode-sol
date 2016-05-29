/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var a = [];
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();
    for (var i = 0; i < num1.length; ++i)
        for (var j = 0; j < num2.length; ++j) {
            a[i + j] = (a[i + j] || 0) + (+num1[i]) * (+num2[j]);
        }
    for (var i = 0; i < a.length; ++i) 
        if (a[i] > 9) {
            a[i + 1] = (a[i + 1] || 0) + ~~(a[i] / 10);
            a[i] %= 10;
        }
    while (a.length > 1 && !a[a.length - 1]) a.length--;
    return a.reverse().join('');
};
