import React from "react";
import styles from "./Footer.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Footer() {
    return (
        <>
            <div className={styles.footerWrapper}>
                <div>
                        <div className={styles.title}>FAQs</div>
                        <Accordion className={styles.accordionWrapper}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}
                            className={styles.accordionHeader}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                                Is QTify free to use?
                            </AccordionSummary>
                            <AccordionDetails className={styles.accordionContent}>
                                Yes! It is 100% free, and has 0% ads!
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded className={styles.accordionWrapper}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}
                            aria-controls="panel2-content"
                            id="panel2-header" className={styles.accordionHeader}
                            >
                                Can I download and listen to songs offline?
                            </AccordionSummary>
                            <AccordionDetails className={styles.accordionContent}>
                                Sorry, unfortunately we don't provide the service to download any songs.
                            </AccordionDetails>
                        </Accordion>
                </div>
                
            </div>
            <div className={styles.musicPlayer}>
                <div></div>
                <div></div>
            </div>
        </>
    );
}