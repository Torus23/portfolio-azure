import { useState } from "react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import React from "react";
import {Document,Page, pdfjs} from "react-pdf";
import cv from '../../Images/CV.pdf'
import 'react-pdf/dist/Page/TextLayer.css';
import { Button } from "@chakra-ui/react";
import BeatLoader from "react-spinners/BeatLoader";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    '/node_modules/react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


const CV=()=>{
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
      const onDownload = () => {
        const link = document.createElement("a");
        link.download = `CV.pdf`;
        link.href = "././Images/CV.pdf";
        link.click();
      };
    return(
        
        <div className="main-container">
            <Document file ={cv} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
               
            </Document>
            <Button                 
                colorScheme='blue'
                spinner={<BeatLoader size={8} color='white' />} 
                onClick={onDownload}
                >Download CV</Button>
        </div>
    )
} 

export default CV