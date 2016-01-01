class Solution {
public:
    #define MAX_INT 2147483647
    #define MIN_INT -2147483648
    int divide(int dividend, int divisor) {
        if (!divisor) return MAX_INT;
        
        int ans = 0, c, d;
        int sym = 1;
        if (dividend > 0) sym *= -1, dividend *= -1;
        if (divisor > 0) sym *= -1, divisor *= -1;
        while (dividend <= divisor) {
            c = -1;
            d = divisor;
            while (d >= MIN_INT - d && dividend <= d + d) {
                d += d;
                c += c;
            }
            dividend -= d;
            if (ans >= MIN_INT - c)
                ans += c;
            else
                return MAX_INT;
        }
        if (ans == MIN_INT && sym == 1)
            return MAX_INT;
        return ans * sym * -1;
    }
};