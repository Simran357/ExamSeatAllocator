import React, { useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';
import axiosInstance from './Utils/axiosInstance';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { GlobalState } from '../Context/StateManagement';
import { useGoogleLogin } from '@react-oauth/google';
const Login = () => {
  const navigate = useNavigate()
  const { setAuth } = useContext(GlobalState)
  const [state, setState] = useState()


  const onFinish = async (values) => {
    try {
      const res = await axiosInstance.post("/register/LoginControl", values)
     

        sessionStorage.setItem("jwtToken", res?.data?.jwtToken)
        console.log("login jwt token geneerated", res?.data?.jwtToken)
        setState(res?.data?.message)
setAuth(true)       
 console.log("successfull login ", res?.data?.message)
        setTimeout(()=>{
  navigate("/dashboard")
},2000)
      } catch(err){
          console.log("error of the res login ",err?.response?.data?.message)
        
      }
    
  }

  const googleLogin = useGoogleLogin({
 
    onSuccess: async (tokenResponse)=>{
      console.log("token response on button click",tokenResponse.access_token)
      try{
      const res = await axiosInstance.post("/register/auth/googleLogin",{
       accessToken: tokenResponse.access_token
      })
    
      sessionStorage.setItem("jwtToken", res?.data?.jwtToken)
      console.log("res data ",res?.data)
        console.log("login jwt token geneerated", res?.data?.jwtToken)
        setState(res?.data?.message)
        setAuth(res?.data?.jwtToken)
        alert(res?.data?.message)
        setTimeout(()=>{
  navigate("/dashboard")
},2000)
    
    }catch(error){
        console.log("google login main error hai", error)
      }
    },
    onError:(error)=>{
      console.log("error",error)
      setState(error)
    }
})
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }
  return (
    <>
    <div className='m-20 p-6   flex flex-col  items-center'>
        <section className="p-20   rounded-xl border border-slate-100 bg-white shadow ">

          <Form
            name="wrap"
            labelCol={{ flex: '110px' }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ maxWidth: 600 }}
          >
            <Form.Item label="Email" name="email" >
              <Input />
            </Form.Item>

            <Form.Item label="password" name="password" >
              <Input />
            </Form.Item>

            <Form.Item label="confirm password" name="confirmpassword">
              <Input />
            </Form.Item>

            <Form.Item label=" ">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
<button  onClick={()=>googleLogin()}> Login with Google</button>
        </section>

      
      </div>
        <h1 className='text-black'>{state}</h1>
    </>
  )
};
export default Login;