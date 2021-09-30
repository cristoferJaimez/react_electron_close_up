import { Link } from "react-router-dom";
import MaterialTable from "material-table";

function File_Proccess() {
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
      title: "NOMBRE A COMPARAR",
      field: "name_2",
    },

    {
      title: "ESTADO",
      field: "estado",
    },
  ];

  //orden de tareas
  const arr_contenido = JSON.parse(localStorage.getItem("row_content_file"));
  //console.log(list_order);

  // contenido del documento a comparar
  const arr_list = JSON.parse(localStorage.getItem("list_order_file_"));
  //console.log(content_doc);

  let array_result_file = [];
  let row_one = arr_list[0].id;
  let row_two = arr_list[1].id;
  let name_1 = "";
  let name_2 = "";
  let estado = "";
  let id_ = "";

  return (
    <div className="">
      {arr_contenido.map((val, i, arr) => {
        let arr_nombres = [];
        let res = "";
        let acom = 0;
        if (i === 0 || val[row_one] === undefined) {
        } else {
          let nombre = val[row_one].split(" ");
          let nombre_ = val[row_two].split(" ");

          nombre.map((vala, ia, ara) => {
            nombre_.map((valb, ib, arrb) => {
              if (valb.toUpperCase().startsWith(`${vala.toUpperCase()}`)) {
                acom = acom + 1;
              }
            });
          });
          if (acom >= 3) {
            res = "COINCIDE";
          }else if(acom === 2){
            res = "REVISAR";
          } else  {
            res = "NO ES IGUAL";
          }

          id_ = i;
          name_1 = val[row_one];
          name_2 = val[row_two];
          estado = res;

          array_result_file.push({
            name_1: name_1,
            name_2: name_2,
            estado: estado,
            id_: id_,
          });
        }
      })}

      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_result_file}
        style={{ fontSize: "0.7em" }}
        title="CRUCE DE FICHERO MEDICO"
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          exportAllData: true,
        }}
        localization={{ header: { actions: "Acciones" } }}
      />
      <Link to="/fichero_">
        {" "}
        <button> inici </button>
      </Link>
    </div>
  );
}

export default File_Proccess;
