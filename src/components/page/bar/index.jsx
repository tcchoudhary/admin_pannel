import { Box } from "@mui/material";
import BarChart from "../../BarChart";
import Header from '../../Header'
const Bar = () => {
    const design = (
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box height="75vh">
                <BarChart />
            </Box>
        </Box>
    )
    return design
};

export default Bar