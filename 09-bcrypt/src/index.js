const bcrypt = require("bcrypt");

async function hashPassword(password) {
    return await bcrypt.hash(password, 11);
}

async function comparePasswords(password, hash) {
    return await bcrypt.compare(password, hash);
}

module.exports = {
    hashPassword,
    comparePasswords,
};

const password = "VerySecurePassword";
const comparePassword = "hello";

hashPassword(password).then((result1) => {
    console.log("---------");
    console.log(password, result1);
    comparePasswords(comparePassword, result1).then((result2) => {
        console.log("---------");
        console.log(result2);
        console.log("---------");
    });
});
