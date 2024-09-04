import { DeleteOutlined, EditOutlined, MenuOutlined, PlusSquareOutlined } from "@ant-design/icons"
import { Button, Divider, Dropdown, Flex } from "antd"

function Frame(
    {
        isDarkMode = false,
        title
    }:
    {
        isDarkMode: boolean,
        title: string
    }
)
{
    let items = [
    {
        key: 'add',
        label:
        (
            <span
            style={
            {
                color: '#3C89E8'
            }}  
            >
                <PlusSquareOutlined />&nbsp;Add Appcodes
            </span>
        ),
    },
    {
        key: 'edit',
        label:
        (
            <span>
                <EditOutlined />&nbsp;Edit
            </span>
        ),
    },
    {
        key: 'delete',
        label:
        (
            <span
                style={
                {
                    color: 'red'
                }}
            >
                <DeleteOutlined />&nbsp;Delete
            </span>
        ),
    },
    ]
    return (
        <div
            style={{
                color: isDarkMode ? 'white' : 'black',
            }}
        >
            <Flex
                justify="space-between"
            >  
            <h3
                style={{
                    margin: "8px"
                }}
            >
                {title}
            </h3>
            <Dropdown menu={{ items }} placement="bottomLeft">
                <Button>
                    <MenuOutlined />
                </Button>
            </Dropdown>
            </Flex>
            <Divider
                style={{
                    margin: "0px"
                }}
            />
        </div>
    )
}

export default Frame