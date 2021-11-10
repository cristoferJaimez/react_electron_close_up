import { Schema, model } from "mongoose";

const tbl_fichero_pool = Schema(
  {
   Orden: String,
   Cod_Labo: String,
   Laboratorio: String,
   Carga: String,
   F: String,
   Pais: String,
   Cdg_ciudad: String,
   Matricula: String,
   Nombre: String,
   Direccion: String,
   Localidad_Colonia: String,
   Barrio_municipio: String,
   Cpostal: String,
   Esp1: String,
   Esp2:String,
   nro_medico: String
  },
  {
    timestamps: true,
  }
);

export default model("tbl_fichero_pool", tbl_fichero_pool);
