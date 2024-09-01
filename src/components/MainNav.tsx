import { useState } from "react";
import { Menu, MenuProps } from "antd";
import { TableOutlined } from '@ant-design/icons';

import { useNavigate, useSearchParams } from "react-router-dom";
import { header_color_dark, header_color_light } from "../data/themeValues";


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

function MainNav()
{
    const [ searchParams ] = useSearchParams();
    const isDarkMode: boolean = searchParams.get('darkmode') === 'true';
    
    // Nav Variables.
    const navigate = useNavigate()
    const [current, setCurrent] = useState('incidentview');
    
    // const
    // {
    //     token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();

    const onNav: MenuProps['onClick'] = (e) =>
    {
        // console.log('click ', e);
        setCurrent(e.key);
        navigate(`${e.key}?${searchParams}`)
    };

    return (
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
    )
}

export default MainNav;