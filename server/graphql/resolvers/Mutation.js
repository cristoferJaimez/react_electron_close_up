import userModel from "../../models/tbl_close_up_usuarios.model";
import preUsersModel from "../../models/tbl_close_up_usuarios_pre_registro.model";
import colombiaModel from "../../models/tbl_panel_colombia.model";

const Mutation = {

  //CREAR DATO DB COLOMBIA
  async createDBcolombia(_, { input }) {
    const newdbColombia = new colombiaModel(input);
    return await newdbColombia.save();
  },

  //crear datos de usuario
  async createUser(_, { input }) {
    const newUser = new userModel(input);
    return await newUser.save();
  },

  //crear usuario para autorizar registro del mismo funcion admin
  async createrPreUser(_, { input }) {
    const newPreUser = new preUsersModel(input);
    return await newPreUser.save();
  },
};

export default Mutation;
