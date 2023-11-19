import React, { useState } from 'react'
import SidebarCartItem from './SidebarCartItem'
import { RxCross1 } from 'react-icons/rx'
import ValuedIcon from '../components/ValuedIcon'
import CurveButton from '../components/CurveButton'
import BlackButton from './BlackButton'

const Sidebar = () => {
    const [Sidebar, setSidebar] = useState(false)
  return (
    <div className='Sidebar_wrapper'>
        <div onClick={()=>setSidebar(!Sidebar)} className={` ${Sidebar ? 'Sidebar_opacity' : ''}`}></div>
        <div className={`Sidebar ${Sidebar ? 'Sidebar_active' : ''}`}>

            <div className='Sidebar_top'>
                <div className='Sidebar_top_cart'>
                    <h3>Your Cart</h3>
                    <div onClick={()=>setSidebar(!Sidebar)}>
                        <ValuedIcon Icon={<RxCross1 />} />
                    </div>
                </div>
                <SidebarCartItem />
                <SidebarCartItem />
                <SidebarCartItem />
            </div>
            <div className='Sidebar_bottom'>
                <h2>Total: $75.00</h2>
                <div className='Sidebar_bottom_flex'>
                    <BlackButton name="VIEW CART" />
                    <BlackButton name="CHECKOUT" />
                </div>
            </div>
        
        </div>
        <button onClick={()=>setSidebar(!Sidebar)}>sidebars</button>

    </div>
  )
}

export default Sidebar