const sqlChallenges = [
    {
        id: 1,
        title: "Basic Retrieval",
        template: "SELECT ___ FROM employees WHERE department = 'Sales';",
        blanks: ["*"],
        explanation: "The asterisk (*) is used to select all columns from a table."
    },
    {
        id: 2,
        title: "Filtering Data",
        template: "SELECT name FROM users WHERE age ___ 18 ___ name ASC;",
        blanks: [">", "ORDER BY"],
        explanation: "Use '>' for comparison and 'ORDER BY' to sort your results."
    },
    {
        id: 3,
        title: "Joining Tables",
        template: "SELECT orders.id, customers.name FROM orders ___ JOIN customers ___ orders.customer_id = customers.id;",
        blanks: ["INNER", "ON"],
        explanation: "An INNER JOIN matches records in both tables based on the ON condition."
    },
    {
        id: 4,
        title: "Grouping and Aggregation",
        template: "SELECT city, COUNT(*) FROM users ___ BY city ___ COUNT(*) > 5;",
        blanks: ["GROUP", "HAVING"],
        explanation: "GROUP BY organizes data into summary rows, and HAVING filters those groups."
    },
    {
        id: 5,
        title: "Complex Sorting",
        template: "SELECT * FROM products ORDER BY price ___, name ___ ;",
        blanks: ["DESC", "ASC"],
        explanation: "DESC sorts in descending order, while ASC (the default) sorts in ascending order."
    }
];

export default sqlChallenges;