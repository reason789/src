import React from 'react'
import image from "../images/s6.jpg"

const SidebarCartItem = () => {
  return (
    <div className='SidebarCartItem'>
        <div className='SidebarCartItem__image'>
          <img src={image} />
        </div>
        <div className='SidebarCartItem__content'>
          <h4>White Shirt Pealt</h4>
          <p>1 X $1.90</p>
        </div>
    </div>
  )
}

export default SidebarCartItem