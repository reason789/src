import React from 'react'

const OutlineButton = ({Icon,name }) => {
  return (
    <div className='OutlineButton'>
       <span>{Icon}</span>
       <p>{name}</p>
    </div>
  )
}

export default OutlineButton
