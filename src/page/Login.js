import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import SnsButton from '../component/SnsButton'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authenciateAction } from '../redux/actions/authenciateAction'

const Login = ({setSign}) => {
  const [id,setId] = useState('');
  const navigate = useNavigate();
  let dispatch = useDispatch();
  
  const getId = (event)=>{
    setId(event.target.value)
  }

  const loginUser = (event) =>{
    event.preventDefault();
    console.log("login user")
    dispatch(authenciateAction.login(id))
    navigate("/")
  }
  return (
    <Form onSubmit={(event)=>loginUser(event)} className='login-section'>
        <img className='banner-img' src="https://www.casetify.com/img/ui/login-banner.jpg" alt="" />
        <div className='login-title'>케이스티파이 클럽 가입하기</div>
        <div className='id-section'>
          <input type="text" id='login-id' className='login-id'onChange={getId}/>
          <label for="login-id" className='login-placeholder'>Email</label>
        </div>
        <div>
          <button className='login-button' type="submit">계속하기</button>
        </div>
        <div className='login-sub'><a href="">이미 회원이신가요?</a></div>
        <div className='sns-section'>
          <span className='login-sns'>또는 SNS로 가입하기</span>
        </div>
        <div>
          <SnsButton />
        </div>
    </Form>
  )
}

export default Login