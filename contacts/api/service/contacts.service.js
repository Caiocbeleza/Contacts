const db = require('../db')

module.exports.getAllContacts = async () => {
    const [rows] = await db.query("SELECT * FROM contacts")
        .catch(err => console.log(err))
        return rows;
}

module.exports.getContactById = async (id) => {
    const [rows] = await db.query("SELECT * FROM contacts WHERE id = " + id)
        .catch(err => console.log(err))
        return rows;
}