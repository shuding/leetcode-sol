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
    ListNode* swapPairs(ListNode* head) {
        ListNode* tail = head ? (head->next ? head->next : head) : NULL, *tmp = NULL;
        while (head && head->next) {
            if (tmp) tmp->next = head->next;
            tmp = head->next;
            head->next = tmp->next;
            tmp->next = head;
            tmp = head;
            head = head->next;
        }
        return tail;
    }
};