import { Schema, model } from "mongoose";

const tbl_close_up_usuarios_pre_registro = Schema(
  {
    correo: {
      type: String,
      require,
    },
    estado: String
  },
  {
    timestamps: true,
  }
);

export default model("tbl_close_up_usuarios_pre_registro", tbl_close_up_usuarios_pre_registro);
