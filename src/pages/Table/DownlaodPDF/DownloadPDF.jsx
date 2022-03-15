import React from 'react'
import { Button } from '@mui/material';
import jsPDF from 'jspdf';
import { PDFLib } from 'pdf-lib';
import { toast, Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../App.css';

export const DownloadPDF = ({ item }) => {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `./${item.ptr_link}`;
        link.href = `./${item.ptr_link}`;
        link.click();
        toast('Downloaded!', {
            position: "top-right",
            pauseOnHover: false,
        });
    };
    const { download, PDFDocument } = PDFLib || {}

    async function modifyPdf() {
        const url = 'https://disclosures-clerk.house.gov/public_disc/ptr-pdfs/2021/20019557.pdf'
        const existingPdfBytes = await fetch(url, { mode: 'no-cors' }).then(res => res.arrayBuffer())
        const pdfDoc = await PDFDocument.load(existingPdfBytes)
        const pdfBytes = await pdfDoc.save();
        download(pdfBytes, "20019557.pdf", "application/pdf");
    }
    return (
        <>
            <Button className="col_hover" onClick={onDownload} variant="contained" color="primary">
                Download
            </Button>
            <ToastContainer theme="dark" transition={Flip} />
        </>
    )
}
