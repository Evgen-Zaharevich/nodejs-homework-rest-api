const express = require("express");

const router = express.Router();
const controllers = require("../../controllers/contacts");
const validateBody = require("../../middlewares/validateBody");
const schema = require("../../schemas/contacts");

router.get("/", controllers.getAll);

router.get("/:contactId", controllers.getById);

router.post("/", validateBody(schema.schema), controllers.addContact);

router.put(
  "/:contactId",
  validateBody(schema.schema),
  controllers.updateContact
);

router.delete("/:contactId", controllers.deleteContact);

module.exports = router;
