import list_table from "./list_table"; 
// construir tabla
export default async function Table_(sheet) {
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
    localStorage.setItem("row_title_file", JSON.stringify(row_title));
  
    //contenido del archivo
    rows.forEach((e) => {
        row_content.push(e)
    });
  
    localStorage.setItem("row_content_file", JSON.stringify(row_content));
    //list_table();
  
  }
  
  
  
  
  // escuchar lista para procesar
  