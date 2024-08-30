import { useState } from "react";
import { ConfigProvider, theme, Switch, Layout, Flex, Menu, MenuProps } from "antd";
import { FloatButton } from 'antd';
import { MoonOutlined, SunOutlined, BulbOutlined, TableOutlined } from '@ant-design/icons';

import { header_color_dark, header_color_light } from "../../data/themeValues";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

// import ReportLayout from './ui/Pages/ReportLayout.tsx'
// import IncidentView from './ui/IncidentView/IncidentView.tsx';

const { Header, Content, Footer } = Layout;

const items = [
    {
        label: 'Incident View',
        key: 'incidentview',
        icon: <TableOutlined />
    },
    {
        label: 'Appcode View',
        key: 'appcodeview',
        icon: <TableOutlined />
    }
]

function ReportLayout()
{
    const [searchParams, setSearchParams] = useSearchParams();
    const isDarkMode: boolean = searchParams.get('darkmode') === 'true';

    // Nav Variables.
    const navigate = useNavigate()
    const [current, setCurrent] = useState('incidentview');

    const { defaultAlgorithm, darkAlgorithm } = theme;

    // const [ isDarkMode, setIsDarkMode ] = useState(true);

    // const
    // {
    //     token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();

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

    const onNav: MenuProps['onClick'] = (e) =>
    {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(e.key)
    };

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
                <Menu
                    style={{
                        backgroundColor: isDarkMode ? header_color_dark : header_color_light,
                        flex: 1, minWidth: 0
                    }}
                    mode="horizontal"
                    selectedKeys={[current]}
                    onClick={onNav}
                    items={items}
                    // defaultSelectedKeys={['incidentview']}
                >
                    {/* {
                        items.map(el =>
                        <MenuItem
                            key={el.key}
                        >
                            {el.label}
                        </MenuItem>)
                    } */}
                </Menu>
                {/* <Divider></Divider> */}
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