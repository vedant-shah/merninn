const express = require('express');
const Users = require('../models/Users');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwtSecret = 'welcometomerninn'
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')


router.post('/createuser', [
    body('email', 'enter a valid email').isEmail(),
    body('name', 'enter a valid name').isLength({ min: 2 }),
    body('password', 'enter a valid password').isLength({ min: 5 })]
    , async (req, res) => {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let success = false;
            return res.status(400).json({ success, errors: errors.array() });
        }
        try {
            let user = await Users.findOne({ email: req.body.email });
            if (user) {
                let success = false;
                return res.status(400).json({success, error: "Email already exists" })
            }
            let salt = await bcrypt.genSalt(10);
            let encryptedPassword = await bcrypt.hash(req.body.password, salt);
            user = await Users.create({
                name: req.body.name,
                password: encryptedPassword,
                email: req.body.email
            });
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            success = true;
            res.json({success, authToken });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
)

//this endpoint is for authenticating a user.
router.post('/login', [
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password cannot be blank').exists()]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            let user = await Users.findOne({ email });
            if (!user) {
                let success = false;
                return res.status(400).json({ success, error: "Login with correct credentials" })
            }
            const passCompare = await bcrypt.compare(password, user.password);
            if (!passCompare) {
                return res.status(400).json({ error: "Login with correct credentials" })
            }
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            let success = true;
            res.json({success, authToken });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
)

// Get the details of a logged in user, hence login is required for this step.
router.post('/getuser', fetchuser
    , async (req, res) => {
        try {
            let userID = req.user.id;
            const user = await Users.findById(userID).select('-password');
            res.send(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
)
module.exports = router;