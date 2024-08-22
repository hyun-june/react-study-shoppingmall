import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query,setQuery] = useSearchParams();
    const getProducts = async() =>{
        let searchQuery = query.get("q") || "";
        console.log("쿼리 값은?",searchQuery);
        // let url = `http://localhost:5000/products?q=${searchQuery}`;
        let url = `https://my-json-server.typicode.com/hyun-june/react-study-shoppingmall/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        const lowerFilter = searchQuery.toLowerCase();
        const filterData = searchQuery? data.filter((item)=> item.title.toLowerCase().includes(lowerFilter)) : data;
        console.log("filterData",filterData)
        if(filterData.length === 0){
          alert("검색 결과가 없습니다.")
          return
        }
        setProductList(filterData);
        console.log(data)
    }

    useEffect(()=>{
        getProducts();
    },[query]);

  return (
    <div>
      <Container>
        <Row>
          {productList?.map((item)=>
            <Col key={item.id} lg={3} xs={12} md={6} xl={3}><ProductCard item={item} /></Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll;