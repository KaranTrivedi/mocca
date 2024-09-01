import { Flex } from "antd"
import ImpactStatus from "../../ImpactStatus/ImpactStatus"
import BusinessCriticality from "../../BusinessCriticality/BusinessCriticality"
import LineOfBusiness from "../../LOB/LineOfBusiness"

// function IncidentView({ isDarkMode }: {isDarkMode: boolean})
function IncidentView()
{
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
                    <ImpactStatus/>
                </div>
                <div
                    style={
                    {
                        width: "33%"
                    }}
                >
                        <LineOfBusiness/>
                </div>
                <div
                    style={
                    {
                        width: "33%"
                    }}
                >
                    <BusinessCriticality/>
                </div>
            </Flex>
            <img src="src/assets/test.bmp" alt="" />
        </div>
    )
}
export default IncidentView