const XLSX = require("xlsx");
const fs = require("fs");

export default function xlsxtojson(pathFile) {
     fs.readFile(`${pathFile.file}`, (err, data) => {
         if (err) throw err;
         var workbook = XLSX.read(data, {type: "buffer"});
         const wsname = workbook.SheetNames[0];
         const ws = workbook.Sheets[wsname];
         const datas = XLSX.utils.sheet_to_json(ws);
         return datas
     });     
}