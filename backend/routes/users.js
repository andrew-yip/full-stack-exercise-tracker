const router = require('express').Router(); // express router from route we are creating
let User = require('../models/user.model'); // mongoose model we created

// first route endpoint (handle http get request from '/users' url)
router.route('/').get((req, res) => {
    User.find() // mongoose method that gets users from database
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// second endpoint
// post request
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({ username });

    // saves to database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;