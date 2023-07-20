const express = require('express'),
    router = express.Router()

const service = require('../service/contacts.service')

const db = require('../db');
const bodyParser = require('body-parser');

router.get('/', async (req, res) => {
    const contacts = await service.getAllContacts()
    res.send(contacts)
})

router.get('/:id', async (req, res) => {
    const contact = await service.getContactById(req.params.id)
    if(contact.length == 0)
        res.status(404).json('No record with given id: ' + req.params.id)
    res.send(contact)
})


router.delete('/:id', async (req, res) => {
    const affectedRows= await service.deleteContact(req.params.id)
    if(affectedRows == 0)
        res.status(404).json('No record with given id: ' + req.params.id)
    res.send('Contact Removed.')
})

router.use(bodyParser.json())
router.post('/', (req, resp, next) => {
    const { name, contact, email, picture } = req.body;
    
    db.query('INSERT INTO contacts(name, contact, email, picture) VALUES(?, ?, ?, ?)', 
    [name, contact, email, picture],
    (err, res) => {
        if (err) return next(err);
        resp.status(200).json(res);
    }
    );
    resp.send('Created')    
});





module.exports = router;