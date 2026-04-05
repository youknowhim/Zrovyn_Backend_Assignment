const router = require("express").Router();
const controller = require("../controllers/dashboardController");
const { verifyToken } = require("../middleware/authMiddleware");
/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get dashboard summary (income, expense, net)
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard summary data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalIncome:
 *                   type: number
 *                   example: 50000
 *                 totalExpense:
 *                   type: number
 *                   example: 20000
 *                 net:
 *                   type: number
 *                   example: 30000
 *       401:
 *         description: Unauthorized (Invalid or missing token)
 */

router.get("/", verifyToken, controller.getSummary);

module.exports = router;