import { useState } from "react";
import { ConfigProvider, theme, Switch, Layout, Flex, Menu, MenuProps, Divider } from "antd";
import { FloatButton } from 'antd';
import { MoonOutlined, SunOutlined, BulbOutlined, TableOutlined } from '@ant-design/icons';

import { header_color_dark, header_color_light } from "../../data/themeValues";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import MainNav from "../MainNav";

const { Header, Content, Footer } = Layout;

function ReportLayout()
{

    const [searchParams, setSearchParams] = useSearchParams();
    const isDarkMode: boolean = searchParams.get('darkmode') === 'true';

    const { defaultAlgorithm, darkAlgorithm } = theme;

    const handleClick = (value: boolean) =>
    {
        setSearchParams({
            darkmode: value.toString()
        })
        // setIsDarkMode(value);
    };
    
    const handleSwitch = () =>
    {
        // setIsDarkMode((previousValue) => !previousValue);
        setSearchParams({
            darkmode: (!isDarkMode).toString()
        })
    }

    return (
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
                backgroundColor: isDarkMode ? header_color_dark : header_color_light,
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
                <MainNav/>
                <Switch
                    onChange={handleSwitch}
                    checkedChildren={<MoonOutlined />}
                    unCheckedChildren={<SunOutlined />}
                />
            </Flex>
        </Header>
        <Content
            style={
            {
                height: '100vh',
                width: "100%",
                padding: "0 15px",
            }}
        >
            <Outlet/>
            {/* Float buttons on the bottom right of the page. */}
            <FloatButton.Group
                trigger="hover"
                // type="primary"
                // style={{ insetInlineEnd: 5 }}
                icon={<BulbOutlined />}
            >
                <FloatButton
                    onClick={() => handleClick(false)}
                    icon={<SunOutlined />}
                />
                <FloatButton
                    onClick={() => handleClick(true)}
                    icon={<MoonOutlined />}
                />
            </FloatButton.Group>
        </Content>
        <Footer style={{ textAlign: 'left' }}>
            ©{new Date().getFullYear()} DCOR, GOCC
        </Footer>
    </Layout>
      </ConfigProvider>
    )
}

export default ReportLayout