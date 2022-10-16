import 'antd/dist/antd.css';
import './Home.css';
import React from 'react';
import { Button, Image } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { SettingOutlined, HomeOutlined, LogoutOutlined, BellOutlined, ContactsOutlined, MessageOutlined, BorderInnerOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const items = [
    { label: 'Home', key: '1' }, // remember to pass the key prop
    { label: 'About', key: '2' },
    { label: 'Analytics', key: '3' },
    { label: 'Contact', key: '4' }, // which is required
    {
        label: 'sub menu',
        key: 'submenu',
        children: [{ label: '5', key: 'submenu-item-1' }],
    },
];

const Home = () => (
    <Layout className="layout">

        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                //items={items}
                defaultSelectedKeys={['home']}
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
            <div className="site-layout-content" style={{ margin: 24 }}>
                <p>
                    This is home page
                </p>
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

export default Home;

