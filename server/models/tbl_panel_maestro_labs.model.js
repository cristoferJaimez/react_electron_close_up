"use strict";

import { Schema, model } from "mongoose";

const tbl_panel_maestro_labs = Schema(
  {
    12: String,
    Descripcion_Canal: String,
    Descripcion_CUP: String,
    OBSERVACION: String,
    FALSO_VERDADERO: String,
    B: String,
    IGUAL: String,
  },
  {
    timestamps: true,
  }
);

export default model("tbl_panel_maestro_labs", tbl_panel_maestro_labs);
