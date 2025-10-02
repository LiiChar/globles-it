DECLARE @root_sub_id INT;
SELECT @root_sub_id = subdivision_id
FROM collaborators
WHERE id = 710253;

IF @root_sub_id IS NULL
BEGIN
    PRINT 'Сотрудник 710253 не найден или у него нет subdivision_id';
    RETURN;
END

;WITH SubTree AS (
    SELECT id, name, parent_id, 0 AS sub_level
    FROM subdivisions
    WHERE id = @root_sub_id

    UNION ALL

    SELECT s.id, s.name, s.parent_id, st.sub_level + 1
    FROM subdivisions s
    INNER JOIN SubTree st ON s.parent_id = st.id
    -- нет фильтрации здесь
),
CollsCount AS (
    SELECT subdivision_id, COUNT(*) AS colls_count
    FROM collaborators
    GROUP BY subdivision_id
)
SELECT
    c.id,
    c.name,
    st.name     AS sub_name,
    st.id       AS sub_id,
    st.sub_level,
    ISNULL(cc.colls_count, 0) AS colls_count
FROM collaborators c
INNER JOIN SubTree st ON c.subdivision_id = st.id
LEFT JOIN CollsCount cc ON st.id = cc.subdivision_id
WHERE c.age < 40
  AND st.id NOT IN (100055, 100059)  -- исключаем только в финальном результате
ORDER BY st.sub_level ASC, st.id, c.id
OPTION (MAXRECURSION 0);