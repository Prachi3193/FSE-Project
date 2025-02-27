// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');

// dotenv.config(); // Load environment variables

// const authenticate = (req, res, next) => {
//     const token = req.header('Authorization');

//     if (!token) {
//         return res.status(401).json({ message: 'Access denied. No token provided.' });
//     }

//     try {
//         const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
//         req.user = decoded; // Attach user payload to request object
//         next();
//     } catch (error) {
//         res.status(400).json({ message: 'Invalid token.' });
//     }
// };

// module.exports = authenticate;
  //ye krna haui
  