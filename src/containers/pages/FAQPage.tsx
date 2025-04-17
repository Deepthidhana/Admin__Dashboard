import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import { Header } from "../../common/Header";

const mockFAQData = [
  {
    summary: "Question 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    summary: "Question 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    summary: "Question 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    summary: "Question 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    summary: "Question 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    summary: "Question 6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];
export const FAQPage = () => {
  return (
    <Box m="20px">
      <Header title="FAQ Page" subtitle={"Frequently Answered questions"} />
      <Box m={"40px 0 0"}>
        {mockFAQData.map((item, index) => (
          <Accordion key={`${item.summary}-${index}`}>
            <AccordionSummary>{item.summary}</AccordionSummary>
            <AccordionDetails>{item.content}</AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQPage;