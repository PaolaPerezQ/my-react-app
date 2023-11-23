import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import dataTableData from '../../services/data.js';
import empresaData from '../../services/dicionario-de-datos.json';
import './MytreeTable.css'; 

const MyTreeTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const treeData = [];
    empresaData.EMPRESAS.forEach((empresa) => {
      const empresaNode = {
        key: empresa.ID_EMPRESA,
        data: {
          "ID_EMPRESA": empresa.NOMBRE_EMPRESA,
          "ID_AREA": "",
          "RUT_TRABAJADOR": "",
          "NOMBRE_TRABAJADOR": "",
          "EDAD": "",
          "PROFESION": "",
          "CARGO": "",
        },
        children: [],
      };

      empresa.AREAS.forEach((area) => {
        const areaNode = {
          key: area.ID_AREA,
          data: {
            "ID_EMPRESA": "",
            "ID_AREA": area.NOMBRE_AREA,
            "RUT_TRABAJADOR": "",
            "NOMBRE_TRABAJADOR": "",
            "EDAD": "",
            "PROFESION": "",
            "CARGO": "",
          },
          children: [],
        };

        const areaItems = dataTableData.filter((item) => item.A === empresa.ID_EMPRESA && item.B === area.ID_AREA);
        areaItems.forEach((item) => {
          areaNode.children.push({
            key: item.C,
            data: {
              "ID_EMPRESA": "",
              "ID_AREA": "",
              "RUT_TRABAJADOR": item.C,
              "NOMBRE_TRABAJADOR": item.D,
              "EDAD": item.E,
              "PROFESION": item.F || "",
              "CARGO": item.G || "",
            },
          });
        });

        empresaNode.children.push(areaNode);
      });

      treeData.push(empresaNode);
    });

    setData(treeData);
  }, []);

  return (
    <div className="my-treetable">
      <TreeTable value={data} className="responsive-table">
        <Column field="ID_EMPRESA" header="Empresa"  style={{ width: '22%' }}  />
        <Column field="ID_AREA" header="Área" expander />
        <Column field="RUT_TRABAJADOR" header="RUT Trabajador"  />
        <Column field="NOMBRE_TRABAJADOR" header="Nombre Trabajador"  />
        <Column field="EDAD" header="Edad"  />
        <Column field="PROFESION" header="Profesión"  />
        <Column field="CARGO" header="Cargo" />
      </TreeTable>
    </div>
  );
};

export default MyTreeTable;
