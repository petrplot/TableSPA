import _api from "../http";


export default class ProductService{

    //метод запроса на сервер
    static async getProducts(){
        return _api.get('/products')
    }

}