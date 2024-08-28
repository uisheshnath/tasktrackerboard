const jwt = require("jsonwebtoken");

const userVerify = (req, res, next) => {
    const token = req.cookies.token;
    //  console.log("shesh",token)
    // Check if the token is missing
    if (!token) {
        return res.status(401).json({ Error: `You are not authorized. Token is missing.${token}` });
    }
    else {
        // Verify the token
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                // Send an unauthorized error response if the token is invalid
                return res.status(401).json({ Error: "Token is not valid." });
            }

            // Optionally, attach user information to the request object
            req.name = decoded.name;

            // Call the next middleware or route handler
            next();
        });
    }
};

module.exports = userVerify;
