import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 9,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 10,
  },
  headerTop: {
    backgroundColor: "#2c3e50",
    padding: 8,
    marginBottom: 5,
  },
  headerTitle: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerSub: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
    marginTop: 2,
  },
  sectionTitle: {
    backgroundColor: "#34495e",
    color: "white",
    padding: 5,
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#bdc3c7",
    minHeight: 25,
  },
  cell: {
    borderRightWidth: 1,
    borderRightColor: "#bdc3c7",
    padding: 4,
    justifyContent: "center",
    fontSize: 8,
  },
  cellHeader: {
    backgroundColor: "#ecf0f1",
    fontWeight: "bold",
    fontSize: 8,
    textAlign: "center",
  },
  signature: {
  alignItems: "center",
  width: 180,
  paddingTop: 5,
},
signatureLine: {
  borderTopWidth: 1,
  borderTopColor: "#000",
  width: "100%",
  marginBottom: 5,
},
signatureLabel: {
  fontSize: 8,
  color: "#666",
  marginBottom: 3,
},
signatureName: {
  fontSize: 9,
  fontWeight: "bold",
  marginBottom: 2,
},
signatureCargo: {
  fontSize: 8,
  marginBottom: 2,
},
signatureFecha: {
  fontSize: 8,
  color: "#666",
},
});