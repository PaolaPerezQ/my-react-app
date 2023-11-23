const XLSX = require('xlsx');
const fs = require('fs');

// Ruta al archivo Excel
const excelFilePath = '/Users/pichardoperez/my-react-app/src/services/Convert/origen-datos-junior.xlsx';

// Leer el archivo Excel
const workbook = XLSX.readFile(excelFilePath);

// Obtener la primera hoja del libro de trabajo
const firstSheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[firstSheetName];

// Convertir la hoja de cálculo a un objeto JSON
const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 'A' });

// Guardar el objeto JSON en un archivo
const jsonFilePath = '/Users/pichardoperez/my-react-app/src/services/data.js';
fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

console.log('Conversion completa.');
