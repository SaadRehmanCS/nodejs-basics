const { readFile, writeFile } = require('fs').promises;
//const { promisify } = require('util');

//const readFilePromise = promisify(readFile);
//const writeFilePromise = promisify(writeFile);

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

getText('./content/first.txt')
.then(result => console.log(result))
.catch((err) => console.log(err));

const start = async () => {
    try {
        const first = await readFile('./content/first.txt');
        await writeFile('./content/result-mind-grenade.txt', 'THIS is mind grenade');
    } catch (err) {
        console.log(err);
    }
}
start();