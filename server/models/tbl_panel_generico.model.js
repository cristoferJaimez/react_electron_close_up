"use strict";

import { Schema, model } from "mongoose";

const tbl_panel_generico = Schema(
  {
    n1: String,
    _n1: String,
    tipo: String,
  },
  {
    timestamps: true,
  }
);

export default model("tbl_panel_generico", tbl_panel_generico);
