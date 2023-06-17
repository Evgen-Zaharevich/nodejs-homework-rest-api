const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const schema = require("../../schemas/authSchemas");
const controllers = require("../../controllers/auth");
const authenticate = require("../../middlewares/authenticate");
const upload = require("../../middlewares/upload");

const router = express.Router();

router.post(
  "/register",
  validateBody(schema.registerSchema),
  controllers.register
);

router.get("/verify/:verificationCode", controllers.verify);

router.post(
  "/verify",
  validateBody(schema.emailSchema),
  controllers.resendVerifyEmail
);

router.post("/login", validateBody(schema.loginSchema), controllers.login);

router.get("/current", authenticate, controllers.getCurrent);

router.post("/logout", authenticate, controllers.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
