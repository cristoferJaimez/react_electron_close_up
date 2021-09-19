import userModel from "../../models/tbl_close_up_usuarios.model";
import preUsersModel from "../../models/tbl_close_up_usuarios_pre_registro.model";

const Mutation = {
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
