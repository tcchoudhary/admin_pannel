import { Box } from "@mui/material";
import PieChart from '../../PieChart'
import Header from '../../Header'
const Pie = () => {
    const design = (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>
    )
    return design
};

export default Pie