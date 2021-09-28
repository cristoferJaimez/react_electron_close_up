import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import MaterialTable from "material-table";
import React, { useState } from "react";

function Search_Products() {
  const columns = [
    {
      title: "id",
      field: "id_",
      type: "numeric",
    },
    {
      title: "N° LINEA/PRODUCTO",
      field: "producto",
    },

    {
      title: "COINCIDENCIA",
      field: "coincidencia",
    },

    {
      title: "ESTADO",
      field: "observacion",
    },
  ];

  const GET_DATA_PRODUCTOS = gql`
    {
      product {
        Producto
        observacion
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA_PRODUCTOS);
  if (loading) return <p>Cargando Productos...</p>;
  if (error) return `${error} `;

  //orden de tareas
  const list_order = JSON.parse(localStorage.getItem("list_order"));
  //console.log(list_order);

  // contenido del documento a comparar
  const content_doc = JSON.parse(localStorage.getItem("row_content_file"));
  //console.log(content_doc);

  let array_productos = [];

  return (
    <div>
      {content_doc.map((val, i, arr) => {
        if (i === 0) {
        } else {
          let observacion = "";
          let producto = "";
          let coincidencia = "";
          let iterador = "";

          data.product.map((va, it, ar) => {
            

            if ( val[list_order[1].id].includes(va.Producto) ) {
              observacion = va.observacion;
              producto = val[list_order[1].id];
              coincidencia = va.Producto;
            } else {
              producto = val[list_order[1].id];
              iterador = i + 1;
            }
          });

          // espacio para guardar zona de influencia no encontrada
          if (!observacion) {
            observacion = " NO ENCONTRADO! ";
            // alert( `zona de influencia no localizada  ${ciudad}` )
          }

          array_productos.push({
            id_: iterador,
            observacion: observacion,
            producto: producto,
            coincidencia: coincidencia,
          });
        }
      })}

      {localStorage.setItem(
        "array_products_ok",
        JSON.stringify(array_productos)
      )}

      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_productos}
        style={{ fontSize: "0.7em" }}
        title="BUSCAR PRODUCTO"
        options={{ actionsColumnIndex: -1 }}
        localization={{ header: { actions: "Acciones" } }}
      />

      <Link to="/panel__">
        {" "}
        <button>Prev... </button>
      </Link>

      <Link to="/search_labs">
        {" "}
        <button>Continuar... </button>
      </Link>
    </div>
  );
}
export default Search_Products;
