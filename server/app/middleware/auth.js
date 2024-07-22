const jwt = require('jsonwebtoken');
const _const = require('../config/constants');

module.exports = {
    checkLogin: (req, res, next) => {
        const token = req.cookies.jwt_token;
        // const session = req.session.isAuth;
        if (token) {
            jwt.verify(token, _const.JWT_ACCESS_KEY, (err, decodedToken) => {
                if(err) {
                    console.error(err.message)
                }
                else {
                    console.log(decodedToken);
                    req.userId = decodedToken;
                    next();
                }
            })
        }
        else {
            res.json({message: 'access denied'});
        }
    },
}