import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        msg: "No token provided"
      });
    }

    // Format → Bearer TOKEN
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        msg: "Token missing"
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {
    console.log("JWT Error:", error.message);

    return res.status(401).json({
      msg: "Invalid token"
    });
  }
};

export default authMiddleware;
