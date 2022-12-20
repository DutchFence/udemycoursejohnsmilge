
import User from '../models/User.js';

const register = async (req,res) => {

   
    try {
        const user = await User.create(req.body);
        res.status(201).json({user});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"There was an error:  ", error});
    }
    

};

const login = (req,res) => {
    res.send('Login User')
    };

const updateUser = (req,res) => {
    res.send('Update User')
     };

     export { register, login, updateUser};