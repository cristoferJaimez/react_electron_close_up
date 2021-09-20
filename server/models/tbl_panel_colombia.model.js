"use strict";

import { Schema, model } from "mongoose";

const tbl_panel_colombia = Schema(
  {
    Nombre_del_Medico_CA: String,
    CODIGO_DE_CIUDAD_y_NUMERO_MEDICO_CB: String,
    Codigo_de_Ciudad_y_Codigo_de_Medico_Audi_CC: String,
    Numero_de_Medico_UNICO_POR_CIUDAD_CD: String,
    Nombre_del_Medico_CE: String,
    Codigo_de_Ciudad_y_Nombre_del_Medico_CF:String,
    Codigo_de_Ciudad_y_Nombre_del_Medico_Arreglado_CG: String,
    Codigo_de_Pais_CH: Number,
    Matricula1_CI: String,
    COD_CIUDAD_CJ: Number,
    Localidad_CK: String,
    CIUDAD_CL: String,
    Codigo_de_Medico_audi_CM: String,
    Nombre_del_Medico_arreglado_CN: String,
    Nombre_del_Medico_CO: String,
    Numero_de_Medico_UNICO_POR_CIUDAD_CP: String,
    Domicilio_CQ: String,
    DIR_HOMOLOGADA_CR: String,
    COD_CIUDAD_CS: Number,
    Localidad_CT: String,
    Barrio_Municipio1_CU: String,
    Telefono_CV: String,
    Codigo_Postal_CW: String,
    ESPECIALIDAD_ABRE_1_CX: String,
    ESPECIALIDAD_ABRE_2_CY: String,
    ESPECIALID_CZ: String,
    Especialidad_CAA: String,
    Fecha_Alta_CAB: String,
    Fecha_Modificacion_CAC: String,
    ID_de_Medico_Unico_CAD: String,
    Apellido_Paterno_CAE: String,
    Apellido_Materno_CAF: String,
    Nombres_CAG: String,
    Sexo_del_Medico_CAH: String,
    E_mail_CAI: String,
    Direccion2_CAJ: String,
    FechRevisionDom_CAK: String,
    Activo_CAL: String,
    Cdg_Utc_CAM: String,
    Desc_Utc_CAN: String,
    ESTADO_CAO : String,
  },
  {
    timestamps: true,
  }
);

export default model("tbl_panel_colombia", tbl_panel_colombia);
