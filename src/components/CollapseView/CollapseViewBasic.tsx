import {
    Card,
    CardActions,
    IconButton,
    Collapse,
    CardContent,
    Link,
    Theme,
    ListItem,
    ListItemText,
    AccordionSummary,
    AccordionDetails,
  } from "@mui/material";
  
  import React, { PropsWithChildren } from "react";
  
  import clsx from "clsx";
  import ExpandLess from "@mui/icons-material/ExpandLess";
  import ExpandMore from "@mui/icons-material/ExpandMore";
  import UuiTypography from "../typography";
  import { useTheme } from "@mui/material/styles";
  import Accordion from '@mui/material/Accordion';
  
  interface UuiProductBuilderPageCollapseViewProps {
    title: string;
    subtitle: string;
  }
  

  
  function UuiCollapseViewBasic({
    children,
    title,
    subtitle,
  }: PropsWithChildren<UuiProductBuilderPageCollapseViewProps>) {
  
  
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };
  
    return (
      <Card className="collapesViewContent">
         <Accordion className="accordionBasic" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<i className="ri-arrow-down-s-line"></i>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <UuiTypography sx={{ width: '33%', flexShrink: 0 }}>
            {title}
          </UuiTypography>
          {/* <UuiTypography sx={{ color: 'text.secondary' }}>I am an accordion</UuiTypography> */}
        </AccordionSummary>
        <AccordionDetails>
          <UuiTypography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </UuiTypography>
        </AccordionDetails>
      </Accordion>
      </Card>
    );
  }
  
  export default UuiCollapseViewBasic;

function setOpen(arg0: boolean) {
    throw new Error("Function not implemented.");
}
  
