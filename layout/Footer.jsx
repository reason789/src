import React from 'react'
import { Link } from 'react-router-dom'
import CurveButton from '../components/CurveButton'
import {BiLogoFacebook, BiLogoWhatsapp} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='Footer_bg'>
        <div className='Footer'>
            <div>
                <h3>CATEGORIES</h3>
                <Link to='/women'>Women</Link>
                <Link to='/men'>Men</Link>
                <Link to='/Shhoes'>Shoes</Link>
                <Link to='/watches'>Watches</Link>
            </div>
            <div>
                <h3>HELP</h3>
                <Link to='/track-order'>Track Order</Link>
                <Link to='/return'>Return</Link>
                <Link to='/shipping'>Shipping</Link>
                <Link to='/faqs'>FAQs</Link>
            </div>
            <div>
                <h3>GET IN TOUCH</h3>
                <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                <div className='Footer_icons'>
                    <Link to=''><BiLogoFacebook /></Link>
                    <Link to=''><BiLogoWhatsapp /></Link>
                    <Link to=''><AiOutlineInstagram /></Link>
                </div>
            </div>
            <div>
                <h3>NEWSLETTER</h3>
                <input className='Footer_input' placeholder='example@gmail.com' type="text" name="" id="" />
                <button className='Footer_button'>SUBSCRIBE</button>
            </div>
        </div>
        <h5>Copyright ©2023 All rights reserved | This template is made with  by ♡ COZA STORE</h5>
    </div>
  )
}

export default Footer