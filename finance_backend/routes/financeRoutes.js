const router = require("express").Router();
const controller = require("../controllers/financeController");
const { verifyToken } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");
/**
 * @swagger
 * /api/finance:
 *   get:
 *     summary: Get financial records (with pagination & search)
 *     tags: [Finance]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of records
 */

router.post("/", verifyToken, allowRoles("admin"), controller.createRecord);
router.get("/", verifyToken, allowRoles("admin", "analyst"), controller.getRecords);
router.delete("/:id", verifyToken, allowRoles("admin"), controller.deleteRecord);

module.exports = router;