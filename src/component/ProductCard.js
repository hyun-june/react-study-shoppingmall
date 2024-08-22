import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const limitation = true;
  const soldoutColor = item?.soldout === true ? 'soldout' : ""
  const navigate = useNavigate();
  const showDetail = () =>{
    navigate(`/products/${item.id}`)
  }
  return (
    <div className='inner-card' onClick={showDetail}>
        <img width={250} src={item?.i} alt="" />
        <div className={`item-limitation ${soldoutColor}`}>{item?.soldout == true? "품절" : limitation == true? "한정" : ""}</div>
        <div>{item?.t}</div>
        <div>₩{item?.p}</div>
    </div>
  )
}

export default ProductCard