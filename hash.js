const bcrypt = require('bcrypt');
const saltRounds = 10;
const pw = 'heyy';

bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(pw, salt, function (err, hash) {
        console.log(hash);
        console.log(salt);

        bcrypt.compare('hi', hash, function (err, res) {
            if (res) {
                console.log("successed");
            } else {
                console.log("failed");
            }
        });

    });
});




