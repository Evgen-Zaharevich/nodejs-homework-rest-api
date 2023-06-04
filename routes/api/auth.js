const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const schema = require("../../schemas/authSchemas");
const controllers = require("../../controllers/auth");
const authenticate = require("../../middlewares/authenticate");

const router = express.Router();

router.post(
  "/register",
  validateBody(schema.registerSchema),
  controllers.register
);

router.post("/login", validateBody(schema.loginSchema), controllers.login);

router.get("/current", authenticate, controllers.getCurrent);

router.post("/logout", authenticate, controllers.logout);

module.exports = router;
