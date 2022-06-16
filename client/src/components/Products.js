import React from 'react'

const Products = ({products, loading}) => {

   
    if(loading){
        return <div>загрузка...</div> 
    }
    

    return (
        <table className='table'>
            <thead>
                <tr>               
                    <th>Дата</th>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>Расстояние</th>
                </tr> 
            </thead>
            <tbody>
                {
                    products.map(i => {
                        return (<tr key={i.id}>
                                    <td>{i.date.slice(0,10)}</td>
                                    <td>{i.name}</td>
                                    <td>{i.quantity} шт.</td>
                                    <td>{i.distance} км.</td>
                                </tr>)
                    })    
                }
            </tbody>
        </table>        
    )  
}

export default Products

