"use strict";

import { Schema, model } from "mongoose";

const tbl_panel_zona_influencia = Schema(
  {
    departamento: String,
    cod_ciud: Number,
    region: String,
    zona_de_influencia: String,
    cod_ciud: Number,
    ciud_zona: String,
    zona: String,
    departamento_ok: String,
  },
  {
    timestamps: true,
  }
);

export default model("tbl_panel_zona_influencia", tbl_panel_zona_influencia);
