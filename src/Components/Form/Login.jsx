import React, { useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';
import axiosInstance from './Utils/axiosInstance';
import axios from "axios"
import { UploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useNavigate } from 'react-router';
import { GlobalState } from '../Context/StateManagement';
import { useGoogleLogin } from '@react-oauth/google';
const Login = () => {
  const navigate = useNavigate()
  const { setAuth, setRole } = useContext(GlobalState)
  const [state, setState] = useState()
  const [imageFile, setImageFile] = useState()

  const onFinish = async (values) => {
    try {
      const res = await axiosInstance.post("/register/LoginControl", values)
      console.log("message",res)
      setState(res?.data?.message)
      console.log(res?.data?.user)
      setAuth(res?.data?.user || null)
      console.log("successfull login ", res?.data?.message)
      setTimeout(() => {
        navigate("/dashboard")
      }, 2000)
    } catch (err) {
      console.log("error of the res login ", err?.response?.data?.message)

    }

  }

  const googleLogin = useGoogleLogin({

    onSuccess: async (tokenResponse) => {
      try {
        const res = await axiosInstance.post("/register/auth/googleLogin", {
          accessToken: tokenResponse.access_token
        })

        console.log("login jwt token geneerated", res?.data)
        setState(res?.data?.message)
        console.log(res?.data?.user)
        setAuth(res?.data?.user)
        setRole(res?.data?.user?.userRole)
        alert(res?.data?.message)
        setTimeout(() => {
          navigate("/dashboard")
        }, 2000)

      } catch (error) {
        console.log("google login main error hai", error)
      }
    },
    onError: (error) => {
      console.log("error", error)
      setState(error)
    }
  })
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }

  const props = {
    name: 'file',
    action: 'http://localhost:5002/api/register/imagecontrol',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      console.log("info file", info)
      if (info.file.status !== 'uploading') {
        console.log("info pobject file ", info.file.originFileObj);
        setImageFile(info.file.originFileObj)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleImageApi = async () => {
    try {
      const imageData = new FormData();
      imageData.append("file", imageFile);
     const response = await axios.post("http://localhost:5002/api/register/imagecontrol");
      console.log("response from api", response);
    } catch (error) {
      console.log("error while uploading", error);
    }
  };

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
            <Form.Item label=" ">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <Button onClick={handleImageApi}>make api call</Button>
          </Form>
          <button onClick={() => googleLogin()}> Login with Google</button>
        </section>


      </div>
      <h1 className='text-black'>{state}</h1>
    </>
  )
};
export default Login;