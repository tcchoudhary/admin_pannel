import { Box } from "@mui/material";
import LineChart from '../../LineChart'
import Header from '../../Header'

const Line = () => {
    const design = (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>
    )
    return design
};

export default Line