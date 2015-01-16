# Write your MySQL query statement below
SELECT b.Name AS Employee 
FROM Employee a, Employee b 
WHERE a.Id=b.ManagerId AND a.Salary<b.Salary
