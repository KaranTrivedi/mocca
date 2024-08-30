import { Flex } from "antd"
import ImpactStatus from "../ImpactStatus/ImpactStatus"

function IncidentView({ isDarkMode }: {isDarkMode: boolean})
{
    // const font = {
    //     color: isDarkMode ? 'white' : 'black',
    //     size: 13,
    //     opacity: 1,
    //     family: "Arial, Helvetica, sans-serif"
    // }

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
                    // margin: "0 15px",
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
                    <ImpactStatus
                        isDarkMode={isDarkMode}
                    />
                </div>
                <div
                    style={
                    {
                        padding: "4px",
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
                        padding: "4px",
                        margin: "4px",
                        width: "33%"
                    }}
                >
                    <ImpactStatus
                        isDarkMode={isDarkMode}
                    />
                </div>
            </Flex>
        </div>
    )
}
export default IncidentView