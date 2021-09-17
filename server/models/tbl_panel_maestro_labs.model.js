"use strict";

import { Schema, model } from "mongoose";

const tbl_panel_maestro_labs = Schema({
  descripcion_canal: String,
  descripcion_cup: String,
  observacion: String,
  falso: String,
  12: Boolean,
  b: String,
  igual: Boolean,
  sigla: String,
});

model("tbl_panel_maestro_labs", tbl_panel_maestro_labs);
