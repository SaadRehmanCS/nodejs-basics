const os = require('os');

// info about user
const user = os.userInfo();
console.log(user);


// returns system uptime in days
console.log(os.uptime() / 60 / 60 / 24);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);