import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 8,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },

  // ENCABEZADO
  headerSection: {
    marginBottom: 10,
    border: "1px solid #000",
  },

  titleBlock: {
    backgroundColor: "#D5E8F0",
    padding: 8,
    textAlign: "center",
    borderBottom: "1px solid #000",
  },

  mainTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },

  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
  },

  metadataGrid: {
    padding: 5,
  },

  metadataRow: {
    flexDirection: "row",
    borderBottom: "1px solid #ccc",
  },

  metadataCell: {
    flex: 1,
    padding: 4,
    borderRight: "1px solid #ccc",
  },

  fullWidthRow: {
    flexDirection: "row",
    padding: 4,
    gap: 10,
  },

  label: {
    fontSize: 7,
    fontWeight: "bold",
    marginBottom: 2,
  },

  value: {
    fontSize: 8,
  },

  // SECCIÓN GENERAL
  section: {
    marginBottom: 8,
    border: "1px solid #000",
  },

  row: {
    flexDirection: "row",
    borderBottom: "1px solid #ccc",
  },

  cell: {
    flex: 1,
    padding: 5,
    borderRight: "1px solid #ccc",
    fontSize: 8,
  },

  labelCell: {
    backgroundColor: "#F0F0F0",
    fontWeight: "bold",
    fontSize: 7,
  },

  // TABLA COMPARATIVA
  tableContainer: {
    marginBottom: 10,
    border: "1px solid #000",
  },

  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid #ccc",
  },

  tableHeader: {
    backgroundColor: "#D5E8F0",
    fontWeight: "bold",
  },

  tableCell: {
    padding: 5,
    borderRight: "1px solid #ccc",
    fontSize: 8,
    justifyContent: "center",
  },

  // Anchos de columnas
  itemCol: {
    width: "6%",
  },

  proveedorCol: {
    width: "20%",
  },

  precioCol: {
    width: "12%",
  },

  cantidadCol: {
    width: "10%",
  },

  totalCol: {
    width: "12%",
  },

  lugarCol: {
    width: "15%",
  },

  tiempoCol: {
    width: "12%",
  },

  pagoCol: {
    width: "13%",
  },

  // DATOS LOGÍSTICOS
  logisticsGrid: {
    marginBottom: 8,
    border: "1px solid #000",
  },

  logisticsRow: {
    flexDirection: "row",
    borderBottom: "1px solid #ccc",
  },

  logisticsCell: {
    flex: 1,
    padding: 5,
    borderRight: "1px solid #ccc",
  },

  checkboxRow: {
    marginTop: 2,
    fontSize: 7,
  },

  // JUSTIFICACIÓN
  justificationSection: {
    marginBottom: 10,
    padding: 8,
    border: "1px solid #000",
    backgroundColor: "#FFFACD",
  },

  // FIRMAS
  signaturesSection: {
    border: "1px solid #000",
    padding: 8,
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    backgroundColor: "#D5E8F0",
    padding: 4,
  },

  signaturesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },

  signatureBlock: {
    flex: 1,
    alignItems: "center",
    border: "1px solid #ccc",
    padding: 5,
  },

  signatureBox: {
    width: "100%",
    height: 40,
    border: "1px solid #000",
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  signatureLabel: {
    fontSize: 7,
    color: "#666",
  },

  signerName: {
    fontSize: 8,
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
  },

  signerRole: {
    fontSize: 7,
    marginBottom: 5,
    textAlign: "center",
  },

  dateBox: {
    width: "100%",
    height: 20,
    border: "1px solid #000",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  dateLabel: {
    fontSize: 7,
    color: "#666",
  },
  checkboxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 2,
  },

  checkbox: {
    fontSize: 7,
    marginRight: 10,
  },
});