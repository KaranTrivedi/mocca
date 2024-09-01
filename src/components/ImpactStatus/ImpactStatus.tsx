import {
    bg_color_dark,
    bg_color_light,
} from '../../data/themeValues.tsx'
import { useSearchParams } from 'react-router-dom';

// function ImpactStatus({ isDarkMode }: {isDarkMode: boolean})
function ImpactStatus()
{

    const [searchParams] = useSearchParams();
    const isDarkMode: boolean = searchParams.get('darkmode') === 'true';

    // Horizontal tabs indicating counts and statuses of apps, with total.
    return (
        <div
            style={{
                height: "310px",
                padding: "4px",
                margin: "4px",
                borderRadius: "8px",
                border: isDarkMode ? "solid 1px rgba(255, 255, 255, 0.12)" : 'solid 1px rgba(0, 0, 0, 0.1)',
                backgroundColor: isDarkMode ? bg_color_dark : bg_color_light,
                color: 'black',
            }}
        >
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
                            padding: "18px",
                            marginBottom: "5px",
                            borderRadius: "3px",
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
                            borderRadius: "3px",
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
                            borderRadius: "3px",
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
                            borderRadius: "3px",
                        }}
                    >
                        Recovered
                        <span style={{ float: "right", fontWeight: "bold" }}>379</span>
                    </div>
                    <div
                        style={{
                            fontWeight: "bold",
                            marginTop: "15px",
                            paddingTop: "15px",
                            borderTop: isDarkMode ? "solid 1px rgba(255, 255, 255, 0.12)" : 'solid 1px rgba(0, 0, 0, 0.1)',
                            color: isDarkMode ? 'white' : 'black',
                        }}
                    >
                        Total Applications
                        <span style={{ float: "right", fontWeight: "bold" }}>380</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImpactStatus