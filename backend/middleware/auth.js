const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
    const token = req.header('auth-token');
    // console.log(token);

if(!token){
    return res.status(401).json({msg: 'No token, authorization denied'});
}
try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET)
    req.body.userId = token_decode.id;
    next();
} catch (error) {
    console.log(error);
    res.status(401).json({msg: 'Token is not valid'});
    
}

}

module.exports = {authMiddleware};