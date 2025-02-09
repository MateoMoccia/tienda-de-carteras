import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <div>
      {productos.map (item => <item key={item.id} {...item}/>)}
    </div>


  )
}

export default ItemList
