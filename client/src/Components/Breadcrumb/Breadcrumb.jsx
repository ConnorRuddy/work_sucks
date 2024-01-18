import React from 'react'
import './Breadcrumb.css'
import arrow_icon from'../Assets/Photos/breadcrum_arrow.png'

export const Breadcrumb = (props) => {
  const {product} = props;
  return (
    <div className='breadcrumb'>
      Home <img src={arrow_icon} alt='' /> Shop <img src={arrow_icon} alt='' /> {product.category} <img src={arrow_icon} alt='' /> {product.name}
    </div>
  )
}