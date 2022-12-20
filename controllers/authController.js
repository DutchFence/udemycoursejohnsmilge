
import User from '../models/User.js';

const register = async (req,res) => {

    const user = await User.create(req.body);
    res.status(201).json({user});

};

const login = (req,res) => {
    res.send('Login User')
    };

const updateUser = (req,res) => {
    res.send('Update User')
     };

     export { register, login, updateUser};