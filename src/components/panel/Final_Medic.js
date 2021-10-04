import { Link } from "react-router-dom";
import MaterialTable from "material-table";

import "../../css/loading.css";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

function Final_Medic() {
  const GET_DATA_BASE_COLOMBIA = gql`
    {
      colombia {
        _id
        Codigo_de_Ciudad_y_Codigo_de_Medico_Audi_CC
        Codigo_de_Ciudad_y_Nombre_del_Medico_Arreglado_CG
        Nombre_del_Medico_CO
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA_BASE_COLOMBIA);
  if (loading)
    return (
      <p className="line-1 anim-typewriter">
        Analizando Datos.....................
      </p>
    );
  if (error) return `${error} `;

  //console.log(data);

  const columns = [
    {
      title: "id",
      field: "id_",
      type: "numeric",
    },

    {
      title: "CODIGO UNICO",
      field: "codigo_unico",
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
  ];

  //console.log(list_order);

  // contenido del documento a comparar
  const arr_nom = JSON.parse(localStorage.getItem("array_con_cod_name_ok"));
  //console.log(content_doc);
  let array_N_A = [];
  let array_medicos_final = [];
  let codigo_medico = "";
  let observacion = "";
  let rechazado_medico = "";
  let nombre_medico = "";
  let res = "";

  console.log("db load...");
  return (
    <div>
      {arr_nom.map((val, i, arr) => {
        let valor = val.concatenado;
        let valor_ = "";
        let valor_if_ = "";
        if (valor != null) {
          valor_if_ = valor.split(" ").join("");
        }
        data.colombia.map((valc, ic, arrc) => {
          valor_ = valc.Codigo_de_Ciudad_y_Nombre_del_Medico_Arreglado_CG;
          if (valor_ != null) {
            let valor_if__ = valor_.split(" ").join("");

            if (valor_if_.includes(valor_if__)) {
              codigo_medico = valc.Codigo_de_Ciudad_y_Codigo_de_Medico_Audi_CC;
              nombre_medico = valc.Nombre_del_Medico_CO;
              rechazado_medico = "NO";
              observacion = "MEDICO VALIDO";
              res = true;
            } else if (!valor_if_.includes(valor_if__)) {
            }
          } else {
          }
        });

        if (!nombre_medico || res != true) {
          nombre_medico = "N/A";
          rechazado_medico = "SI";
          observacion = "MEDICO NO VALIDO";
          codigo_medico = "N/A";
          array_N_A.push({
            id_: val.id_,
            name_1: val.concatenado,
          });
        }

        array_medicos_final.push({
          id_: val.id_,
          codigo_unico: codigo_medico,
          name_1: val.concatenado,
          rechazado: rechazado_medico,
          observacion: observacion,
          nom_medico: nombre_medico,
        });

        res = false;
      })}

      {
        // guardar datos en local storage
        (localStorage.setItem(
          "06array_name_concatenado_ok",
          JSON.stringify(array_medicos_final)
        ),
        localStorage.setItem("array_N_A", JSON.stringify(array_N_A)))
      }

      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_medicos_final}
        style={{ fontSize: "0.7em" }}
        title="MEDICO FINAL (A)"
        options={{ actionsColumnIndex: -1 }}
        localization={{ header: { actions: "Acciones" } }}
      />
      <Link to="/city_medic">
        {" "}
        <button>Prev... </button>
      </Link>
      <Link to="/final_medic_two">
        <button>Continuar... </button>
      </Link>
    </div>
  );
}
export default Final_Medic;
