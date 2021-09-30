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
      title: "CODIGO/NOMBRE DEL MEDICO ",
      field: "name_1",
    },

    {
      title: "NOMBRE DEL MEDICO",
      field: "nom_medico",
    },

    {
      title: "RECHAZADO",
      field: "rechazado",
    },

    {
      title: "OBSERVACION",
      field: "observacion",
    },

    {
      title: "MEDICO FINAL",
      field: "medico_final",
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
      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_names_y_codigo_resultado}
        style={{ fontSize: "0.7em" }}
        title="MEDICO FINAL"
        options={{ actionsColumnIndex: -1 }}
        localization={{ header: { actions: "Acciones" } }}
      />
      <Link to="/city_medic">
        {" "}
        <button>Prev... </button>
      </Link>
      <Link to="/city_medic">
        <button>Continuar... </button>
      </Link>
    </div>
  );
}
export default City_Medic;
