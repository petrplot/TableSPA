
import React, {useState} from 'react'

const Sort = ({products, filterProducts}) => {

  const [quantity, setQuantity] = useState('больше')
  const [distance, setDistance] = useState('ближе')
  const [state, setState] = useState(1)

  //сортируем по расстоянию
  const sortDistance = () => {

    //для правильной работы метода sort() копируем в новый массив
    if (distance === 'ближе') {
      const prod = [...products].sort( (a, b) => a.distance > b.distance )
      return prod
    }
    if(distance === 'дальше'){
      const prod = [...products].sort( (a, b) => a.distance < b.distance )
      return prod
    }
  }

  //сортируем по количеству 
  const sortQuantity = () => {
    if (quantity === 'больше') {
      const prod = [...products].sort( (a, b) => a.quantity < b.quantity )
      return prod
    }
    if(quantity === 'меньше'){
      const prod = [...products].sort( (a, b) => a.quantity > b.quantity )
      return prod
    }
  }

  //сортируем по названию, от начала или конца алфавита, используем состояние
  const sortName = () => {
    if(state){
      const prod = [...products].sort( (a, b) => a.name < b.name)
      setState(0)
      return prod
    }else{
      const prod = [...products].sort( (a, b) => a.name > b.name)
       setState(1)
      return prod
    }  
  }

  return (
    <div className='block__sort'>
      <div className='block__name'>
          <p>сортировать по имени</p>
          <button 
            onClick={()=>{
              filterProducts(sortName())
            }}
          >
            получить
          </button>
      </div>
      <div className='block__distance'>
          <p>сортировать по расстоянию</p>
          <select  onChange={e=>setDistance(e.target.value)}>
              <option >ближе</option>
              <option >дальше</option>
          </select>
          <button 
            onClick={()=>{  
              
                filterProducts(sortDistance())
                      
            }}
          >
            получить
          </button>
      </div>
      <div className='block__quantity'>
          <p>сортировать по количеству</p>
          <select  onChange={e=>setQuantity(e.target.value)}>
              <option >больше</option>
              <option >меньше</option>
          </select>
          <button 
            onClick={()=>{
              filterProducts(sortQuantity())
            }}
          >
            получить
          </button>
      </div>
    </div>
  )
}

export default Sort



