import ErrorResponse from "../utilities/error";
import jwt from "jsonwebtoken";
import { getUserById } from "../services/user";

// protect routes
exports.protect = async (req: any, res: any, next: any) => {
  const key: string = process.env.JWT_SECRET as string;
  const token =
    req.headers.authorization && req.headers.authorization.startsWith("Bearer")
      ? req.headers.authorization.split(" ")[1]
      : req.cookies.token;

  // make sure token exists
  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    // verify json web token
    const decoded: any = jwt.verify(token, key);
    req.user = await getUserById(decoded.id);
    req.client = req.user.clientConfig;
    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
};

// grant access by role
exports.authorize = (...roles: string[]) => {
  return (req: any, res: any, next: any) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is not authorized to access this route`,
          403
        )
      );
    }
    next();
  };
};
