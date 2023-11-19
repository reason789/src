import React from 'react'
import  ButtonGroup  from '../components/ButtonGroup'
import image from "../images/s3.jpg"
import { RxCross1 } from 'react-icons/rx'

const CartItem = () => {
  return (
    <div className='CartItem'>
        <div className='CartItem_product'>
            <div className='CartItem_product_img'>
                <img src={image}  />
            </div>
            <div className='CartItem_product_content'>
                <h4>Men Jacket</h4>
                <p>Size: <span>XL</span></p>
                <p>Color: <span>Red</span></p>
            </div>
        </div>
        <span>$36.00</span>
        <div className='CartItem_crossqty'>
            <ButtonGroup />
            <div className='CartItem_delete'>
            <RxCross1 />
        </div>
        </div>
        
        <span>$36.00</span>
       
    </div>
  )
}

export default CartItem