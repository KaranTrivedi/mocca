import Plot from 'react-plotly.js';
import { useSearchParams } from 'react-router-dom';
import { bg_color_dark, bg_color_light, plot_bgcolor } from '../../data/themeValues';
import Frame from '../Frame';

function BusinessCriticality()
{
    const [searchParams] = useSearchParams();
    const isDarkMode: boolean = searchParams.get('darkmode') === 'true';

    const font = {
        color: isDarkMode ? 'white' : 'black',
        size: 13,
        opacity: 1,
        family: "Arial, Helvetica, sans-serif"
    }

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
        <Frame
            title="Business Criticality"
            isDarkMode={isDarkMode}
        />
        <Plot
            style={
            {
                height: '300px'
            }}
            data={[
            {
                type: 'pie',
                hole: 0.5, // Makes it a doughnut chart
                labels: ['Criticality Not Assigned', 'Low', 'Medium', 'High', 'Critical', 'Crown Jewel'],
                values: [6, 51, 159, 161, 3, 67],
                marker: {
                colors: [
                    '#F6A5A5', // Criticality Not Assigned
                    '#F28B81', // Low
                    '#FF7043', // Medium
                    '#D32F2F', // High
                    '#B71C1C', // Critical
                    '#D1A000', // Crown Jewel
                ],
                },
                textinfo: 'label+value', // Displays both label and value
                textposition: 'inside',
                automargin: true, // Automatically manage margins
            },
            ]}
            layout={{
                showlegend: true,
                paper_bgcolor: isDarkMode ? bg_color_dark : bg_color_light,
                plot_bgcolor: isDarkMode ? plot_bgcolor : bg_color_light,
                margin:
                {
                    t: 15,
                    b: 15,
                    l: 0,
                    r: 0
                },
                height: 300,
                legend:
                {
                    x: 1,
                    y: 0.5,
                    traceorder: 'normal',
                    font: font,
                    bgcolor: isDarkMode ? bg_color_dark : bg_color_light,
                    bordercolor: isDarkMode ? "solid 1px rgba(255, 255, 255, 0.12)" : 'solid 1px rgba(0, 0, 0, 0.1)',
                },
                annotations: [],
            }}
            config={{ responsive: true }}
        />
    </div>
    );
};

export default BusinessCriticality;