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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int carry = 0, val;
        ListNode *head = NULL, *tail = NULL;
        while (l1 || l2 || carry) {
            val = (l1 ? l1->val : 0) + (l2 ? l2->val : 0) + carry;
            carry = val / 10;
            val %= 10;
            ListNode *curr = new ListNode(val);
            if (head) {
                head->next = curr;
                head = head->next;
            } else {
                head = curr;
                tail = curr;
            }
            if (l1) l1 = l1->next;
            if (l2) l2 = l2->next;
        }
        return tail;
    }
};