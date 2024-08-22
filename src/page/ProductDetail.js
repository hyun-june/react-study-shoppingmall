import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let{id} = useParams()
  const[product,setProduct] = useState(null)
  const getProductDetail = async() =>{
    // let url = `http://localhost:5000/products/${id}`
    let url = `https://my-json-server.typicode.com/hyun-june/react-study-shoppingmall/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail();
  },[])
  return (
      <Container>
        <Row className='detail-section'>
          <Col lg={7} md={6} className='detail-img'>
              <img src={product?.img} alt="" />
          </Col>
          <Col lg={4} md={6} className='detail-info'>
            <div>
              <h1>{product?.title}</h1>
                <div className='price-info'>
                  <h5>₩{product?.price}</h5>
                  <span className='shipping-style'>무료 배송</span>
                </div>
                <div className='detail-message'>
                  프로모션 및 할인 코드 적용이 불가한 상품입니다.
                </div>
              <div>
                <button className='cart-button'>카트에 담기</button>
              </div>
            </div>
            <div className='shipping-detail'>
              전 세계 무료 배송
            </div>
            <div className='pay-section'>
              <span className='detail-pay'>사용 가능한 결제 방법</span>
            </div>
            <div className='pay-img'>
              <img src="https://cdn-stamplib.casetify.com/cms/image/1f5b660ecb6d0e53919809f6df67c8e8.svg" alt="" />
              <img src="https://cdn-stamplib.casetify.com/cms/image/47e8945cc56c62551afc38388a3eb372.svg" alt="" />
              <img src="https://cdn-stamplib.casetify.com/cms/image/b51baf6cb955ed8cffdfb34fd2c37afe.svg" alt="" />
              <img src="https://cdn-stamplib.casetify.com/cms/image/45e398af85526b72f8ab70e323706650.svg" alt="" />
              <img src="https://cdn-stamplib.casetify.com/cms/image/784a444c11b36187118025083d1781fb.svg" alt="" />
            </div>
          </Col>

          <div className='video-section'>
            <video src="https://cdn-stamplib.casetify.com/cms/video/b2bb8fc14e81aea76ef922acab9eeeb7.mp4" loop muted autoPlay playsInline></video>
          </div>
        </Row>
    </Container>
  )
}

export default ProductDetail