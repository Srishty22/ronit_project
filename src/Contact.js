import 'antd/dist/antd.css';
import './About.css';
import React from 'react';
import {  Image, Row, Col,Layout, Menu, Form, Input, Button, Select, Divider, Typography } from 'antd';
import { SettingOutlined, HomeOutlined, LogoutOutlined, BellOutlined, InstagramOutlined, YoutubeOutlined, FacebookOutlined, ContactsOutlined, MessageOutlined, BorderInnerOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const Contact = () => (
    <Layout className="layout">
        
      <Header>
        <div className="logo"></div>
        <Menu
          theme="dark"
          mode="horizontal"
          //items={items}
          defaultSelectedKeys={['contact']}
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
        <div className="site-layout-content" style={{margin:24}}>
            <Row>
                <Col span={12} style={{paddingLeft:48, paddingRight:64}}>

                  <h1 style={{paddingLeft:100, paddingBottom:16, paddingTop:24}}>
                      Write back to us!
                  </h1>
                  <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal" >
        
          <Form.Item label="Email ID">
            <Input placeholder="Enter Email ID"/>
          </Form.Item>
          <Form.Item label="Reason">
            <Select  placeholder="Select a reason">
              <Select.Option value="reason1">Reason 1</Select.Option>
              <Select.Option value="reason2">Reason 2</Select.Option>
              <Select.Option value="reason3">Resaon 3</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Comments">
            <TextArea rows={4} placeholder="If any comments, mention here." />
          </Form.Item>
          <Form.Item style={{paddingLeft:100, paddingBottom:24}}>
            <Button type='primary'>Submit Feedback</Button>
          </Form.Item>
                  </Form>
                  <Divider/>
                  <p style={{paddingLeft:100}}>
                  <Text strong >Follow us on: </Text>
                  </p>
    
                  <div style={{ marginLeft:100}}>
                  <Button shape="circle" icon={<YoutubeOutlined />} />
                  <Button shape="circle" icon={<FacebookOutlined />} style={{marginRight:8, marginLeft:8}}/>
                  <Button shape="circle" icon={<InstagramOutlined />} />
                  </div>
                  <p style={{marginLeft:100, marginTop:16}}>
                  <Text strong >Phone : </Text>
                     (+91) 96732-79721
                      <br></br>
                      <Text strong >Address : </Text>
                      House Number 194, 
                      <br></br>
                      Toor Enclave Society, Near Verka Milk Plant
                      <br></br>
                      Jalandhar, Punjab, 144011
                  </p>
                </Col>
                <Col span={12}>
                <Image
        
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
                </Col>
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

export default Contact;