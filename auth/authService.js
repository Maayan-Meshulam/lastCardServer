const { createError, handleError } = require("../utils/handleErrors");
const { verifyToken } = require("./providers/jwt");

const TOKEN_GENERATOR = "jwt";

const auth = (req, res, next) => {
  console.log(1111);
  
  if (TOKEN_GENERATOR === "jwt") {
    try {
      const tokenFromClient = req.header("x-auth-token");
      if (!tokenFromClient) {
        return createError("Authentication", "Please login", 401);
      }

      const userInfo = verifyToken(tokenFromClient);
      console.log(userInfo);
      
      if (!userInfo) {
        return createError("Authentication", "Unauthorize user", 403);
      }

      req.user = userInfo;
      return next();
    } catch (error) {
      return handleError(res, error.status, error.message);
    }
  }

  return handleError(res, 500, "Server auth method not found");
};

module.exports = auth;
