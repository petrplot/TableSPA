const connection = require('../db')

class ProductsController{

  //обработка api запроса
   async getAll(req, res){
        try {
            //получаем из базы
            const products = await connection.query("SELECT * FROM products")
            .then(([rows, filds]) =>{
                return rows
              })
              .catch(err =>{
                console.log(err);
              });
            //отправляем ответ на клиент
            res.json(products)
            
        } catch (e) {
            console.log(e);
        }
    }

}

module.exports = new ProductsController()

