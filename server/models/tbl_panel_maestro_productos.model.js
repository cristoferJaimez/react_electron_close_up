"use strict";

import { Schema, model } from "mongoose";

const tbl_panel_maestro_productos = Schema(
  {
    Producto: String,
    observacion: String,
  },
  {
    timestamps: true,
  }
);

export default model(
  "tbl_panel_maestro_productos",
  tbl_panel_maestro_productos
);
