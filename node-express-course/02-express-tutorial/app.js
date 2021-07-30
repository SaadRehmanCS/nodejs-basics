const express = require('express');
const app = express();
const people = require('./data').people;

//provide a path as first arg to apply middleware to specific route.
//any .get calls above this function will not work. Order matters
app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/api', (req, res) => {
    res.status(200).json({ success: true, data: people });
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    } else {
        return res.status(401).send('Please provide name');
    }
   
})

app.listen(5000, () => {
    console.log('serve sis dlistneing');
});