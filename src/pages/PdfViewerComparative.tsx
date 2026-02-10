import { PDFViewer } from "@react-pdf/renderer";
import TransportComparativePDF from "../pdf/TransportComparativePDF";

const PdfViewerComparative = () => (
  <PDFViewer style={{ width: "100%", height: "100vh" }}>
    <TransportComparativePDF />
  </PDFViewer>
);

export default PdfViewerComparative;
