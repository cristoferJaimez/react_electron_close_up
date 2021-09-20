import userModel from "../../models/tbl_close_up_usuarios.model";
import preUsersModel from "../../models/tbl_close_up_usuarios_pre_registro.model";
import colombiaModel from "../../models/tbl_panel_colombia.model";
import zonaModel from "../../models/tbl_panel_zona_influencia.model";

const Query = {
  users: async () => {
    return await userModel.find();
  },

  preUsers: async () => {
    return await preUsersModel.find();
  },

  colombia: async () => {
    return await colombiaModel.find();
  },

  zonaInfluencia: async () => {
    return await zonaModel.find();
  },
};

export default Query;
