import { useState } from 'react'
import './App.css'
import Plot from 'react-plotly.js';

import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const items = new Array(3)
                    .fill(null)
                    .map((_, index) => (
                    {
                        key: String(index + 1),
                        label: `nav ${index + 1}`,
                    }));

function App() {
    const [count, setCount] = useState(0)
    const font = {
        color: 'white',
        size: 13,
        opacity: 1,
        family: "Arial, Helvetica, sans-serif"
    }

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Layout
                style={
                    {
                        height: '100vh',
                        margin: '0px',
                        padding: '0px',
                    }
                }
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
                    <div className="demo-logo" />
                    {/* <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items}
                        style={{ flex: 1, minWidth: 0 }}
                    /> */}
                </Header>
                <Content 
                    style={
                        {
                            // padding: '0 48px',
                            height: '100vh'
                        }
                    }
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
                    <div
                        style={
                        {
                            padding: 24,
                            // minHeight: 380,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >

                        <div>
                            <Plot
                                style={
                                {
                                    height: '300px'
                                }}
                                data={[
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
                                    paper_bgcolor: 'rgba(20, 20, 20, 0.7)',
                                    plot_bgcolor: 'rgba(20, 20, 20, 0.7)',
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
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </>
    )
}

export default App
