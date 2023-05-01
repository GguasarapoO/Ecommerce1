import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast'

import { useStateContext } from '@/context/StateContext'
import { urlFor } from '@/lib/client'
const Cart = () => {
  const cartRef = useRef()
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()

    return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Tus productos</span>
          <span className="cart-num-items">{totalQuantities} productos</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Tu carrito esta vacio</h3>
            <Link href="/">
              <button type="button" onClick={() => setShowCart(false)} className="btn">
                Volver a la tienda
              </button>
            </Link>
          </div>
        )}

          <div className="product-container">
            {cartItems.length >= 1 && cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img src={urlFor(item?.image[0])} className="cart-product-image" />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>{item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className="minus" onClick=""><AiOutlineMinus /></span>
                        <span className="num">0</span>
                        <span className="plus" onClick=""><AiOutlinePlus /></span>
                    </p>
                    </div>
                    <button type="button" className="remove-item" onClick="">
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal:</h3>
                <h3>{totalPrice}</h3>
              </div>
              <div className="btn-container">
                <button type="button" className="btn" onClick="">
                  Completar la compra
                </button>
              </div>
            </div>
            )}
      </div>
    </div>
  )
}

export default Cart