import { Box, useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import { tokens } from '../theme'
import { mockGeographyData as data } from '../Data/Data'
import { geoFeatures } from '../Data/GeoFetures'


const GeographyChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const design = (
        <ResponsiveChoropleth
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[400],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.grey[400],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[400],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.grey[400],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
            }}
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={isDashboard ? 40 : 150}
            projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.5}
            borderColor="Hotpink"
            legends={
                !isDashboard
                    ? [
                        {
                            anchor: "bottom-left",
                            direction: "column",
                            justify: true,
                            translateX: 20,
                            translateY: -100,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: "left-to-right",
                            itemTextColor: colors.grey[100],
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                                {
                                    on: "hover",
                                    style: {
                                        itemTextColor: "#000",
                                        itemOpacity: 1,
                                    },
                                },
                            ],
                        },
                    ]
                    : undefined
            }
        />
    );
    return design;
};

export default GeographyChart;