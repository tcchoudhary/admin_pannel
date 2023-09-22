import { Box, useTheme } from "@mui/material";
import Header from "../../Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const design = (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What is React & Way we use us
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        React is an open-source JavaScript library developed by Facebook for building
                        user interfaces
                        (UIs) and user interface components. It's widely used for
                        creating dynamic, interactive, and reusable web applications. React is
                        often referred to as a front-end library because it primarily focuses on
                        the user interface and how it interacts with user actions and data changes.
                        <br />
                        <Typography>
                            <p>
                                <b> Component-Based Architecture:</b> React encourages the development of applications using a component-based architecture. Components are reusable, self-contained building blocks that encapsulate a part of the user interface and its behavior. This approach makes it easier to manage and scale complex UIs.
                            </p>
                            <p>
                                <b> Virtual DOM:</b> React uses a virtual DOM (Document Object Model) to optimize rendering performance. When data in a React application changes, React creates a virtual representation of the updated UI, compares it to the current UI, and then efficiently updates only the parts that have changed. This minimizes the need for direct manipulation of the actual DOM, which can be slow and inefficient.
                            </p>

                        </Typography>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What is Vartul Dom
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        React uses a virtual DOM (Document Object Model) to optimize rendering performance. When data in a React application changes, React creates a virtual representation of the updated UI, compares it to the current UI, and then efficiently updates only the parts that have changed. This minimizes the need for direct manipulation of the actual DOM, which can be slow and inefficient.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Some Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        The Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
    return design
};

export default FAQ;
