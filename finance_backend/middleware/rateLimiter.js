
const rateLimit = require("express-rate-limit");
exports.loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 5, // only 5 attempts per IP
  message: "Too many login attempts, try later"
});
