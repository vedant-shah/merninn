const jwt = require('jsonwebtoken');
const jwtSecret = 'welcometomerninn'

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Access Denied" })
    }
    try {
        data = jwt.verify(token, jwtSecret);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Access Denied" })
    }
}
module.exports = fetchuser
