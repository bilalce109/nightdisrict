import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import helper from '../utils/helpers.js'; 
import User from '../models/users.js'; 

const home = (req, res) => {
    res.send('Hello From Home');
}


export default{
    home
};