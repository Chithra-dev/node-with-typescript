import * as express from 'express'
import { userLogin, userRegister } from '../controllers/user'

let route = express.Router();
route.post('/register',userRegister);
route.post('/login',userLogin);

export default route;
