const db = require("../config/db");

exports.createRecord = async (req, res) => {
  const { amount, type, category, note, date } = req.body;

  await db.query(
    "INSERT INTO records (user_id,amount,type,category,note,date) VALUES (?,?,?,?,?,?)",
    [req.user.id, amount, type, category, note, date]
  );

  res.json({ message: "Record added" });
};

exports.getRecords = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";

    const offset = (page - 1) * limit;

    // 🔥 search query
    const searchQuery = `%${search}%`;

    // fetch filtered data
    const [records] = await db.query(
      `SELECT * FROM records 
       WHERE category LIKE ? 
       OR note LIKE ? 
       OR type LIKE ?
       LIMIT ? OFFSET ?`,
      [searchQuery, searchQuery, searchQuery, limit, offset]
    );

    // total count for pagination
    const [countResult] = await db.query(
      `SELECT COUNT(*) as total FROM records 
       WHERE category LIKE ? 
       OR note LIKE ? 
       OR type LIKE ?`,
      [searchQuery, searchQuery, searchQuery]
    );

    const total = countResult[0].total;

    res.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: records
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteRecord = async (req, res) => {
  await db.query("DELETE FROM records WHERE id=?", [req.params.id]);
  res.json({ message: "Deleted" });
};