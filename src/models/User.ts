import { DataType, Model } from 'sequelize-typescript'

import sequelize from '../database.config'

class User extends Model {}

User.init({
    
    id:{type:DataType.INTEGER,autoIncrement:true,primaryKey:true},
    username:{type:DataType.STRING},
    email:{type:DataType.STRING,unique:true,allowNull:false},
    phone:{type:DataType.INTEGER},
    password:{type:DataType.STRING,allowNull:false},
    {
        sequelize, 
        modelName:'User'
    }
});

export default User;