const XLSX = require("xlsx");

export default async function Read(file) {
  document.getElementById("loading").innerHTML = "cargando archivo...";

  let leer = new FileReader();
  leer.readAsArrayBuffer(file);
  leer.onload = await function (e) {
    console.log(leer.result);
    let data = new Uint8Array(leer.result);
    console.log(data);
    let wb = XLSX.read(data, { type: "array" });
    let ws = wb.Sheets[wb.SheetNames[0]];
    let sheet = XLSX.utils.sheet_to_json(ws, { header: 1 });
    console.log(sheet);
    document.getElementById("wordSpace").innerHTML = sheet;
  document.getElementById("loading").innerHTML = " ";

  };
}
