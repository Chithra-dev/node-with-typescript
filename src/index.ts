import route from "./routes/routes";
import sequelize from "./database.config";
import  express from 'express'

let app = express();
app.use(express.json());

app.use('/chat',route);

sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log('server is running')
    })
});

