import React from 'react'

const ValuedIcon = ({Icon, value}) => {
  return (
    <div className='ValuedIcon'>
        <span>{Icon}</span>
        {value >= 0 && <p>{value}</p>}
    </div>
  )
}

export default ValuedIcon