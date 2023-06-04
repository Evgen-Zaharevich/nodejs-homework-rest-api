const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/contacts");
const validateBody = require("../../middlewares/validateBody");
const schema = require("../../schemas/contacts");
const isValidId = require("../../middlewares/isValidId");
const authenticate = require("../../middlewares/authenticate");

router.use(authenticate);

router.get("/", controllers.getAll);

router.get("/:contactId", isValidId, controllers.getById);

router.post("/", validateBody(schema.contactSchema), controllers.addContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schema.contactSchema),
  controllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schema.updateFavoritesSchema),
  controllers.updateStatusContact
);

router.delete("/:contactId", isValidId, controllers.deleteContact);

module.exports = router;
