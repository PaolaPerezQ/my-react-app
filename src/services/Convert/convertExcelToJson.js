const XLSX = require('xlsx');
const fs = require('fs');

const excelFilePath = '/Users/pichardoperez/my-react-app/src/services/Convert/junior-data-origin.xlsx';

const workbook = XLSX.readFile(excelFilePath);

const firstSheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[firstSheetName];

const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 'A' });

const jsonFilePath = '/Users/pichardoperez/my-react-app/src/services/data.js';

fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

// node ...ruta.
console.log('Conversión completa.');
// al covertir el archivo, hay que colocarle al princio, const dataTableData = [
    // al final, export default dataTableData;
    // sino dara problemas...


