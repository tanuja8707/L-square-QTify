import React from "react";
import styles from "./Footer.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Footer() {
    return (
    <div className={styles.footerWrapper}>
        <div className={styles.title}>FAQs</div>
        <div className="">
            <Accordion className={styles.accordionWrapper}>
                <AccordionSummary expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}
                className={styles.accordionHeader}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    Is QTify free to use?
                </AccordionSummary>
                <AccordionDetails>
                    Yes! It is 100% free, and has 0% ads!
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                    Can I download and listen to songs offline?
                </AccordionSummary>
                <AccordionDetails>
                    Sorry, unfortunately we don't provide the service to download any songs.
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
    )
}