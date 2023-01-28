import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonalData from "./PersonalData";
import Education from "./Education";
import Work from "./Work";
import Websites from "./Websites";
import Upload from "./UploadFile/Upload";
import { Button } from "react-bootstrap";

export default function Accordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Personal Data
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Please Fill all Nesscessary Information required
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <PersonalData />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Work Experience
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Past Jobs and Role Undertaken
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Work />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Certification
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Upload CV, and Cover Letter
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Upload />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Education
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Institutions Attended
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Education />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Websites</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Websites />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Button
        type="submit"
        class="pull-right"
        style={{ marginLeft: "45%", marginTop: "5rem" }}
      >
        Submit
      </Button>
    </div>
  );
}
