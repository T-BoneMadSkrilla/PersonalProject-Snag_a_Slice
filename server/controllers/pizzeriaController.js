// Pizzerias Functionality

function getPizzerias(req, res){
    const db = req.app.get('db')
    db.get_pizzeria()
    .then(pizzerias => res.json(pizzerias))
    .catch(err => console.log(err))
}

// Pizzeria Review Functionality

function getComments(req, res){
    const db = req.app.get('db')
    db.get_Pizzeria_Comments(+req.params.id)
    .then(response => res.json(response))
    .catch(error_in_backend => console.log(error_in_backend))
};

function postComments(req, res){
    const db = req.app.get('db')
    // console.log(req.body)
    db.addComments([req.body.username, req.body.review, req.body.pizza_id])
    .then(response => res.json(response))
    .catch(error_in_backend => console.log(error_in_backend))
}

function updateComments(req, res){
    const db = req.app.get('db')
    db.updateComment([req.body.id, req.body.review, req.body.pizza_id])
    .then(response => res.json(response))
    .catch(error_in_backend => console.log(error_in_backend))
};

function deleteComments(req, res){
    const db = req.app.get('db')
    db.deleteComment([req.body.id])
    .then(response => res.json(response))
    .catch(error_in_backend => console.log(error_in_backend))
};

function getUser(req, res){
    // console.log(req.session.user)
    res.json(req.session.user)
}

module.exports = {
    getPizzerias,
    getComments,
    postComments,
    updateComments,
    deleteComments,
    getUser
}