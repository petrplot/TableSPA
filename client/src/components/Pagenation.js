import React from 'react'

const Pagenation = ({amountProducts, total, changePage}) => {

    const pages = []

    //получаем количество страниц 
    for (let i = 1; i <= Math.ceil(total/amountProducts); i++) {
        pages.push(i)    
    }

  return (
    <div>
        <ul className='pagenation'>
            {
                pages.map(num => {
                    return <li key={num} onClick={()=> changePage(num)}>                      
                        {num}                        
                    </li>
                })
            }
        </ul>  
    </div>
  )
}

export default Pagenation