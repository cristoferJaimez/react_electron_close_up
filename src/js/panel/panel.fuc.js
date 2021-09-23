import { Table } from "@material-ui/core";

const XLSX = require("xlsx");

export default async function Read(file) {
  document.getElementById("loading").innerHTML = "cargando archivo...";

  let leer = new FileReader();
  leer.readAsArrayBuffer(file);
  leer.onload = await function (e) {
    //console.log(leer.result);
    let data = new Uint8Array(leer.result);
    //console.log(data);
    let wb = XLSX.read(data, { type: "array" });
    let ws = wb.Sheets[wb.SheetNames[0]];
    let sheet = XLSX.utils.sheet_to_json(ws, { header: 1 });
    //console.log(sheet);
    document.getElementById("loading").innerHTML = " ";
    //localStorage.setItem('table_file', JSON.stringify(sheet))
    Table_(sheet);
    return sheet;
  };
}

// construir tabla
async function Table_(sheet) {
  const rows = [];
  await sheet.map((val, i, arr) => {
    rows.push(val);
  });

  const row_title = [];
  const row_content = [];
  // titulos de tabla
  rows[0].map((val, i, arr) => {
    row_title.push({
      title: val,
      field: i,
    });
  });

 //filas set de datos
  
  console.log(row_title);
}
