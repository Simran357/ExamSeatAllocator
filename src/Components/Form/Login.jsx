import React, { useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';
import axiosInstance from './Utils/axiosInstance';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { GlobalState } from '../Context/StateManagement';
const Login = () => {
  const navigate = useNavigate()
  const {setAuth} = useContext(GlobalState)
  const [state, setState] = useState()
  const onFinish = async (values) => {
    try {
      const res = await axiosInstance.post("/register/LoginControl", values)
      try {
    
        sessionStorage.setItem("jwtToken",res?.data?.jwtToken)
        console.log("login jwt token geneerated",res?.data?.jwtToken)
        setState(res?.data?.message)
        setAuth(res?.data?.jwtToken)
            console.log("successfull login ",res?.data?.message)
            navigate("/dashboard")
      } catch {
        (err) => {
          setState(err?.data?.message)
          console.log(err)
        }
      }
      console.log(res)
    } catch {
      (err) => {
        console.log(err)
      }
    }
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }
  return (
    <>
      <div className='m-6'>
        <section className="flex items-center justify-between gap-4">

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
            <Form.Item label="username" name="username" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item label="password" name="password" rules={[{ required: true }]}>
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
        </section>

        <h1>{state}</h1>
      </div>
    </>
  )
};
export default Login;