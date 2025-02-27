// controllers/userController.js
exports.registerUser = async (req, res) => {
    // Add your registration logic here
    res.status(201).json({ message: "User registered successfully" });
};

exports.loginUser = async (req, res) => {
    // Add your login logic here
    res.status(200).json({ message: "User logged in successfully" });
};
