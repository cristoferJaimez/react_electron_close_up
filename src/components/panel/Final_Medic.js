import { Link } from "react-router-dom";
import MaterialTable from "material-table";

import "../../css/loading.css";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Final_Medic_Two from "./Final_Medic_Two";

function Final_Medic() {
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
  `;

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
  return (
    <div>
      {

        arr_nom.map((val, i, arr) => {
          let valor = val.concatenado;
          let valor_ = "";
          let valor_if_ = "";


          if (valor != null) {
            valor_if_ = valor.split(" ").join("");
          }


            data.colombia.find( function(e) {
              valor_ = e.Codigo_de_Ciudad_y_Nombre_del_Medico_Arreglado_CG;


              if (valor_ != null) {
                let valor_if__ = valor_.split(" ").join("");
  
                if (valor_if__.toUpperCase().includes(valor_if_.toUpperCase())) {
                return  codigo_medico = e.Codigo_de_Ciudad_y_Codigo_de_Medico_Audi_CC,
                  nombre_medico = e.Nombre_del_Medico_CO,
                  rechazado_medico = "NO",
                  observacion = "MEDICO VALIDO",
                  res = true
                }
              }
            } )

     /*      data.colombia.find(e => {
            valor_ = e.Codigo_de_Ciudad_y_Nombre_del_Medico_Arreglado_CG;


            if (valor_ != null) {
              let valor_if__ = valor_.split(" ").join("");

              if (valor_if_.toUpperCase().includes(valor_if__.toUpperCase())) {
                codigo_medico = e.Codigo_de_Ciudad_y_Codigo_de_Medico_Audi_CC;
                nombre_medico = e.Nombre_del_Medico_CO;
                rechazado_medico = "NO";
                observacion = "MEDICO VALIDO";
                res = true;
              }
            }


          }); */
          /*     data.colombia.map((valc, ic, arrc) => {
                valor_ = valc.Codigo_de_Ciudad_y_Nombre_del_Medico_Arreglado_CG;
    
    
                if (valor_ != null) {
                  let valor_if__ = valor_.split(" ").join("");
    
                  if (valor_if_.toUpperCase().includes(valor_if__.toUpperCase())) {
                    codigo_medico = valc.Codigo_de_Ciudad_y_Codigo_de_Medico_Audi_CC;
                    nombre_medico = valc.Nombre_del_Medico_CO;
                    rechazado_medico = "NO";
                    observacion = "MEDICO VALIDO";
                    res = true;
    
                  } else if (!valor_if_.includes(valor_if__)) {
                  }
                } else {
                }
              }); */

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
        })


      }






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
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          exportAllData: true,
        }}
        localization={{ header: { actions: "Acciones" } }}
      />

      {/*<Final_Medic_Two datos={data.colombia} />*/}

      <hr />
      <div className="right">
        <Link to="/final_medic">
          <button className="btn"> <span className="arrow_">❰</span> Anterior</button>
        </Link>
        <Link to="/final_medic_two">
          <button className="btn">Continuar <span className="arrow">❯</span></button>
        </Link>

      </div>
      <hr />

    </div>
  );
}
export default Final_Medic;
