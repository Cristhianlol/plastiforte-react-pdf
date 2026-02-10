import { Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesComparative";
import { comparativeData } from "../constants/comparativeData";

const ComparativeEvaluationPDF = () => {
  // CORRECCIÓN: Obtener proveedores únicos de comparativa
  const proveedores = comparativeData.comparativa.map(comp => comp.proveedor);

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        {/* ================= HEADER ================= */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.headerTitle}>
              CUADRO COMPARATIVO EVALUACIÓN DE COTIZACIÓN
            </Text>
            <Text style={styles.headerSub}>PROCESOS DE ADQUISICIONES</Text>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, { flex: 1 }]}>
              <Text>Código: {comparativeData.header.codigo}</Text>
            </View>
            <View style={[styles.cell, { flex: 1 }]}>
              <Text>Versión: {comparativeData.header.version}</Text>
            </View>
          </View>
        </View>

        {/* ================= DATOS GENERALES ================= */}
        <Text style={styles.sectionTitle}>Datos Generales</Text>

        <View style={styles.row}>
          <View style={[styles.cell, { flex: 1 }]}>
            <Text>Departamento solicitante</Text>
          </View>
          <View style={[styles.cell, { flex: 2 }]}>
            <Text>{comparativeData.generales.departamento}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.cell, { flex: 1 }]}>
            <Text>Descripción general de la compra</Text>
          </View>
          <View style={[styles.cell, { flex: 2 }]}>
            <Text>{comparativeData.generales.descripcion}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.cell, { flex: 1 }]}>
            <Text>Tipo de compra</Text>
          </View>
          <View style={[styles.cell, { flex: 2 }]}>
            <Text>{comparativeData.generales.tipoCompra}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.cell, { flex: 1 }]}>
            <Text>Pedido de compra N°</Text>
          </View>
          <View style={[styles.cell, { flex: 2 }]}>
            <Text>{comparativeData.generales.pedidoCompra}</Text>
          </View>
        </View>

        {/* ================= TABLA PRINCIPAL ================= */}
        <Text style={styles.sectionTitle}>Detalle de Ítems y Ofertas</Text>

        {/* HEADER TABLA - UNIFICADO EN UNA SOLA FILA */}
        <View style={styles.row}>
          {/* Columnas fijas de la izquierda */}
          <View style={{ width: 270, flexDirection: "row" }}>
            <View style={[styles.cell, styles.cellHeader, { width: 40 }]}>
              <Text>Item</Text>
            </View>
            <View style={[styles.cell, styles.cellHeader, { width: 40 }]}>
              <Text>Cant.</Text>
            </View>
            <View style={[styles.cell, styles.cellHeader, { width: 40 }]}>
              <Text>Unid.</Text>
            </View>
            <View style={[styles.cell, styles.cellHeader, { width: 150 }]}>
              <Text>Detalle</Text>
            </View>
          </View>

          {/* Columnas dinámicas por proveedor */}
          {proveedores.map((proveedor, i) => (
            <View key={i} style={{ width: 160 }}>
              {/* Nombre del proveedor */}
              <View style={[styles.cell, styles.cellHeader, { borderBottomWidth: 1, borderBottomColor: "#bdc3c7" }]}>
                <Text>{proveedor}</Text>
              </View>
              {/* Subcolumnas */}
              <View style={{ flexDirection: "row" }}>
                <View style={[styles.cell, styles.cellHeader, { width: 40 }]}>
                  <Text>Cant</Text>
                </View>
                <View style={[styles.cell, styles.cellHeader, { width: 40 }]}>
                  <Text>C.Unit</Text>
                </View>
                <View style={[styles.cell, styles.cellHeader, { width: 40 }]}>
                  <Text>Total</Text>
                </View>
                <View style={[styles.cell, styles.cellHeader, { width: 40 }]}>
                  <Text>Obs</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* FILAS POR ITEM */}
        {comparativeData.items.map((item, idx) => (
          <View style={styles.row} key={idx}>
            <View style={[styles.cell, { width: 40 }]}>
              <Text>{item.item}</Text>
            </View>
            <View style={[styles.cell, { width: 40 }]}>
              <Text>{item.cantidad}</Text>
            </View>
            <View style={[styles.cell, { width: 40 }]}>
              <Text>{item.unidad}</Text>
            </View>
            <View style={[styles.cell, { width: 150 }]}>
              <Text>{item.detalle}</Text>
            </View>

            {/* CORRECCIÓN: Mapear según el orden de proveedores de comparativa */}
            {proveedores.map((nombreProveedor, i) => {
              // Buscar la oferta de este proveedor para este item
              const oferta = item.proveedores.find(
                (p) => p.nombre === nombreProveedor
              ) || {
                cantidad: "-",
                costoUnitario: "-",
                costoTotal: "-",
                observaciones: "-",
              };

              return (
                <View key={i} style={{ width: 160, flexDirection: "row" }}>
                  <View style={[styles.cell, { width: 40 }]}>
                    <Text>{oferta.cantidad}</Text>
                  </View>
                  <View style={[styles.cell, { width: 40 }]}>
                    <Text>{oferta.costoUnitario}</Text>
                  </View>
                  <View style={[styles.cell, { width: 40 }]}>
                    <Text>{oferta.costoTotal}</Text>
                  </View>
                  <View style={[styles.cell, { width: 40 }]}>
                    <Text>{oferta.observaciones}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        ))}

        {/* ================= EVALUACIÓN POR PROVEEDOR ================= */}
        <Text style={styles.sectionTitle}>Evaluación de Proveedores</Text>

        <View style={{ flexDirection: "row", gap: 6 }}>
          {comparativeData.comparativa.map((prov, i) => (
            <View key={i} style={{ flex: 1 }}>
              <View style={[styles.cell, styles.cellHeader]}>
                <Text>{prov.proveedor}</Text>
              </View>

              <View style={styles.cell}>
                <Text style={{ fontWeight: "bold" }}>Total:</Text>
                <Text>{prov.total}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={{ fontWeight: "bold" }}>
                  Logísticos Asociados:
                </Text>
                <Text>{prov.logistica}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={{ fontWeight: "bold" }}>
                  Precio ALM Plastiforte:
                </Text>
                <Text>{prov.precioAlm}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={{ fontWeight: "bold" }}>Fecha de entrega:</Text>
                <Text>{prov.fechaEntrega}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={{ fontWeight: "bold" }}>Incoterm:</Text>
                <Text>{prov.incoterm}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={{ fontWeight: "bold" }}>
                  Condiciones de pago:
                </Text>
                <Text>{prov.pago}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* ================= FIRMAS ================= */}
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
          {comparativeData.aprobantes.map((aprobante, index) => (
            <View key={index} style={styles.signature}>
              <View style={styles.signatureLine}></View>
              <Text style={styles.signatureLabel}>Firma</Text>
              <Text style={styles.signatureName}>
                {aprobante.elaboradoPor || aprobante.elabradoPor}
              </Text>
              <Text style={styles.signatureCargo}>{aprobante.cargo}</Text>
              <Text style={styles.signatureFecha}>{aprobante.fecha}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ComparativeEvaluationPDF;