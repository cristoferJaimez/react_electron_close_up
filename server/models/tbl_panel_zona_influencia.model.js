"use strict";

import { Schema, model } from "mongoose";

const tbl_panel_zona_influencia = Schema(
  {
    DEPARTAMENTO: String,
    COD_CIUD: String,
    REGION: String,
    ZONAS_DE_INFLUENCIA: String,
    CIUD_ZONA: String,
    Region_2: String,
    Departamento_2: String,
  },
  {
    timestamps: true,
  }
);

export default model("tbl_panel_zona_influencia", tbl_panel_zona_influencia);
