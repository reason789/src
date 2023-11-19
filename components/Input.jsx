import React from 'react'

const Input = ({type, placeholder}) => {
  return (
    <div className='Input'>
      <input type={type} name="" id="" placeholder={placeholder} />
      <div class="Input_animated_border"></div>
    </div>
  )
}

export default Input
