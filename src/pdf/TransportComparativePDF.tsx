import { Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesTransport";
import { transportComparativeData as data } from "../constants/transportComparativeData";

const TransportComparativePDF = () => {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        
        {/* TÍTULO */}
        <View style={styles.titleBlock}>
          <Text style={styles.mainTitle}>{data.titulo}</Text>
          <Text style={styles.subtitle}>{data.subtitulo}</Text>
        </View>

        {/* DATOS DE COMPRA INICIAL */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Datos de Compra Inicial</Text>
          
          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Código:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.datosIniciales.codigo}</Text>
            </View>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Versión:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.datosIniciales.version}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Fecha Hora:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.datosIniciales.fechaHora}</Text>
            </View>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Código PCIME:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.datosIniciales.codigoPCIME}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Motivo:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.datosIniciales.motivo}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Tipo de Carga:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.producto.tipoCarga}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Incoterm:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.datosIniciales.incoterm}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Proveedor:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.producto.proveedor}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Tipo de Transporte:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.producto.tipoTransporte}</Text>
            </View>
          </View>

{/* DESCRIPCIÓN GENERAL DEL SERVICIO */}
<View style={styles.section}>
  <Text style={styles.sectionTitle}>
    Descripción General del Servicio de Transporte
  </Text>

  <View style={styles.row}>
    <View style={[styles.cell, styles.labelCell]}>
      <Text>Descripción:</Text>
    </View>
    <View style={styles.cell}>
      <Text>{data.producto.descripcionGeneralServicio}</Text>
    </View>
  </View>

  <View style={styles.row}>
    <View style={[styles.cell, styles.labelCell]}>
      <Text>Fecha de Elaboración:</Text>
    </View>
    <View style={styles.cell}>
      <Text>{data.producto.fechaElaboracion}</Text>
    </View>
  </View>

  <View style={styles.row}>
    <View style={[styles.cell, styles.labelCell]}>
      <Text>Justificación / Observaciones:</Text>
    </View>
    <View style={styles.cell}>
      <Text>{data.producto.justificacionObservaciones}</Text>
    </View>
  </View>
