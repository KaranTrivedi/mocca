import { Flex } from "antd"
import ImpactStatus from "../../ImpactStatus/ImpactStatus"

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
                }
                }
            >
                <div
                    style={
                    {

                        padding: "4px",
                        margin: "4px",
                        width: "33%"
                    }}
                >
                    <ImpactStatus/>
                </div>
                <div
                    style={
                    {
                        padding: "4px",
                        margin: "4px",
                        width: "33%"
                    }}
                    >
                    <ImpactStatus/>
                </div>
                <div
                    style={
                    {
                        padding: "4px",
                        margin: "4px",
                        width: "33%"
                    }}
                >
                    <ImpactStatus/>
                </div>
            </Flex>
        </div>
    )
}
export default IncidentView