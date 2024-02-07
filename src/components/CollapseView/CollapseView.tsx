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
  } from "@mui/material";
  import createStyles from "@mui/styles/createStyles";
  import makeStyles from "@mui/styles/makeStyles";
  import React, { PropsWithChildren } from "react";
  
  import clsx from "clsx";
  // import ExpandLess from "@mui/icons-material/ExpandLess";
  // import ExpandMore from "@mui/icons-material/ExpandMore";
  import UuiTypography from "../typography";
  import { useTheme } from "@mui/material/styles";
  // import "./style.scss"
  
  interface UuiProductBuilderPageCollapseViewProps {
    title: string;
    subtitle: string;
  }
  
  
  
  function UuiCollapseView({
    children,
    title,
    subtitle,
  }: PropsWithChildren<UuiProductBuilderPageCollapseViewProps>) {
    // const classes = useStyles();
  
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <Card className="collapseCard">
        <ListItem className="collapseCard__listItem" button onClick={handleClick}>
          <ListItemText
            primary={
              <UuiTypography
                className= "collapseCard__heading Uui-txt--primary Uui-txt-bold"
              >
                {title}
              </UuiTypography>
            }
            secondary={
              <UuiTypography
                className="collapseCard__heading Uui-txt-subtletext"
              >
                {subtitle}
              </UuiTypography>
            }
          />
  
          {open ? <i className="ri-arrow-up-s-line"></i> : <i className="ri-arrow-down-s-line"></i>}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent className="collapseCard__cardContent">{children}</CardContent>
        </Collapse>
      </Card>
    );
  }
  
  export default UuiCollapseView;
  