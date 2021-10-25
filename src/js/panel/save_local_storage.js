import list_table from "./list_table"; 
const fs = require('fs')
const path = require('path')


// construir tabla
export default async function Table_(sheet) {
    const rows = [];
    await sheet.map((val, i, arr) => {
      rows.push(val);
    });
  
    const row_title = [];
    const row_content = [];
  
// titulos de tabla
    rows[0].map((val2, i2, arr) => {
      row_title.push({
        title: val2,
        field: i2,
      });       
    }); 
    
    //filas set de datos
    localStorage.setItem("row_title_file", JSON.stringify(row_title));
    //sessionStorage.setItem("row_title_file", JSON.stringify(row_title))
    
    //contenido del archivo
    rows.forEach((e) => {
        row_content.push(e)
    });
  
    localStorage.setItem("row_content_file",  JSON.stringify(row_content));
    //sessionStorage.setItem("row_content_file", JSON.stringify(row_content))
        
  }
    
  // escuchar lista para procesar
  