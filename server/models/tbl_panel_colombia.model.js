"use strict";

import { Schema, model } from "mongoose";

const tbl_panel_colombia = Schema(
  {
    nombre_del_medico: String,
    codigo_de_ciudad_y_numero_medico: Number,
    codigo_de_ciudad_y_codigo_medico_audi: Number,
    numero_de_medico_unico_por_ciudad: Number,
    nombre_del_medico: String,
    codigo_de_ciudad_y_nombre_medico: String,
    codigo_de_ciudad_y_nombre_medico_arreglado: String,
    codigo_pais: Number,
    matricula1: Number,
    cod_ciudad: Number,
    localidad: String,
    ciudad: String,
    codigo_medico_audi: Number,
    nombre_del_medico_arreglado: String,
    nombre_del_medico: String,
    numero_medico_unico_por_ciudad: Number,
    domicilio: String,
    dir_homologada: String,
    cod_ciudad: Number,
    Localidad: String,
    barrio_municipio1: String,
    telefono: Number,
    codigo_postal: Number,
    especialidad_abre_1: String,
    especialidad_abre_2: String,
    especialidad: String,
    especialidad_1: String,
    fecha_alta: String,
    fecha_modificacion: String,
    _id_medico_unico: Number,
    apellido_paterno: String,
    apellido_materno: String,
    nombres: String,
    sexo_del_medico: String,
    email: String,
    direccion_2: String,
    fecha_revicion_Dom: String,
    activo: String,
    codigo_utc: Number,
    desc_utc: String,
  },
  {
    timestamps: true,
  }
);

export default model("tbl_panel_colombia", tbl_panel_colombia);
