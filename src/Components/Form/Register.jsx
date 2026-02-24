import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import axiosInstance from './Utils/axiosInstance';
const Register = () => {

  const [state, setState] = useState()
  const onFinish = async (values) => {

    try {

      const res = await axiosInstance.post("/register/registerControl", values)
      console.log("sucessfull resgistration",res)
      try {
        setState(res?.data?.message)

      } catch {
        (err) => {
          setState(err?.data?.message)
          console.log(err)
        }
      }
    } catch {
      (err) => {
        console.log(err)
      }
    }
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (<>
    <div className='m-6'>
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">

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
  </>)
}
export default Register;