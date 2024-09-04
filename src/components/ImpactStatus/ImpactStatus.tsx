import {
    bg_color_dark,
    bg_color_light,
    border_dark,
    border_light,
} from '../../data/themeValues.tsx'

import Frame from '../Frame.tsx';

function ImpactStatus({ isDarkMode = false }: {isDarkMode: boolean})
// function ImpactStatus()
{
    // const [searchParams] = useSearchParams();
    // const isDarkMode: boolean = searchParams.get('darkmode') === 'true';

    // Horizontal tabs indicating counts and statuses of apps, with total.
    return (
        <div
            style={{
                height: "348px",
                padding: "4px",
                // margin: "4px",
                borderRadius: "8px",
                border: isDarkMode ? border_dark : border_light,
                backgroundColor: isDarkMode ? bg_color_dark : bg_color_light,
                color: 'black',
            }}
        >
            <Frame
                title="Impact Status"
                isDarkMode={isDarkMode}
            />
            <div
                style={{
                    fontSize: 13,
                    fontFamily: "Arial, Helvetica, sans-serif",
                    // borderRadius: "8px",
                    // border: isDarkMode ? "solid 1px rgba(255, 255, 255, 0.12)" : 'solid 1px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div style={{ padding: "10px" }}>
                    <div
                        style={{
                            backgroundColor: "#FFDD7E",
                            border: "#FFDD7E",
                            padding: "18px",
                            marginBottom: "5px",
                            borderRadius: "8px",
                            
                        }}
                    >
                        Potentially Impacted
                        <span style={{ float: "right", fontWeight: "bold" }}>0</span>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#ADD8E6",
                            padding: "18px",
                            marginBottom: "5px",
                            borderRadius: "8px",
                        }}
                    >
                        Not Impacted
                        <span style={{ float: "right", fontWeight: "bold" }}>0</span>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#FF7E79",
                            padding: "18px",
                            marginBottom: "5px",
                            borderRadius: "8px",
                        }}
                    >
                        Impacted
                        <span style={{ float: "right", fontWeight: "bold" }}>1</span>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#A7DCA7",
                            padding: "18px",
                            marginBottom: "5px",
                            borderRadius: "8px",
                        }}
                    >
                        Recovered
                        <span style={{ float: "right", fontWeight: "bold" }}>379</span>
                    </div>
                    <div
                        style={{
                            fontWeight: "bold",
                            marginTop: "15px",
                            marginLeft: "10px",
                            paddingTop: "15px",
                            borderTop: isDarkMode ? "solid 1px rgba(255, 255, 255, 0.12)" : 'solid 1px rgba(0, 0, 0, 0.1)',
                            color: isDarkMode ? 'white' : 'black',
                        }}
                    >
                        Total Applications
                        <span style={
                        {
                            float: "right",
                            fontWeight: "bold",
                            marginRight: "15px"
                        }}>
                            380
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImpactStatus