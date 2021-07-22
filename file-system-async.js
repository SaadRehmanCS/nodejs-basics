const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return null;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return null;
        }
        writeFile('./content/result-async.txt', 'Here is the result of the async module', (err, result) => {
            if (err) {
                console.log(err);
                return null;
            }
            console.log(result);
        })
    })
})