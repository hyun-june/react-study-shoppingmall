import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import {productAction} from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/reducers/productSlice';

const ProductAll = () => {
    const productList = useSelector(state=>state.product.productList)
    const [query,setQuery] = useSearchParams();
    const dispatch = useDispatch();
    const getProducts = () =>{
        let searchQuery = query.get("q") || "";
        dispatch(fetchProducts(searchQuery))
        // console.log("쿼리 값은?",searchQuery);
        // try {
        //   // let url = `http://localhost:5000/products?q=${searchQuery}`;
        //   let url = `https://my-json-server.typicode.com/hyun-june/react-study-shoppingmall/products?q=${searchQuery}`
        //   let response = await fetch(url);
        //   let data = await response.json();
        //   // const lowerFilter = searchQuery.toLowerCase();
        //   // const filterData = searchQuery? data.filter((item)=> item.t.toLowerCase().includes(lowerFilter)) : data;
        //   // console.log("filterData",filterData)
        //   if(data.length === 0){
        //     alert("검색 결과가 없습니다.")
        //     return
        //   }
        // setProductList(data);
        // console.log(data)
        // } catch (error) {
        //   console.log("Error:",error.message)
        // }

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