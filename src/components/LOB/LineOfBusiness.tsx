import Plot from 'react-plotly.js';

import  {
    bg_color_dark,
    plot_bgcolor,
    bg_color_light,
    grid_line_dark,
    grid_line_light
} from '../../data/themeValues.tsx'
import { useSearchParams } from 'react-router-dom';

// function ImpactStatus({ isDarkMode }: {isDarkMode: boolean})
function LineOfBusiness()
{
    const [searchParams] = useSearchParams();
    const isDarkMode: boolean = searchParams.get('darkmode') === 'true';

    const font = {
        color: isDarkMode ? 'white' : 'black',
        size: 13,
        opacity: 1,
        family: "Arial, Helvetica, sans-serif"
    }

    // Horizontal tabs indicating counts and statuses of apps, with total.
    return (
        <div
            style={{
                padding: "4px",
                margin: "4px",
                borderRadius: "8px",
                border: isDarkMode ? "solid 1px rgba(255, 255, 255, 0.12)" : 'solid 1px rgba(0, 0, 0, 0.1)',
                backgroundColor: isDarkMode ? bg_color_dark : bg_color_light,
            }}
        >
            <Plot
                style={
                {
                    height: '300px'
                }}
                data={
                [
                    {
                        type: 'bar',
                        marker:
                        {
                            color: '#3066AA'
                        },
                        textposition: 'inside', // Automatically position the text
                        x: ["CM", "Functions", "Insurance", "I&TS", "P&CB", "TI", "WM"],
                        y: [105, 82, 44, 60, 130, 62, 120]
                    },
                ]}
                layout={
                {
                    hovermode: 'closest',
                    font: font,
                    paper_bgcolor: isDarkMode ? bg_color_dark : bg_color_light,
                    plot_bgcolor: isDarkMode ? plot_bgcolor : bg_color_light,
                    margin:
                    {
                        t: 0,
                        b: 40,
                        l: 30,
                        r: 0
                    },
                    height: 300,
                    xaxis:
                    {
                        zeroline: true,
                        gridcolor: isDarkMode ? grid_line_dark : grid_line_light,
                        zerolinecolor: isDarkMode ? grid_line_dark : grid_line_light,
                        linecolor: isDarkMode ? grid_line_dark : grid_line_light,
                    },
                    yaxis:
                    {
                        zeroline: true,
                        fixedrange: true,
                        gridcolor: isDarkMode ? grid_line_dark : grid_line_light,
                        zerolinecolor: isDarkMode ? grid_line_dark : grid_line_light,
                        linecolor: isDarkMode ? grid_line_dark : grid_line_light,
                    },
                }}
                useResizeHandler={true}
                config={
                {
                    responsive: true
                }}
            />
        </div>
    )
}
export default LineOfBusiness