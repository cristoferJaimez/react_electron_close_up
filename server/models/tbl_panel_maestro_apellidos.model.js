import { Schema, model } from "mongoose";

const tbl_panel_maestro_apellidos = Schema(
  {
    APELLIDOS: String
  },
  {
    timestamps: true,
  }
);

export default model("tbl_panel_maestro_apellidos", tbl_panel_maestro_apellidos);
