
const userSchema = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Register = async (req,res)=>{
    const {email,password} = req.body
    try {
        const userExists = await userSchema.findOne({email:email});
        if(userExists) {
            return res.status(400).send({msg: 'User already exists'});
        }
        const newUser = new userSchema(req.body)
        const salt = 10;
        const passwordHashed = bcrypt.hashSync(password,salt);
        newUser.password = passwordHashed;
        const userId = {id:newUser._id};
        const token = jwt.sign(userId,process.env.passwordToken);
        await newUser.save();
        return res.status(200).send({msg: 'User added successfully',token});
    } catch (error) {
        return res.status(500).send({msg: error.message});
    }
}