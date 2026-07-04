import React from 'react';
import Product from './product';

export default function ProductList(props) {
  return (
    props.productList.length > 0 ?      //conditional Rendering
    props.productList.map((product, i)=>{
        return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem} />
    })
    :<h1>No Products Exists In The Cart.</h1>
  )
}
