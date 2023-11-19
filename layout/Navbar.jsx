import React, { useState, useEffect } from 'react';
import ValuedIcon from '../components/ValuedIcon';
import { CgMenuRightAlt } from 'react-icons/cg';
import { MdShoppingCart } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 645) {
        setMobile(false);
      } 
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <nav className='Navbar' style={{ 
      backdropFilter: scrolling ? 'blur(20px)' : '',
      backgroundColor: scrolling ? 'rgba(255, 255, 255, 0.8)' : 'transparent', 
      boxShadow: scrolling ? '0px 5px 25px rgba(83, 116, 131, 0.16)' : '', 
      }}>
      <div className='Navbar_left'>
        <div className='Navbar_logo'>
            <p>COZA <span>STORE</span></p>
        </div>
        <div className='Navbar_link'>
            <Link className='Navbar_link_active' to="/">Home</Link>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kid">Kid</Link>
        </div>
      </div>
      <div className='Navbar_right'>
            <ValuedIcon Icon={<IoIosSearch/>}   />
            <ValuedIcon Icon={<MdShoppingCart/>} value={5}  />
            <ValuedIcon Icon={<AiOutlineHeart/>} value={0}  />
            <div className='Navbar_mobile'
                 onClick={()=>setMobile(!mobile)}
            >
                {!mobile ? <ValuedIcon Icon={<CgMenuRightAlt/>}  />
                : <ValuedIcon Icon={<RxCross2/>}  />}
            </div>
      </div>
      {
            <div className={mobile ? 'Navbar_mobile_menu Navbar_mobile_menu_active':'Navbar_mobile_menu '}> 
            <div className='Navbar_menu'>
                <Link className='active' to="/">Home</Link>
                <Link to="/men">Men</Link>
                <Link to="/women">Women</Link>
                <Link to="/kid">Kid</Link>
            </div>
      </div>
      }
            
    </nav>
  );
};

export default Navbar;
