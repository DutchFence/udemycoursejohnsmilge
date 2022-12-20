import mongoose from 'mongoose';
import validator from 'validator';
const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        required:[true,"Name is required"],
        unique: false,
        minlength: 2,
        maxlength: 20,
        trim: true
        },
    email: {
        type: String,
        required:false,
        validate:{
            validator: validator.isEmail,
            message: "Please provide a valid email",
        },
        unique: [true, "There already is a user with this email"]
        },
    password: {
            type: String,
                required: [true, "A password is required"],
                unique: false,
                minlength: 6,
            },
    lastName: {
            type: String,
               required: [true, "A last name is required"],
               unique: false,
               minlength: 2,
               maxlength: 20,
               trim: true
            },
    location: {
            type: String,
            unique: false,
            default: "Not provided"
             
    }
})
export default mongoose.model('User',UserSchema);