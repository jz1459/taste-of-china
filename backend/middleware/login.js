const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).send('Unauthorized User (Not logged in)');
    } else {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) {
                res.status(403).send('Unauthorized User (invalid JWT)');
            } else {
                req.user = user;
                next();
            }
        });
    }
};