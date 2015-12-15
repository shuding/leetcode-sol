class Solution {
public:
    int nthSuperUglyNumber(int n, vector<int>& primes) {
        vector<int> arr, t;
        arr.push_back(1);
        for (int i = 0; i < primes.size(); ++i) t.push_back(0);
        for (int i = 0; i < n; ++i) {
            int next = -1, no = 0;
            for (int j = 0; j < primes.size(); ++j) {
                while (primes[j] * arr[t[j]] <= arr[i]) ++t[j];
                if (next == -1 || primes[j] * arr[t[j]] < next) {
                    next = primes[j] * arr[t[j]];
                    no = j;
                }
            }
            arr.push_back(next);
            t[no]++;
        }
        return arr[n - 1];
    }
};
