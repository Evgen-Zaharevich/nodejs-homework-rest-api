const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("models/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newUser = { id: nanoid(), name, email, phone };
  await fs.writeFile(
    contactsPath,
    JSON.stringify([...contacts, newUser], null, 2),
    "utf-8"
  );
  return newUser;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  contacts[index] = { contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), "utf-8");
  return contacts[index];
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  // console.log(`📌  removeContact  contacts:`, contacts);
  // const index = contacts.findIndex((contact) => contact.id === contactId);
  // if (index === -1) {
  //   return null;
  // }
  // const [result] = contacts.splice(index, 1);
  // await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), "utf-8");
  // return result;

  const filteredContacts = contacts.filter((item) => item.id !== contactId);
  await fs.writeFile(
    contactsPath,
    JSON.stringify(filteredContacts, null, 2),
    "utf-8"
  );
  return filteredContacts;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