</View>


          {/* TIPO DE ADQUISICIÓN */}
          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Tipo de Adquisición:</Text>
            </View>
            <View style={styles.cell}>
              <View style={styles.checkboxContainer}>
                <Text style={styles.checkbox}>{data.tipoAdquisicion.materiaPrima ? "☑" : "☐"} Materia Prima</Text>
                <Text style={styles.checkbox}>{data.tipoAdquisicion.insumos ? "☑" : "☐"} Insumos</Text>
                <Text style={styles.checkbox}>{data.tipoAdquisicion.accesorios ? "☑" : "☐"} Accesorios</Text>
                <Text style={styles.checkbox}>{data.tipoAdquisicion.tuberias ? "☑" : "☐"} Tuberías</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Text style={styles.checkbox}>{data.tipoAdquisicion.servicios ? "☑" : "☐"} Servicios</Text>
                <Text style={styles.checkbox}>{data.tipoAdquisicion.geomembrana ? "☑" : "☐"} Geomembrana</Text>
                <Text style={styles.checkbox}>{data.tipoAdquisicion.maquinaria ? "☑" : "☐"} Maquinaria</Text>
                <Text style={styles.checkbox}>{data.tipoAdquisicion.repuestos ? "☑" : "☐"} Repuestos</Text>
                <Text style={styles.checkbox}>{data.tipoAdquisicion.otros ? "☑" : "☐"} Otros</Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Dirección de Recojo:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.datosLogisticos.direccionRecojo}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Tipo de Despacho:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.datosLogisticos.tipoDespacho}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Peso Bruto:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.datosLogisticos.pesoBruto}</Text>
            </View>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Volumen:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.datosLogisticos.volumen}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Fecha de Recojo:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.datosLogisticos.fechaRecojo}</Text>
            </View>
          </View>
        </View>

        {/* TABLA COMPARATIVA */}
        <View style={styles.tableContainer}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <View style={[styles.tableCell, styles.itemCol]}>
              <Text>Item</Text>
            </View>
            <View style={[styles.tableCell, styles.proveedorCol]}>
              <Text>Proveedor</Text>
            </View>
            <View style={[styles.tableCell, styles.precioCol]}>
              <Text>Precio</Text>
            </View>
            <View style={[styles.tableCell, styles.cantidadCol]}>
              <Text>Cantidad</Text>
            </View>
            <View style={[styles.tableCell, styles.totalCol]}>
              <Text>Total</Text>
            </View>
            <View style={[styles.tableCell, styles.lugarCol]}>
              <Text>Lugar de Entrega</Text>
            </View>
            <View style={[styles.tableCell, styles.tiempoCol]}>
              <Text>Tiempo de Entrega</Text>
            </View>
            <View style={[styles.tableCell, styles.pagoCol]}>
              <Text>Forma de Pago</Text>
            </View>
          </View>

          {data.cotizaciones.map((cotizacion, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={[styles.tableCell, styles.itemCol]}>
                <Text>{cotizacion.item}</Text>
              </View>
              <View style={[styles.tableCell, styles.proveedorCol]}>
                <Text>{cotizacion.proveedor}</Text>
              </View>
              <View style={[styles.tableCell, styles.precioCol]}>
                <Text>{cotizacion.precio}</Text>
              </View>
              <View style={[styles.tableCell, styles.cantidadCol]}>
                <Text>{cotizacion.cantidad}</Text>
              </View>
              <View style={[styles.tableCell, styles.totalCol]}>
                <Text>{cotizacion.total}</Text>
              </View>
              <View style={[styles.tableCell, styles.lugarCol]}>
                <Text>{cotizacion.lugarEntrega}</Text>
              </View>
              <View style={[styles.tableCell, styles.tiempoCol]}>
                <Text>{cotizacion.tiempoEntrega}</Text>
              </View>
              <View style={[styles.tableCell, styles.pagoCol]}>
                <Text>{cotizacion.formaPago}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* SELECCIÓN */}
        <View style={styles.section}>
          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Proveedor Elegido:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.seleccion.proveedorElegido}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Precio Elegido:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.seleccion.precioElegido}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.labelCell]}>
              <Text>Justificación y Observaciones Adicionales:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{data.seleccion.justificacion}</Text>
            </View>
          </View>
        </View>

        {/* FIRMAS */}
        <View style={styles.signaturesSection}>
          <Text style={styles.sectionTitle}>Autorizaciones</Text>
          
          <View style={styles.signaturesRow}>
            <View style={styles.signatureBlock}>
              <View style={styles.signatureBox}>
                <Text style={styles.signatureLabel}>FIRMA</Text>
              </View>
              <Text style={styles.signerName}>ELABORADO POR: {data.firmas.elaborado.nombre}</Text>
              <Text style={styles.signerRole}>CARGO: {data.firmas.elaborado.cargo}</Text>
              <View style={styles.dateBox}>
                <Text style={styles.dateLabel}>FECHA</Text>
              </View>
            </View>
            
            <View style={styles.signatureBlock}>
              <View style={styles.signatureBox}>
                <Text style={styles.signatureLabel}>FIRMA</Text>
              </View>
              <Text style={styles.signerName}>REVISADO POR: {data.firmas.revisado.nombre}</Text>
              <Text style={styles.signerRole}>CARGO: {data.firmas.revisado.cargo}</Text>
              <View style={styles.dateBox}>
                <Text style={styles.dateLabel}>FECHA</Text>
              </View>
            </View>
            
            <View style={styles.signatureBlock}>
              <View style={styles.signatureBox}>
                <Text style={styles.signatureLabel}>FIRMA</Text>
              </View>
              <Text style={styles.signerName}>APROBADO POR: {data.firmas.aprobado.nombre}</Text>
              <Text style={styles.signerRole}>CARGO: {data.firmas.aprobado.cargo}</Text>
              <View style={styles.dateBox}>
                <Text style={styles.dateLabel}>FECHA</Text>
              </View>
            </View>
          </View>
        </View>

      </Page>
    </Document>
  );
};

export default TransportComparativePDF;