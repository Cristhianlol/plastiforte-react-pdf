export const transportComparativeData = {
  titulo: "FORMULARIO DE COTIZACIÓN",
  subtitulo: "CUADRO COMPARATIVO",

  datosIniciales: {
    motivo: "POLYWARE SDN.",
    codigo: "PR-ADQ-123-R166",
    version: "5",
    pagina: "Página 1 de 1",
    fechaHora: "14/10/2025 12:16:16",
    codigoPCIME: "PCIME-420",
    incoterm: "FOB KLANG, MALASIA",
  },

  producto: {
    proveedor: "POLYWARE SDN.", // ✅ CAMPO AÑADIDO (CLAVE)
    nombreProductoReferencial: "Servicio de Transporte Internacional",
    tipoTransporte: "Multimodal Aéreo – Terrestre",
    tipoCarga: "Consolidado / Desconsolidado",
    descripcionGeneralServicio:
      "Descripción General del Servicio de Transporte",
    fechaElaboracion: "03/02/2026",
    justificacionObservaciones: "v1",
  },

  cotizaciones: [
    {
      item: 1,
      proveedor: "CORCRES",
      precio: "4,900.00",
      cantidad: "1.00",
      total: "4,900.00",
      lugarEntrega: "Santivañez",
      tiempoEntrega: "7 días",
      formaPago: "Contado",
    },
    {
      item: 2,
      proveedor: "LOGIMEX",
      precio: "5,000.00",
      cantidad: "1.00",
      total: "5,000.00",
      lugarEntrega: "Santivañez",
      tiempoEntrega: "7 días",
      formaPago: "Contado",
    },
    {
      item: 3,
      proveedor: "TRANSPORTE SANTA CRUZ",
      precio: "5,530.00",
      cantidad: "1.00",
      total: "5,530.00",
      lugarEntrega: "Santivañez",
      tiempoEntrega: "7 días",
      formaPago: "Contado",
    },
        {
      item: 3,
      proveedor: "TRANSPORTE SANTA CRUZ",
      precio: "5,530.00",
      cantidad: "1.00",
      total: "5,530.00",
      lugarEntrega: "Santivañez",
      tiempoEntrega: "7 días",
      formaPago: "Contado",
    },
  ],

  datosLogisticos: {
    pesoBruto: "13,222 kg",
    direccionRecojo: "Puerto Iquique",
    fechaRecojo: "07/12/2025",
    volumen: "1 contenedor 40HC",
    tipoDespacho: "Despacho anticipado en Incoterm FOB KLANG",
  },

  seleccion: {
    proveedorElegido: "CORCRES",
    precioElegido: "4,900.00",
    justificacion:
      "Se asigna a este transporte por tener el mejor precio y eficiencia en el servicio.",
  },

  tipoAdquisicion: {
    materiaPrima: false,
    insumos: false,
    accesorios: false,
    tuberias: false,
    servicios: true,
    geomembrana: false,
    maquinaria: false,
    repuestos: false,
    otros: false,
  },

  firmas: {
    elaborado: {
      nombre: "Mercedes Arcienega",
      cargo: "Analista de Importaciones",
      fecha: "",
      firma: "",
    },
    revisado: {
      nombre: "Gabriela Miranda",
      cargo: "Responsable de Importaciones",
      fecha: "",
      firma: "",
    },
    aprobado: {
      nombre: "Zulema Andia",
      cargo: "Jefe Administrativo",
      fecha: "",
      firma: "",
    },
  },
};
