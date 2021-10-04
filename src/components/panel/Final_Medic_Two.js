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
      title: "CODIGO UNICO",
      field: "codigo_unico",
    },

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
  let nombre = "";
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
        nom_et_1 = val.name_1.substr(2);
        for (let a = 0; a <= 30; a++) {
          nom_et_2 = a + "" + nom_et_1;
          data.colombia.map((valc, ic, arrc) => {
            valor_ = valc.Codigo_de_Ciudad_y_Nombre_del_Medico_Arreglado_CG;
            if (valor_ != null) {
              let valor_if = valor_.split(" ").join("");
              if (nom_et_2.includes(valor_if)) {
                res = true;
                nombre = valc.Nombre_del_Medico_CO;
                localidad = valc.Localidad_CK;
                codigo_ciudad = valc.COD_CIUDAD_CJ;
                codigo_unico = valc.Codigo_de_Ciudad_y_Codigo_de_Medico_Audi_CC;
                ciudad = val.CIUDAD_CL;
                observacion = "MEDICO VALIDO";
                rechazado = "NO";
              }
            }
          });
        }

        if (!nombre || res != true) {
          res = true;
          nombre = "N/A";
          localidad = "N/A";
          codigo_ciudad = "N/A";
          codigo_unico = "N/A";
          ciudad = "N/A";
          observacion = "MEDICO NO VALIDO";
          rechazado = "SI";
          nombre = val.name_1;
        }

        array_medicos_final.push({
          id_: val.id_,
          codigo_unico: codigo_unico,
          codigo_ciudad: codigo_ciudad,
          localidad: localidad,
          ciudad: ciudad,
          observacion: observacion,
          nom_medico: nombre,
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
