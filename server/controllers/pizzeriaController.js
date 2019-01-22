// Pizzerias Functionality

function getPizzerias(req, res){
    const db = req.app.get('db')
    db.get_pizzeria()
    .then(pizzerias => res.json(pizzerias))
    .catch(err => console.log(err))
}

// Pizzeria Review Functionality



module.exports = {
    getPizzerias,
}