const db = require('../db')

module.exports.getAllContacts = async () => {
    const [contacts] = await db.query("SELECT * FROM contacts")
        .catch(err => console.log(err))
        return contacts;
}

module.exports.getContactById = async (id) => {
    const [contact] = await db.query("SELECT * FROM contacts WHERE id = ?", [id])
        .catch(err => console.log(err))
        return contact;
}

module.exports.deleteContact = async (id) => {
    const [contact] = await db.query("DELETE FROM contacts WHERE id = ?", [id])
        .catch(err => console.log(err))
        return contact;
}