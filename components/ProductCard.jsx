import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';


const ProductCard = ({img}) => {
  return (
    <div className='ProductCard'>
        <div className='ProductCard_img'>
            <img src={img} />
            <button className='ProductCard_button'>Add to Cart</button>
        </div>
        <div className='ProductCard_content'>
            <div>
                <p>Classic Tranch Coat</p>
                <span>$16.64</span>
            </div>
            <span className='ProductCard_content_icon'><AiOutlineHeart/></span>
        </div>
    </div>
  )
}

export default ProductCard