import OutlineButton from '../components/OutlineButton'
import { BsFilter } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ProductOverview = () => {
  return (
    <div className='ProductOverview'>
       <h1>PRODUCT OVERVIEW</h1>
       <div className='ProductOverview_hadder'>
        <div className='ProductOverview_links'>
          <li>All Products</li>
          <li>Men</li>
          <li>Women</li>
          <li>Blog</li>
          <li>Shoes</li>
          <li>Watches</li>
        </div>
        <div className='ProductOverview_buttons'>
            <OutlineButton Icon={<BsFilter />} name="Filter" />
            <OutlineButton Icon={<AiOutlineSearch />} name="Search" />
        </div>
       </div>
    </div>
  )
}

export default ProductOverview
