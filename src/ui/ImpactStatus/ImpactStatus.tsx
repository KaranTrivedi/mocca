import Plot from 'react-plotly.js';

import  {
    bg_color_dark,
    bg_color_light
} from '../../data/themeValues.tsx'

function ImpactStatus({ isDarkMode }: {isDarkMode: boolean})
{
    const font = {
        color: isDarkMode ? 'white' : 'black',
        size: 13,
        opacity: 1,
        family: "Arial, Helvetica, sans-serif"
    }

    return (
        <Plot
            style={
            {
                height: '300px'
            }}
            data={
            [
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'red' },
                },
                { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={
            {
                hovermode: 'closest',
                font: font,
                paper_bgcolor: isDarkMode ? bg_color_dark : bg_color_light,
                plot_bgcolor: isDarkMode ? bg_color_dark : bg_color_light,
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
                    zeroline: true
                },
                yaxis:
                {
                    zeroline: true,
                    fixedrange: true
                },
            }}
            config={
            {
                responsive: true
            }}
        />
    )
}
export default ImpactStatus