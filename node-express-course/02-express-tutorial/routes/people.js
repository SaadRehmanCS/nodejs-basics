const express = require('express');
const router = express.Router();

let { people } = require('../data');

router.post('/api', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'provide name value' })
    }
    res.status(201).send({ success: true, person: name });
})

router.post('/api/products/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'provide name value' });
    }
    res.status(201).send({ success: true, data: [...people, name] });
})

router.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: 'provide name value' });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    console.log(id, name);
    res.send({ id: id, data: newPeople });
})

router.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res.status(404).json({ success: false, msg: 'provide name value' });
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ id: req.params.id, data: newPeople })
})

module.exports = router;