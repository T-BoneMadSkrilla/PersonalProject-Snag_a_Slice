const bcrypt = require("bcryptjs");

const login = (req, res) => {
    const db = req.app.get("db");
    db.findUser({username: req.body.username})
    .then(async users => {
        if (!users.length){
            res.status(401).json({error: "User Not Found"})
        } else {
            const isMatch = await bcrypt.compare(req.body.password, users[0].password)
            if (isMatch) {
                req.session.user = {username: users[0].username}
                res.json({username: users[0].username});
            } else {
                res.status(401).json({error: "Incorrect password"});
            }
        }
    });
};

module.export = {
    login
}