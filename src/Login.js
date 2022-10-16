import 'antd/dist/antd.css';
import './Login.css';
import './App';
import React from 'react';
import { Button, Checkbox, Form, Input, Col, Row, Image } from 'antd';
import {Route, useRoutes} from 'react-router-dom';

const Login = () => {

    let connection=(Route);

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row>
            <Col span={2}></Col>
            <Col span={10} className="LoginForm">
                <h2 className="Heading" >
                    Sign-in to Continue!
                </h2>
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
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
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 4, span: 20 }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4, span: 20 }}
                    >
                        <Button type="primary" htmlType="submit" onClick={()=>{
                            connection.push("home");
                            }}>
                            Submit
                        </Button>
                    </Form.Item>

                </Form>

            </Col>

            <Col span={10} className="Image">
                <Image
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </Col>
            <Col span={2}></Col>
        </Row>


    );
};

export default Login;