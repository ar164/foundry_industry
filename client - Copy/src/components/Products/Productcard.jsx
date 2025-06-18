import React from 'react'
import './ProductCard.css'

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.title} className='product-image' />
      <div className='product-content'>
       <h3 className='product-title'>{product.title}</h3>
       <p className='product-description'>{product.description}</p>
       <div className='product-footer'>
         <p className='product-price'>{product.price}</p>
         <button className='buy-button'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard


