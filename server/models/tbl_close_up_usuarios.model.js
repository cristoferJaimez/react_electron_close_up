"use strict";

import { Schema, model } from "mongoose";

const tbl_close_up_usuarios = Schema(
  {
    nombres: String,
    documento: Number,
    correo: String,
    pw: String,
    rol: String,
    img: String,
  },
  {
    timestamps: true,
  }
);

export default model("tbl_close_up_usuarios", tbl_close_up_usuarios);
