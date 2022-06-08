// import React from 'react';
// import { Input } from 'antd';

// export default function Login() {
//     const setIsLogin = () => {
//         localStorage.setItem('user', JSON.stringify(true));
//         console.log('set login True');
//     }

//   return (
//     <div className='App'>
//         Login
//         <form>
//             <input type="text" />
//             <button onClick={()=>{setIsLogin()}}>login</button>
//             <Input placeholder="User name" />
//             <Input placeholder="Password" />
//         </form>
//     </div>
//   )
// }

import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();

    const setIsLogin = () => {
        localStorage.setItem('user', JSON.stringify(true));
        console.log('set login True');
    }

    const onFinish = (values) => {
        console.log('Success:', values);
        if(values.username=== 'admin' && values.password === 'admin'){
            setIsLogin();
            navigate('/');
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Space>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </Space>
    );
};

export default App;
