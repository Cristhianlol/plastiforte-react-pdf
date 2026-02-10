export const comparativeData = {
  titulo: "CUADRO COMPARATIVO EVALUACIÓN DE COTIZACIÓN",
  subtitulo: "Procesos de Adquisiciones",

  header: {
    codigo: "ADQ-CC-001",
    version: "1.0",
  },

  generales: {
    departamento: "Compras",
    descripcion: "Adquisión de materiales para proyecto hidráulico",
    tipoCompra: "Insumos",
    pedidoCompra: "PC-2026-015",
  },

  items: [
    {
      item: "1",
      cantidad: 100,
      unidad: "UND",
      detalle: "Tubería PVC 4”",
      proveedores: [
        {
          nombre: "Proveedor A",
          cantidad: 100,
          costoUnitario: 10,
          costoTotal: 1000,
          observaciones: "Entrega rápida",
        },
        {
          nombre: "Proveedor B",
          cantidad: 100,
          costoUnitario: 9.5,
          costoTotal: 950,
          observaciones: "Menor costo",
        },
                {
          nombre: "Proveedor C",
          cantidad: 100,
          costoUnitario: 10,
          costoTotal: 1000,
          observaciones: "Entrega rápida",
        },
                {
          nombre: "Proveedor D",
          cantidad: 100,
          costoUnitario: 10,
          costoTotal: 1000,
          observaciones: "Entrega rápida",
        },
      ],
    },
  ],

  comparativa: [
    {
      proveedor: "Proveedor C",
      total: 1000,
      logistica: 120,
      precioAlm: 1120,
      fechaEntrega: "10 días",
      incoterm: "DAP",
      pago: "30 días",
    },
        {
      proveedor: "Proveedor D",
      total: 1000,
      logistica: 120,
      precioAlm: 1120,
      fechaEntrega: "10 días",
      incoterm: "DAP",
      pago: "30 días",
    },
        {
      proveedor: "Proveedor A",
      total: 1000,
      logistica: 120,
      precioAlm: 1120,
      fechaEntrega: "10 días",
      incoterm: "DAP",
      pago: "30 días",
    },
    {
      proveedor: "Proveedor B",
      total: 950,
      logistica: 150,
      precioAlm: 1100,
      fechaEntrega: "15 días",
      incoterm: "DAP",
      pago: "Contado",
    },
  ],

  recomendacion: {
    opcion: "Proveedor B",
    justificacion: "Mejor precio total y condiciones aceptables",
    precioFinal: 1100,
  },

  aprobantes: [
    {
    elaboradoPor: "Juan Pérez",
    cargo: "Analista de Compras",
    fecha: "04/11/2026",
    },
        {
    elaboradoPor: "Juan Pérez 2",
    cargo: "Analista de Compras 2",
    fecha: "04/11/2026",
    },
    {
    elabradoPor:"Gabriela Miranda Garcia",
    cargo: "Responzable de importaciones",
    fecha:"04/11/2026",
    },
        {
    elabradoPor:"Gabriela Miranda Garcika",
    cargo: "Responzable de importaciones",
    fecha:"04/11/2026",
    }
  ],
};
