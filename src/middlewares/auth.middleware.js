import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = User.findById(decodeToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      // Discuss about frontend
      throw new ApiError(401, "Invalid Access token");
    }

    req.user = user;
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Access token");
  }
});
