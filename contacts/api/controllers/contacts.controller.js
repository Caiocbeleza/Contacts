const express = require('express'),
    router = express.Router()

const service = require('../service/contacts.service')

router.get('/', async (req, res) => {
    const contacts = await service.getAllContacts()
    res.send(contacts)
})

router.get('/:id', async (req, res) => {
    const contact = await service.getContactById(req.params.id)
    res.send(contact)
})





module.exports = router;