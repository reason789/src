import React from 'react'
import CurveButton from '../components/CurveButton'
import ActionButton from '../components/ActionButton'
import BlackButton from '../components/BlackButton'
import CartItem from '../components/CartItem'

const Cart = () => {
  return (
    <div className='cart_wrapper'>
        <div className='cart'>
            <div className='cart_header'>
                <h3>PRODUCT</h3>
                <h3>PRICE</h3>
                <h3>QUNATITY</h3>
                <h3>TOTAL</h3>
                {/* <p style={{visibility:'hidden'}}>s</p> */}
            </div>
            <br />
            <CartItem />
            <CartItem />
            <CartItem />
            <div className='cart_footer'>
                <ActionButton name="CONTINUE SHOPPING" />
            </div>
        </div>
        <div className='cart_price'>
            <h2>Discount Code</h2>
            <div className='cart_footer_left'>
                <input type="text" name="" id="" placeholder='Coupon code' />
                <CurveButton name="APPLY COUPON" />
            </div>
            <div className="cart_price_wrapper">
                <h3>CART TOTAL</h3>
                <div className="cart_price_flex">
                    <p>Subtotal</p>
                    <span><b>$ 169.00</b></span>
                </div>
                <div className="cart_price_flex">
                    <p>Total</p>
                    <span><b>$ 454.97</b></span>
                </div>
                <div className='cart_price_button'>
                    <BlackButton name="PROCEED TO CONTINUE" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart