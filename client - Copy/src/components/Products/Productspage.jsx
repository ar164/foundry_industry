import React from 'react'
import './Productspage.css'
import ProductCard from  './Productcard'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import product5 from '../../assets/product5.jpg'
import product6 from '../../assets/product6.jpg'
import product7 from '../../assets/product7.jpg'
import product8 from '../../assets/product8.jpg'





const product = [
  {

    id:1,
    image:product1,
    
  },
  {
    id:2,
    image:product2,
    
  },
  {
    id:3,
    image:product3,
    
  },
  {
    id:4,
    image:product4,
    
  },
  {
    id:5,
    image:product5,
    
  },
  {
    id:6,
    image:product6,
    
  },
  {
    id:7,
    image:product7,
    
  },
  {
    id:8,
    image:product8,
    
  },
  
]

const Productspage = () => {
  return (
    <div id='products' className='product-page'>
      <h1 className='product-heading'>Products</h1>
      <div className='product-grid'>
        {product.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Productspage



