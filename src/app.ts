import 'reflect-metadata';
import express from 'express';
import router from './routes/Router';
import sequelize from './config/db';


const app = express()

app.use(express.json());
app.use('/api', router)

const runServer = async () => {
    try {
      sequelize.authenticate();
      console.log('database connected');
      sequelize.sync()  
      app.listen(3000, () => {
        console.log('listening on port http://localhost:3000')
      })
    } catch (error:any) {
        throw new Error(error)
    }
}

runServer()