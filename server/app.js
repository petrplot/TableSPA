const express = require('express')
const cors = require('cors')
const router = require('./routes')
const app = express()
const connection = require('./db')

//используем json
app.use(express.json())
//настраиваем cors
app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    })
  );
// подключаем роутер
app.use('/api', router)

//запускаем сервер и открываем соединение с базой
const serverStart = async() => {
    try {
        await connection.connect()
        app.listen(3001,()=>{
            console.log('Сервер запущен на порту:' );
        })     
    } catch (e) {
        console.log(e);
    }
}

serverStart()