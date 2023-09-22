import { Box, useTheme } from "@mui/material";
import GeographyChart from '../../GeographyChart'
import Header from '../../Header'
import { tokens } from "../../../theme";

const Graphic = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const design = (
        <Box m="20px">
            <Header title="Geography" subtitle="Simple Geography Chart" />

            <Box
                height="100vh"
                border={`1px solid ${colors.grey[100]}`}
                borderRadius="4px"
            >
                <GeographyChart />
            </Box>
        </Box>
    )
    return design
};

export default Graphic