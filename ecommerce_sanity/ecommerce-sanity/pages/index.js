import React from 'react'
import { Product, HeroBanner, FooterBanner } from './components'



const Home = () => {
  return (
    <>
      <HeroBanner/>

      <div className="products-heading">
        <h2>Mejores productos en venta</h2>
        <p>Variedad de consolas</p>
      </div>
      <div className="products-container">
        {['Producto 1', 'Producto 2'].map (
          (producto) => producto)
        }
      </div>

      <FooterBanner/>
    </>
  )
}

export default Home