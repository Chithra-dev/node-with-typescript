import * as mysql from 'mysql2'
import { Request,Response } from 'express'
import  Jwt  from 'jsonwebtoken'
import User from '../models/User'
import bcrypt from 'bcrypt'
import { isJWT } from 'validator'

/* interface User{
    name : string,
    email : Text,
    password : Text,
    phone : number
}

const newUser = (name:string, email : Text, password : Text, phone : number) : any => {
     let userdetails = newUser
} */

const userRegister = async(req: Request,res : Response)=>{
    
    let {username, password, email, phone} = req.body;

    let pass =await bcrypt.hash(password,10);
    const newUser = User.create({username, pass, email, phone});

    res.status(200).json({message : 'registered successfully'});
};

const userLogin = async(req: Request,res : Response): Promise<void>=>{

    let {password, email} = req.body;

    let userCheck = User.findOne({where : {email}});
    if(!userCheck) res.send("invalid email") ;

    let passcheck = await bcrypt.compare(password,userCheck.password);
    if(!passcheck) res.send("wrong password");

    let token = jwt.sign({id:userCheck.id},'secret_key',{expiresIn: '1h'});

    res.json({token});

};

export { userLogin,userRegister}
