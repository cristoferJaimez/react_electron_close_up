import { Link } from "react-router-dom";
import MaterialTable from "material-table";

function City_Medic() {
  const columns = [
    {
      title: "id",
      field: "id_",
      type: "numeric",
    },

    {
      title: "N° LINEA/ NOMBRE DEL MEDICO ",
      field: "name_1",
    },

    {
      title: "CODIGO DE CIUDAD",
      field: "codigo",
    },

    {
      title: "CONCATENADO",
      field: "concatenado",
    },
  ];

  //orden de tareas
  const arr_ciudades_codigo = JSON.parse(
    localStorage.getItem("array_ciudades_ok")
  );
  //console.log(list_order);

  // contenido del documento a comparar
  const arr_nom_medico = JSON.parse(localStorage.getItem("array_names_ok"));
  //console.log(content_doc);

  let array_names_y_codigo_resultado = [];

  return (
    <div>
      <h1>Concatenar Ciudad + Nombre</h1>
      <br/>
      {arr_ciudades_codigo.map((val, i, arr) => {
        arr_nom_medico.map((nom, inom, arrnom) => {
          if (val.id_ === nom.id_) {
            array_names_y_codigo_resultado.push({
              id_: val.id_,
              name_1: nom.name_2,
              codigo: val.ciudad+"/"+val.codigo,
              concatenado: val.codigo + "" + nom.name_2,
            });
          }
        });
      })}

      {localStorage.setItem(
        "array_con_cod_name_ok",
        JSON.stringify(array_names_y_codigo_resultado)
      )}

      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_names_y_codigo_resultado}
        style={{ fontSize: "0.7em" }}
        title="CONCATENAR COD. CIUDAD & MEDICO"
        options={{ actionsColumnIndex: -1 }}
        localization={{ header: { actions: "Acciones" } }}
      />
      
      <hr />
      <div className="right">
        <Link to="/search_names">
          <button className="btn"> <span className="arrow_">❰</span> Anterior</button>
        </Link>
        <Link to="/final_medic">
          <button  className="btn">Continuar <span className="arrow">❯</span></button>
        </Link>

      </div>
      <hr />

    </div>
  );
}
export default City_Medic;
