/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode* tail = NULL, *tmp, *next, *prev = NULL;
        while (head) {
            tmp = head;
            for (int i = 1; i < k; ++i) {
                if (tmp)
                    tmp = tmp->next;
            }
            if (tmp) {
                if (!tail) tail = tmp;
                if (prev) prev->next = tmp;
                next = tmp->next;
                prev = head;
                for (int i = 0; i < k; ++i) {
                    tmp = head->next;
                    head->next = next;
                    next = head;
                    head = tmp;
                }
            } else {
                if (!tail) tail = head;
                break;
            }
        }
        return tail;
    }
};