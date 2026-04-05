const db = require("../config/db");

exports.getSummary = async (req, res) => {
  const [income] = await db.query(
    "SELECT SUM(amount) as total FROM records WHERE type='income'"
  );

  const [expense] = await db.query(
    "SELECT SUM(amount) as total FROM records WHERE type='expense'"
  );

  res.json({
    totalIncome: income[0].total || 0,
    totalExpense: expense[0].total || 0,
    net: (income[0].total || 0) - (expense[0].total || 0),
  });
};