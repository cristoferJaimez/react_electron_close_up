import { Link } from "react-router-dom";
import MaterialTable from "material-table";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import "../../css/loading.css";

function Final_Medic_Two() {

  const GET_DATA_BASE_COLOMBIA = gql`
  {
    colombia {
      _id
      Codigo_de_Ciudad_y_Codigo_de_Medico_Audi_CC
      Codigo_de_Ciudad_y_Nombre_del_Medico_Arreglado_CG
      Nombre_del_Medico_CO
      COD_CIUDAD_CJ
      Localidad_CK
      CIUDAD_CL
    }
  }
`


  /* const data = props.datos;
  console.log(data); */
  //console.log(data);

  const { loading, error, data } = useQuery(GET_DATA_BASE_COLOMBIA);
  if (loading)
    return (
      <p className="line-1 anim-typewriter">
        Descargando Base de Datos  por favor espere.
      </p>
    );
  if (error) return `${error} `;

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
  let res = "";
  let nom_medico_ = "";
  let nom_medico_final = "";
  let localidad = "";
  let ciudad = "";
  let observacion = "";
  let rechazado = "";
  let codigo_ciudad = "";
  let codigo_unico = "";

  return (
    <div>
      {arr_nom.map((val, i, arr) => {
        let name_ = val.name_1.substr(2);

        data.colombia.find(function(e){
          let valor_ = e.Codigo_de_Ciudad_y_Nombre_del_Medico_Arreglado_CG;

          if (valor_ != null) {
            let name_if = name_.split(" ").sort().join("");
            let nama_co_if = valor_.split(" ").sort().join("");

            if (nama_co_if.includes(name_if)) {
              nom_medico_final =
                e.Codigo_de_Ciudad_y_Nombre_del_Medico_Arreglado_CG;
              rechazado = "NO";
              observacion = "MEDICO VALIDO";
              res = true;
              codigo_ciudad = e.COD_CIUDAD_CJ;
              nom_medico_ = e.Nombre_del_Medico_CO;
              localidad = e.Localidad_CK;
              ciudad = e.CIUDAD_CL;

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
          headerStyle:{ background: "#ff8d00", color: "#FFF", textAlign: "center "},
          actionsColumnIndex: -1,
          exportButton: true,
          exportAllData: true,
        }}
        localization={{ header: { actions: "Acciones" } }}
      />
     

      <hr />
      <div className="right">
        <Link to="/final_medic">
          <button className="btn"> <span className="arrow_">❰</span> Anterior</button>
        </Link>
        <Link to="/document">
          <button  className="btn">Continuar <span className="arrow">❯</span></button>
        </Link>

      </div>
      <hr />
    </div>
  );
}
export default Final_Medic_Two;
