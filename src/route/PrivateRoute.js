import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
  const authenciate = useSelector(state=>state.auth.authenciate) // true면 로그인 상태, false면 비로그인 상태
  return authenciate == true?<ProductDetail/> : <Navigate to="/login"/>;
}

export default PrivateRoute