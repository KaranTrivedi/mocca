import './App.css'
import { useState } from "react";
import { ConfigProvider, theme, Switch, Breadcrumb, Layout } from "antd";
import { MoonOutlined, SunOutlined, BulbOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import Plot from 'react-plotly.js';


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
    const bg_color_light = 'rgb(255, 255, 255)'
    const bg_color_dark = 'rgba(20, 20, 20, 0.7)'

    const [count, setCount] = useState(0)

    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [ isDarkMode, setIsDarkMode ] = useState(true);

    const font = {
        color:  isDarkMode ? 'white' : 'black',
        size: 13,
        opacity: 1,
        family: "Arial, Helvetica, sans-serif"
    }

    const
    {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleClick = (value: boolean) =>
    {
        setIsDarkMode(value);
    };

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
                    {/* <Switch
                        onChange={handleClick}
                        checkedChildren="{<MoonOutlined />}"
                        unCheckedChildren="{<SunOutlined />}"
                    /> */}
                    <div className="demo-logo" />
                    {/* <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items}
                        style={{ flex: 1, minWidth: 0 }}
                    /> */}
                    {/* <Menu
                        theme="dark"
                        mode="horizontal"
                        // defaultSelectedKeys={['2']}
                        // items={items}
                        style={
                        {
                            flex: 1,
                            minWidth: 0
                        }}
                    /> */}
                </Header>
                <Content
                    style={
                    {
                        // padding: '0 48px',
                        height: '100vh'
                    }}
                >
                    <Breadcrumb 
                        style={
                        {
                            margin: '16px'
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
                            padding: 24,
                            // minHeight: 380,
                            // background: colorBgContainer,
                            // borderRadius: borderRadiusLG,
                        }}
                    >

                        <div>
                            {isDarkMode}
                            <Plot
                                style={
                                {
                                    height: '300px'
                                }}
                                data={
                                [
                                    {
                                        x: [1, 2, 3],
                                        y: [2, 6, 3],
                                        type: 'scatter',
                                        mode: 'lines+markers',
                                        marker: { color: 'red' },
                                    },
                                    { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                                ]}
                                layout={
                                {
                                    hovermode: 'closest',
                                    font: font,
                                    paper_bgcolor: isDarkMode ? bg_color_dark : bg_color_light,
                                    plot_bgcolor: isDarkMode ? bg_color_dark : bg_color_light,
                                    margin:
                                    {
                                        t: 0,
                                        b: 40,
                                        l: 30,
                                        r: 0
                                    },
                                    height: 300,
                                    xaxis:
                                    {
                                        zeroline: true
                                    },
                                    yaxis:
                                    {
                                        zeroline: true,
                                        fixedrange: true
                                    },
                                }}
                                config={
                                {
                                    responsive: true
                                }}
                            />
                        </div>
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
