import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../Components/Breadcrumb/Breadcrumb';
import { ShopContext } from '../Context/ShopContext'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';

export const Product = () => {
  const{all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
    </div>
  )
}