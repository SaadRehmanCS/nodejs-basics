const express = require('express');
const app = express();
const people = require('./people');


//provide a path as first arg to apply middleware to specific route.
//any .get calls above this function will not work. Order matters
app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('api/people', people)

app.get('/api', (req, res) => {
    res.status(200).json({ success: true, data: people });
})

app.post('/api', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'provide name value' })
    }
    res.status(201).send({ success: true, person: name });
})

app.post('/api/products/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'provide name value' });
    }
    res.status(201).send({ success: true, data: [...people, name] });
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    } else {
        return res.status(401).send('Please provide name');
    }

})

app.put('/api/people/:id', (req, res) => {
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

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res.status(404).json({ success: false, msg: 'provide name value' });
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ id: req.params.id, data: newPeople })
})

app.listen(5000, () => {
    console.log('serve sis dlistneing');
});