import { useEffect, useState } from "react";
import Pagenation from "./components/Pagenation";
import Products from "./components/Products";
import ProductService from "./service/productService";
import Filter from "./components/Filter";
import Sort from "./components/Sort";

function App() {

  const [products, setProducts] = useState([]) //основной массив
  const [newProducts, setNewProducts] = useState([])// копия массива для удобной работы с фильтром и сортом
  const [loading, setLoading] = useState(false)// индикатор загрузки
  const [carrentPage, setCarrentPage] = useState(1) //текущая страница товаров
  const [amountProducts, setAmountProducts] = useState(4)//количество товаров на странице


  //выполняем запрос на сервер при загрузке приложения
  useEffect(()=>{
    const getProducts = async ()=> {
      setLoading(true)
      const res = await ProductService.getProducts()
      setProducts(res.data)
      setNewProducts(res.data)
      setLoading(false)
    }
    getProducts()
  },[])

  //определяем какие элементы массива показывать
  const counter = ()=>{
        const lastIndex = carrentPage * amountProducts//последний эл. на стр.
        const firstIndex = lastIndex - amountProducts//первый эл. на стр.
        const carrentProducts = newProducts.slice(firstIndex, lastIndex)
        return carrentProducts
  }

  //изменение текущей страницы
  const changePage = numPage => setCarrentPage(numPage)
  const nextPages = () => setCarrentPage(prev => prev + 1)
  const prevPages = () => setCarrentPage(prev => prev - 1)
  //получение отфильтрованого массива
  const filterProducts = newArr => setNewProducts(newArr)

  return (
    <div className="container">
        <div className="block">
          <div className="title">
            Фильтры
          </div>
          <Filter 
            products={products} 
            filterProducts={filterProducts} 
          />
          <div className="title">
            Сортировка
          </div>
          <Sort 
            products={products} 
            filterProducts={filterProducts} 
          />
        </div>
        <div className="show__change">
           <p>показывать по</p>
          <select  onChange={e=>setAmountProducts(e.target.value)}>
              <option >4</option>
              <option >7</option>
              <option >10</option>
          </select>
        </div>
        <div className="title">
            Продукты
          </div>
        <Products products={counter()} loading={loading}/>
        <Pagenation 
          amountProducts={amountProducts} 
          total={ newProducts.length}
          changePage={changePage}
        />
      <div className="btn">
         <button className="btn__prev" onClick={prevPages}>назад</button>
        <button className="btn__next" onClick={nextPages}>вперед</button>
      </div>
       
    </div>
  );
}

export default App;
