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
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode *head = NULL, *tail = NULL;
        while (l1 || l2) {
            if ((l1 && l2 && l1->val < l2->val) || !l2) {
                // push l1
                if (!head) {
                    head = new ListNode(l1->val);
                    tail = head;
                }
                else head = head->next = l1;
                l1 = l1->next;
            } else {
                // push l2
                if (!head) {
                    head = new ListNode(l2->val);
                    tail = head;
                }
                else head = head->next = l2;
                l2 = l2->next;
            }
        }
        return tail;
    }
};