import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"

const registerUser = asyncHandler( async(req, res) => {
    // res.status(200).json({
    //     message: "OK"
    // })
    //pehlai username,email, passowrd etc lunga
    const {fullName, email, username, password} = req.body;
    console.log(email);
    if([fullName, email, username, password].some((field) => field?.trim() === "")){
        throw new ApiError(400, "All fields are required")
    }

    //sab possible validation krou, email shi h? koi field empty tou nhi h?
    //check krunga user pehlai sai tou nhi hai
    //check avatar hai ya nhi
    //upload them to cloudinary, avatar
    //phr encryption krkai
    //user create krkai, db mai save krunga
    // remove password and refreshToken from response
    //check for user creation
    //return response
});

export {registerUser}