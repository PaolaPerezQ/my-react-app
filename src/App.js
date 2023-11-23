import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import dataTableData from '/Users/pichardoperez/my-react-app/src/services/data.js';
import empresaData from '/Users/pichardoperez/my-react-app/src/services/dicionario-de-datos.json'; // Reemplaza con la ruta correcta

const MyDataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Combina la información de dataTableData y empresaData utilizando los IDs
    const combinedData = dataTableData.map((item) => {
      const empresaInfo = empresaData.EMPRESAS.find((e) => e.ID_EMPRESA === item.A);
      const areaInfo = empresaInfo ? empresaInfo.AREAS.find((a) => a.ID_AREA === item.B) : null;

      return {
        "ID_EMPRESA": empresaInfo ? empresaInfo.NOMBRE_EMPRESA : "",
        "ID_AREA": areaInfo ? areaInfo.NOMBRE_AREA : "",
        "RUT_TRABAJADOR": item.C,
        "NOMBRE_TRABAJADOR": item.D,
        "EDAD": item.E,
        "PROFESION": item.F || "",
        "CARGO": item.G || "",
      };
    });

    setData(combinedData);
  }, []);

  return (
    <div className="datatable">
      <DataTable value={data} resizableColumns columnResizeMode="fit">
        <Column field="ID_EMPRESA" header="Empresa" />
        <Column field="ID_AREA" header="Área" />
        <Column field="RUT_TRABAJADOR" header="RUT Trabajador" />
        <Column field="NOMBRE_TRABAJADOR" header="Nombre Trabajador" />
        <Column field="EDAD" header="Edad" />
        <Column field="PROFESION" header="Profesión" />
        <Column field="CARGO" header="Cargo" />
      </DataTable>
    </div>
  );
};

export default MyDataTable;