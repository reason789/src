import React from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const img =[
    'https://preview.colorlib.com/theme/cozastore/images/product-03.jpg.webp',
    'https://preview.colorlib.com/theme/cozastore/images/product-14.jpg.webp',
    'https://preview.colorlib.com/theme/cozastore/images/product-11.jpg.webp',
    'https://preview.colorlib.com/theme/cozastore/images/product-06.jpg.webp',
    'https://preview.colorlib.com/theme/cozastore/images/product-04.jpg.webp',
    'https://preview.colorlib.com/theme/cozastore/images/product-09.jpg.webp',
    'https://preview.colorlib.com/theme/cozastore/images/product-detail-02.jpg.webp'
  ]
  return (
    <div className='Products'>
        <ProductCard img={img[0]}/>
        <ProductCard img={img[4]}/>
        <ProductCard img={img[2]}/>
        <ProductCard img={img[6]}/>

        <ProductCard img={img[4]}/>
        <ProductCard img={img[0]}/>
        <ProductCard img={img[6]}/>
        <ProductCard img={img[2]}/>

        <ProductCard img={img[6]}/>
        <ProductCard img={img[4]}/>
        <ProductCard img={img[2]}/>
        <ProductCard img={img[0]}/>

        <ProductCard img={img[0]}/>
        <ProductCard img={img[6]}/>
        <ProductCard img={img[2]}/>
        <ProductCard img={img[4]}/>
        
    </div>
  )
}

export default Products