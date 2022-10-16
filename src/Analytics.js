import 'antd/dist/antd.css';
import './Analytics.css';
import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { Button, Image, Table, Descriptions, PageHeader, Layout, Menu } from 'antd';
import { SettingOutlined, HomeOutlined, LogoutOutlined, BellOutlined, ContactsOutlined, MessageOutlined, BorderInnerOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        render: (name) => `${name.first} ${name.last}`,
        width: '20%',
    },
    {
        title: 'User Name',
        dataIndex: 'username',
        width: '20%',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [
            {
                text: 'Male',
                value: 'male',
            },
            {
                text: 'Female',
                value: 'female',
            },
            {
                text: 'Other',
                value: 'other',
            },
        ],
        width: '15%',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        width: '25%',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        width: '20%',
    },
];
const getRandomuserParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});

const App = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });
    const fetchData = () => {
        setLoading(true);
        fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
            .then((res) => res.json())
            .then(({ results }) => {
                setData(results);
                setLoading(false);
                setTableParams({
                    ...tableParams,
                    pagination: {
                        ...tableParams.pagination,
                        total: 200,
                        // 200 is mock data, you should read it from server
                        // total: data.totalCount,
                    },
                });
            });
    };

    useEffect(() => {
        fetchData();
    }, [JSON.stringify(tableParams)]);
    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });
    };
    return (
        <Table
        />
    );
};

const Analytics = () => (

    <Layout className="layout">

        <Header>
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
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    title="User Analytics"
                    subTitle="Data of the currently active users on platform"
                    extra={[
                        <Button key="2">Download as PDF</Button>,
                        <Button key="1" type="primary">
                            Add users
                        </Button>,
                    ]}
                >
                </PageHeader>
            </div>

            <div className="site-layout-content" >

                <Table
                    columns={columns}
                    rowKey={(record) => record.login.uuid}
                //dataSource={data}
                //pagination={tableParams.pagination}
                // loading={loading}
                //onChange={handleTableChange}
                />

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

export default Analytics;