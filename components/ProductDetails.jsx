import React, { useState } from 'react'
import Modal from './Modal'
import OutlineButton from "../components/OutlineButton"
import ActionButton from './ActionButton';
import ColorCircle from './ColorCircle';
import ButtonGroup from './ButtonGroup';
import image from '../images/s8.jpg'
import image1 from '../images/s7.jpg'
import image2 from '../images/s6.jpg'

const ProductDetails = () => {
  const colors = ["#ff5733", "#3373ff", "#33ff57", "#ff33b4"];
  const [tempImage, setTempImage] =useState(image)

  const getImage = (image) =>{
    setTempImage(image)
  }

    const va = <div className='ProductDetails'>
    <div className='ProductDetails_img'>
      <div className='ProductDetails_imgList'>
        <img onClick={()=>getImage(image)} src={image} />
        <img onClick={()=>getImage(image1)} src={image1} />
        <img onClick={()=>getImage(image2)} src={image2} />
      </div>
      <div className='ProductDetails_carousel'>
        <img src={tempImage} />
      </div>
    </div>
    <div className='ProductDetails_content'>
      <h3>Lightweight Jacket</h3>
      <h4>$58.79</h4>
      <div className='ProductDetails_star'>
        <h5>★</h5>
        <h5>★</h5>
        <h5>★</h5>
        <h5>★</h5>
        <h5>☆</h5>
      </div>
      <p>Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
      <div className='ProductDetails_size'>
        <span>Size : </span>
        <OutlineButton name="S" />
        <OutlineButton name="M" />
        <OutlineButton name="L" />
        <OutlineButton name="XL" />
        <OutlineButton name="XXL" />
      </div>
      <div className='ProductDetails_color'>
          <span>Color : </span>
          {colors.map((color, index) => (
            <ColorCircle key={index} color={color} />
          ))}
      </div>

      <div className='ProductDetails_qty'>
        <h2>Quantity : </h2>
        <ButtonGroup />
      </div>
      <br />
      <br />
      <ActionButton name="ADD TO CART" />
    </div>
  </div>
  return (
    <div>
        <Modal va={va}/>
    </div>
  )
}

export default ProductDetails