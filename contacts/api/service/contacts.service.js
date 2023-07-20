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
    const [{affectedRows}] = await db.query("DELETE FROM contacts WHERE id = ?", [id])
        .catch(err => console.log(err))
        return affectedRows;
}

// module.exports.addContact = async (name, contact, email, picture) => {
//     const [newContact] = await db.query("INSERT INTO contacts (name, contact, email, picture) values(?,?,?,?)", [name, contact, email, picture])
//         .catch(err => console.log(err))
//         return newContact;
// }