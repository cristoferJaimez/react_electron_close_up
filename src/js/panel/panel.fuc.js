import Table_ from "./save_local_storage"; 

const XLSX = require("xlsx");


const path = require('path')

export default async function Read(file) {
  document.getElementById("loading").innerHTML = "cargando archivo...";
  let leer = new FileReader();
  leer.readAsArrayBuffer(file);
  leer.onload = await function (e) {
    //console.log(leer.result);
    let data = new Uint8Array(leer.result);
    //console.log(data);
    let wb = XLSX.read(data, { type: "array" });
    localStorage.setItem('sheet_name', wb.SheetNames)
    let ws = wb.Sheets[wb.SheetNames[0]];
    let sheet = XLSX.utils.sheet_to_json(ws, { header: 1 });
    //console.log(sheet);
    document.getElementById("loading").innerHTML = " ";
    
    //localStorage.setItem('table_file', JSON.stringify(sheet))
          
    Table_(sheet);
  };
}

