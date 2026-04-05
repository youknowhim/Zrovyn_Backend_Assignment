const router = require("express").Router();
const authController = require("../controllers/authController");
const { loginLimiter } = require("../middleware/rateLimiter");
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created
 */

// Register user
router.post("/register", authController.register);

// Login user
router.post("/login", loginLimiter, authController.login);

module.exports = router;