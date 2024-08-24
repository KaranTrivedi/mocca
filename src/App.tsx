import './App.css'
import { useState } from "react";

import { ConfigProvider, theme, Switch, Breadcrumb, Layout, Flex, Menu } from "antd";
import { FloatButton } from 'antd';
import { MoonOutlined, SunOutlined, BulbOutlined } from '@ant-design/icons';

import ImpactStatus from './ui/ImpactStatus/ImpactStatus';


const { Header, Content, Footer } = Layout;

const items = new Array(3)
                    .fill(null)
                    .map((_, index) => (
                    {
                        key: String(index + 1),
                        label: `nav ${index + 1}`,
                    }));

function App()
{

    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [ isDarkMode, setIsDarkMode ] = useState(true);

    // const
    // {
    //     token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();

    const handleClick = (value: boolean) =>
    {
        setIsDarkMode(value);
    };

    const handleSwitch = () =>
    {
        setIsDarkMode((previousValue) => !previousValue);
    }

    return (
        <>
          <ConfigProvider
            theme={
            {
                algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
            }}
          >
            <Layout
                style={
                {
                    height: '100vh',
                    margin: '0px',
                    padding: '0px',
                }}
            >
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Flex
                        style={
                        {
                            width: "100%"
                        }}
                        align="center"
                        justify="space-between"
                    >
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            items={items}
                            style={{ flex: 1, minWidth: 0 }}
                        />
                        <Switch
                            style = {
                            {
                                position: "relative",
                                float: "right"
                            }}
                            onChange={handleSwitch}
                            checkedChildren={<MoonOutlined />}
                            unCheckedChildren={<SunOutlined />}
                        />
                    </Flex>
                </Header>
                <Content
                    style={
                    {
                        height: '100vh'
                    }}
                >
                    <Breadcrumb 
                        style={
                        {
                            margin: '15px',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <FloatButton.Group
                        trigger="hover"
                        // type="primary"
                        // style={{ insetInlineEnd: 5 }}
                        icon={<BulbOutlined />}
                    >
                        <FloatButton onClick={() => handleClick(false)} icon={<SunOutlined />} />
                        <FloatButton onClick={() => handleClick(true)} icon={<MoonOutlined />} />
                    </FloatButton.Group>
                    <div
                        style={
                        {
                            width: "100%",
                            padding: "0 15px",
                            // padding: 24,
                            // minHeight: 380,
                            // background: colorBgContainer,
                            // borderRadius: borderRadiusLG,
                        }}
                    >

                        {/* Chart componment frame .. */}
                        <Flex
                            style={
                            {
                                width: "100%",
                                // margin: "0 15px",
                            }
                            }
                        >
                            <div
                                style={
                                {

                                    padding: "4px",
                                    margin: "4px",
                                    width: "33%"
                                }}
                            >
                                <ImpactStatus
                                    isDarkMode={isDarkMode}
                                />
                            </div>
                            <div
                                style={
                                {
                                    padding: "4px",
                                    margin: "4px",
                                    width: "33%"
                                }}
                                >
                                <ImpactStatus
                                    isDarkMode={isDarkMode}
                                />
                            </div>
                            <div
                                style={
                                {
                                    padding: "4px",
                                    margin: "4px",
                                    width: "33%"
                                }}
                            >
                                <ImpactStatus
                                    isDarkMode={isDarkMode}
                                />
                            </div>
                        </Flex>
                        {/* <div className="card">
                            <button onClick={() => setCount((count) => count + 1)}>
                                count is {count}
                            </button>
                        </div> */}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'left' }}>
                    ©{new Date().getFullYear()} DCOR, GOCC
                </Footer>
            </Layout>
          </ConfigProvider>
        </>
    )
}

export default App
