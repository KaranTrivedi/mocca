import { Button, Flex, Input } from "antd"
import ImpactStatus from "../../ImpactStatus/ImpactStatus"
import BusinessCriticality from "../../BusinessCriticality/BusinessCriticality"
import LineOfBusiness from "../../LOB/LineOfBusiness"
import AppsTable from "../../AppsTable/AppsTable"
import { useSearchParams } from "react-router-dom"
import { DatabaseOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons"
import { useState } from "react"
import { bg_color_dark, bg_color_light, border_dark, border_light, header_color_dark, header_color_light } from "../../../data/themeValues"
// function IncidentView({ isDarkMode }: {isDarkMode: boolean})
function IncidentView()
{
    const [searchParams] = useSearchParams();
    const isDarkMode: boolean = searchParams.get('darkmode') === 'true';

    const [searchValue, setSearchValue] = useState('');

    return (
        <div
            style={
            {
                // background: colorBgContainer,
                // borderRadius: borderRadiusLG,
            }}
        >
            <div
                style={{
                    // background: isDarkMode ? header_color_dark : header_color_light,
                    padding: "15px",
                    margin: "8px 4px 4px 4px",
                    borderRadius: "8px",
                    border: isDarkMode ? border_dark : border_light,
                    backgroundColor: isDarkMode ? bg_color_dark : bg_color_light,
                }}
            >
                <Input
                    placeholder="Search Appcodes here..."
                    prefix={<SearchOutlined />}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    style={
                    {
                        width: '300px',
                        marginRight: '10px'
                    }}
                />
                <Button type="primary" icon={<PlusOutlined />}>
                    Add New Ticket
                </Button>
                <Button type="primary" icon={<SearchOutlined />} style={{ marginLeft: '10px' }}>
                    Search Ticket
                </Button>
                <Button type="primary" icon={<DatabaseOutlined />} style={{ marginLeft: '10px' }}>
                    Get IIPM Extract
                </Button>
            </div>
            <Flex
                justify="space-between"
                style={
                {}}
            >
                <div
                    style={
                    {
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
                        margin: "4px",
                        width: "33%"
                    }}
                >
                        <LineOfBusiness
                            isDarkMode={isDarkMode}
                        />
                </div>
                <div
                    style={
                    {
                        margin: "4px",
                        width: "33%"
                    }}
                >
                    <BusinessCriticality
                        isDarkMode={isDarkMode}
                    />
                </div>
            </Flex>
            <div
                style={{
                    margin: "4px",
                }}
            >
                <AppsTable
                    isDarkMode={isDarkMode}
                />
            </div>
        </div>
    )
}
export default IncidentView