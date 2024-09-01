import { Button, Flex, Space } from "antd"
import ImpactStatus from "../../ImpactStatus/ImpactStatus"
import BusinessCriticality from "../../BusinessCriticality/BusinessCriticality"
import LineOfBusiness from "../../LOB/LineOfBusiness"
import AppsTable from "../../AppsTable/AppsTable"
import { useSearchParams } from "react-router-dom"
import { bg_color_dark, bg_color_light, border_dark, border_light } from "../../../data/themeValues"

// function IncidentView({ isDarkMode }: {isDarkMode: boolean})
function IncidentView()
{
    const [searchParams] = useSearchParams();
    const isDarkMode: boolean = searchParams.get('darkmode') === 'true';

    return (
        <div
            style={
            {
                // background: colorBgContainer,
                // borderRadius: borderRadiusLG,
            }}
        >
            <Flex
                justify="space-between"
                style={
                {
                    // width: "100%",
                    padding: "15px 0"
                }}
            >
                <div
                    style={
                    {
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
                        width: "33%"
                    }}
                >
                    <BusinessCriticality
                        isDarkMode={isDarkMode}
                    />
                </div>
            </Flex>
            <AppsTable
                isDarkMode={isDarkMode}
            />
        </div>
    )
}
export default IncidentView