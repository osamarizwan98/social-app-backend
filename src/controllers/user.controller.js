import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'


const registerUser = asyncHandler( async (req, res) => {
    // get user detail from frontend
    const { fullName, email, username, password } = req.body
    console.log('email', email);

    // Validate user fields
    if ([fullName, email, username, password].some()) {
        
    }

    res.status(500).json({
        message: "chai aur code"
    })
} )


export {
    registerUser,
}