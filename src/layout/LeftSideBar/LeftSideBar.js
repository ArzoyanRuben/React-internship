import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./LeftSideBar.css";
import { navItems } from "../../constants/navItems.constant";
import SideBarItem from "../../components/SideBarItem/SideBarItem";
import { Link } from "react-router-dom";
import { useState } from "react";

const { v4: uuidv4 } = require("uuid");

export default function LeftSideBar() {
  return (
    <nav className="nav">
      <ul className="nav-items">
        {(function printNavItems(items) {
          let result = [];
          for (let i = 0; i < items.length; i++) {
            if (items[i].subItems) {
              result.push(
                <Accordion>
                  <Link to={items[i].path}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon/>}
                      aria-controls="panel1a-content"
                      
                    >
                      <Typography>{items[i].description}</Typography>
                    </AccordionSummary>
                  </Link>
                  <AccordionDetails>
                    {printNavItems(items[i].subItems).map((item) => {
                      return <Typography>{item}</Typography>;
                    })}
                  </AccordionDetails>
                </Accordion>
              );
            } else
              result.push(
                <SideBarItem
                  description={items[i].description}
                  key={uuidv4()}
                  path={items[i].path}
                />
              );
          }
          return result;
        })(navItems)}
      </ul>
    </nav>
  );
}
