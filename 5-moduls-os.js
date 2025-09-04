const os = require('os');
// info about current user
console.log(os.userInfo());

const osallmod={
    name:os.type(),
    release:os.release(),
    platform:os.platform(),
    freem:os.freemem(),
    fullmem:os.totalmem()

}
console.log(osallmod)