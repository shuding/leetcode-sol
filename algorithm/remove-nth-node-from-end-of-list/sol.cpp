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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *tail = head, *p = head->next;
        while (n--) if (p) p = p->next; else return tail->next;
        while (p) {
            tail = tail->next;
            p = p->next;
        }
        tail->next = tail->next->next;
        return head;
    }
};