import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axiosInstance from './Utils/axiosInstance';
import { useNavigate } from 'react-router';
const Register = () => {
const naviagte = useNavigate()
  const [state, setState] = useState()
  const onFinish = async (values) => {

    try {
      const res = await axiosInstance.post("/register/registercontrol", values)
      console.log("sucessfull resgistration",res)
      try {
        setState(res?.data?.message)
        naviagte("/")
      } catch(err) {
          setState(err?.data?.message)
          console.log(err)
        }
      
    } catch(err) {
        console.log(err)
      }
    
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (<>
    <div className='m-20 p-6   flex flex-col  items-center'>
        <section className="  p-20   rounded-xl border border-slate-100 bg-white shadow ">

        <Form
          name="wrap"
          labelCol={{ flex: '110px' }}
          labelAlign="left"
          labelWrap
          wrapperCol={{ flex: 1 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          colon={false}
          style={{ maxWidth: 600 }}
        >
           <Form.Item label="Email" name="email" >
            <Input />
          </Form.Item>
          <Form.Item label="username" name="username" >
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
      </section>

      <h1>{state}</h1>
    </div>
  </>)
}
export default Register;