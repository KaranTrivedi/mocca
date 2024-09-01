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
                style={
                {
                    width: "100%",
                    padding: "15px 0"
                }}
            >
                <div
                    style={
                    {

                        // padding: "4px",
                        // margin: "4px",
                        width: "33%"
                    }}
                >
                    <ImpactStatus/>
                </div>
                <div
                    style={
                    {
                        // padding: "4px",
                        // margin: "4px",
                        width: "33%"
                    }}
                >
                        <LineOfBusiness/>
                </div>
                <div
                    style={
                    {
                        // padding: "4px",
                        // margin: "4px",
                        width: "33%"
                    }}
                >
                    <BusinessCriticality/>
                </div>
            </Flex>
        </div>
    )
}
export default IncidentView