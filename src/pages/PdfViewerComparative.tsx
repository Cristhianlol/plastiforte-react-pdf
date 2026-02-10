import { PDFViewer } from "@react-pdf/renderer";
import ComparativeEvaluationPDF from "../pdf/ComparativeEvaluationPDF";

const PdfViewerComparative = () => (
  <PDFViewer style={{ width: "100%", height: "100vh" }}>
    <ComparativeEvaluationPDF />
  </PDFViewer>
);

export default PdfViewerComparative;
