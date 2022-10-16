import 'antd/dist/antd.css';
import './AddUsers.css';
import React from 'react';
import { Image, Row, Col, Layout, Menu, Form, Input, Button, Select, PageHeader } from 'antd';
import { SettingOutlined, HomeOutlined, LogoutOutlined, BellOutlined, ContactsOutlined, MessageOutlined, BorderInnerOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;


const AddUsers = () => (
    <Layout className="layout">

        <Header>
            <div className="logo"></div>
            <Menu
                theme="dark"
                mode="horizontal"
                //items={items}
                defaultSelectedKeys={['analytics']}
            >
                <Menu.Item key="logo">
                    <Image
                        width={60}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </Menu.Item>
                <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
                <Menu.Item key="about" icon={<BorderInnerOutlined />}>About</Menu.Item>
                <Menu.Item key="analytics" icon={<ContactsOutlined />}>Analytics</Menu.Item>
                <Menu.Item key="contact" icon={<MessageOutlined />}>Contact</Menu.Item>
                <Menu.SubMenu title="My Profile">
                    <Menu.Item key="settings" icon={<SettingOutlined />}>Settings</Menu.Item>
                    <Menu.Item key="notifications" icon={<BellOutlined />}>Notifications</Menu.Item>
                    <Menu.Item key="logout" icon={<LogoutOutlined />}>Log Out</Menu.Item>
                </Menu.SubMenu>

            </Menu>
        </Header>

        <Content
            style={{
                padding: '0 24px',
            }}
        >
            <PageHeader
                className="site-page-header"
                onBack={() => null} //link to analytics page
                title="Add Users"
                subTitle="Enter following details to add users in the repository"
                style={{ backgroundColor: 'white', paddingRight:24, paddingLeft:24 }}
            />
            <div className="site-layout-content" style={{ margin: 24 }}>
                <Row>
                    <Col span={12} style={{ paddingLeft: 48, paddingRight: 64, paddingTop:24 }}>
                        <Form
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 20 }}
                            layout="horizontal" >
                            <Form.Item label="Full Name">
                                <Input placeholder="Enter your fullname" />
                            </Form.Item>
                            <Form.Item label="Username">
                                <Input placeholder="Enter username" />
                            </Form.Item>
                            <Form.Item label="Email ID">
                                <Input placeholder="Enter Email ID" />
                            </Form.Item>
                            <Form.Item label="Gender">
                                <Select placeholder="Select a gender">
                                    <Select.Option value="reason1">Male</Select.Option>
                                    <Select.Option value="reason2">Female</Select.Option>
                                    <Select.Option value="reason3">Others</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item style={{ paddingLeft: 88, paddingBottom: 24, paddingTop: 24 }}>
                                <Button type='primary'>Submit</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>  </Col>
                </Row>
            </div>
        </Content>

        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            UserNet ©2022 Created by Ronit Banga
        </Footer>

    </Layout>
);

export default AddUsers;