# Write your MySQL query statement below
SELECT Email 
FROM Person
AS Email
GROUP BY Email
HAVING (COUNT(*) > 1)
