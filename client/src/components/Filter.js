import React, {useState} from 'react';

const Filter = ({products, filterProducts}) => {

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [distance, setDistance] = useState('')

  //фильтруем по имени, показываем все совпадения
  const filterName = () => {
      let prod = products.filter(i => i.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
      setName('')
      return prod
  }

  //фильтруем по количеству получаем все до полученного значения
  const filterQuantity = () => {
      let prod = products.filter(i => i.quantity <= quantity)
      setQuantity('')
      return prod
  }

  //фильтруем по расстоянию получаем все до полученного значения
  const filterDistance = () => {
      let prod = products.filter(i => i.distance <= distance)
      setDistance('')
      return prod 
  }

  //обновляем массив
  const getAll = () =>{
    let prod = products
    return prod 
  }

 

  return (
  <div className='block__filter'>
    <div className='block__name'>
      <p>по названию</p>
      <input
          placeholder='введите название'
          onChange={e=>setName(e.target.value)} 
          value={name}
      />
      <button 
        onClick={()=>{
          filterProducts(filterName())
        }}
      >
        получить
      </button>
    </div>
    <div className='block__quantity'>
      <p> по количеству (все до:)</p>
      <input
          placeholder='введите количество'
          onChange={e=>setQuantity(e.target.value)} 
          value={quantity}
      />
      <button 
        onClick={()=>{
          filterProducts(filterQuantity())
        }}
      >
        получить
      </button>
    </div>

    <div className='block__distance'>
      <p> по расстоянию (все до:)</p>
      <input
          placeholder='введите расстояние'
          onChange={e=>setDistance(e.target.value)} 
          value={distance}
      />
      <button 
        onClick={()=>{
          filterProducts(filterDistance())
        }}
      >
        получить
      </button>
    </div>
    <div className='block__getAllBtn'>
      <button 
        onClick={()=>{
          filterProducts(getAll())
        }}
      >
        получить все
      </button> 
    </div>
    
  </div>
  );
};

export default Filter;
