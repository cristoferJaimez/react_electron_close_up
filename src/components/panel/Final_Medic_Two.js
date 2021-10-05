import { Link } from "react-router-dom";
import MaterialTable from "material-table";

import "../../css/loading.css";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

function Final_Medic_Two() {
  const GET_DATA_BASE_COLOMBIA = gql`
    {
      colombia {
        _id
        COD_CIUDAD_CJ
        Localidad_CK
        CIUDAD_CL
        Nombre_del_Medico_CO
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
        Analizando Datos N/A.....................
      </p>
    );
  if (error) return `${error} `;

  //console.log(data);

  const columns = [
    {
      title: "CODIGO CIUDAD",
      field: "codigo_ciudad",
    },
    {
      title: "CIUDAD",
      field: "ciudad",
    },
    {
      title: "LOCALIDAD",
      field: "localidad",
    },

    {
      title: "CODIGO/NOMBRE DEL MEDICO (inicial) ",
      field: "name_1",
    },

    {
      title: "CODIGO/NOMBRE DEL MEDICO (final) ",
      field: "name_2",
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
  const arr_nom = JSON.parse(localStorage.getItem("array_N_A"));
  //console.log(content_doc);
  let array_medicos_final = [];
  let nom_et_1 = "";
  let nom_et_2 = "";
  let res = "";
  let nom_medico_ = "";
  let nom_medico_final = "";
  let localidad = "";
  let ciudad = "";
  let observacion = "";
  let rechazado = "";
  let codigo_ciudad = "";
  let codigo_unico = "";
  let valor_ = "";

  console.log("db load...");
  return (
    <div>

      {arr_nom.map((val, i, arr) => {
        let name_ = val.name_1.substr(2);

        data.colombia.map((valc, ic, arrc) => {
          let valor_ = valc.Codigo_de_Ciudad_y_Nombre_del_Medico_Arreglado_CG;

          if (valor_ != null) {
            let name_if = name_.split(" ").sort().join("");
            let nama_co_if = valor_.split(" ").sort().join("");

            if (nama_co_if.includes(name_if)) {
              nom_medico_final =
                valc.Codigo_de_Ciudad_y_Nombre_del_Medico_Arreglado_CG;
              rechazado = "NO";
              observacion = "MEDICO VALIDO";
              res = true;
              codigo_ciudad = valc.COD_CIUDAD_CJ
              nom_medico_ = valc.Nombre_del_Medico_CO;
              localidad = valc.Localidad_CK;
              ciudad = valc.CIUDAD_CL
            }
          }
        });

        if (res === false || res == "") {
          nom_medico_final = "N/A";
          localidad = "N/A";
          ciudad = "N/A";
          codigo_ciudad = "N/A";
          rechazado = "SI";
          nom_medico_ = "N/A";
          codigo_unico = "N/A";

          observacion = "MEDICO NO VALIDO";
        }

        array_medicos_final.push({
          name_1: val.name_1,
          nom_medico: nom_medico_,
          codigo_ciudad: codigo_ciudad,
          localidad: localidad,
          ciudad: ciudad,
          codigo_ciudad: codigo_ciudad,
          name_2: nom_medico_final,
          rechazado: rechazado,
          observacion: observacion,
        });

        res = false;
      })}

      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_medicos_final}
        style={{ fontSize: "0.7em" }}
        title="MEDICO FINAL (B)"
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          exportAllData: true,
        }}
        localization={{ header: { actions: "Acciones" } }}
      />
      <Link to="/search_names">
        {" "}
        <button>Prev... </button>
      </Link>
      <Link to="/final_medic_two">
        <button>Continuar... </button>
      </Link>
    </div>
  );
}
export default Final_Medic_Two;
