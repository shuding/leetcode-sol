class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int total = nums1.size() + nums2.size();
        int limit = total / 2;
        
        int ansCnt = 0;
        float ans = 0;
        
        int l = 0, r = nums1.size() - 1, m; // bounding of nums1
        int _l = 0, _r = nums2.size() - 1;  // bounding of nums2
        
        pair<int, int> cnt;
        
        while (l <= r) {
            m = (l + r) >> 1;
            
            cnt = getLowerAndUpperCnt(nums2, _l, _r, nums1[m]);
            
            if (cnt.first + m > limit) {
                r = m - 1;
                _r = cnt.second;
            } else if (total - m - cnt.second - 2 > limit) {
                l = m + 1;
                _l = cnt.first;
            } else {
                // found!
                if (total % 2) {
                    return nums1[m];
                } else {
                    ans += nums1[m];
                    ansCnt++;
                    if (cnt.first + m == limit) {
                        r = m - 1;
                    } else if (total - m - cnt.second - 2 == limit) {
                        l = m + 1;
                    } else {
                        return nums1[m];
                    }
                }
            }
        }
        
        l = 0, r = nums2.size() - 1; // bounding of nums2
        _l = 0, _r = nums1.size() - 1;  // bounding of nums1
        
        while (l <= r) {
            m = (l + r) >> 1;
            
            cnt = getLowerAndUpperCnt(nums1, _l, _r, nums2[m]);
            
            if (cnt.first + m > limit) {
                r = m - 1;
                _r = cnt.second;
            } else if (total - m - cnt.second - 2 > limit) {
                l = m + 1;
                _l = cnt.first;
            } else {
                // found!
                if (total % 2) {
                    return nums2[m];
                } else {
                    ans += nums2[m];
                    ansCnt++;
                    if (cnt.first + m == limit) {
                        r = m - 1;
                    } else if (total - m - cnt.second - 2 == limit) {
                        l = m + 1;
                    } else {
                        return nums2[m];
                    }
                }
            }
        }
        
        return ans * 1.0 / ansCnt;
    }
    pair<int, int> getLowerAndUpperCnt(vector<int>& v, int left, int right, int num) {
        int mid, _l, _r;
        int lower, upper;
        
        _l = left; _r = right;
        while (_l + 1 < _r) {
            mid = (_l + _r) >> 1;
            if (v[mid] <= num)
                _l = mid;
            else
                _r = mid;
        }
        while (_l <= right && v[_l] <= num) ++_l;
        upper = _l - 1;
        
        _l = left; _r = right;
        while (_l + 1 < _r) {
            mid = (_l + _r) >> 1;
            if (v[mid] < num)
                _l = mid;
            else
                _r = mid;
        }
        while (_l <= right && v[_l] < num) ++_l;
        lower = _l;
        
        return make_pair(lower, upper);
    }
};