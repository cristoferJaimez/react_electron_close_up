//modelos
import tbl_close_up_usuariosModel from "../models/tbl_close_up_usuarios.model";

export const resolvers = {
  Query: {
   async  users() {
     const users = await tbl_close_up_usuariosModel.find()
     return users
    },
    greet(root, { name }) {
      console.log(name);
      return name;
    },
  },

  Mutation: {
    //crear usuarios
    async createUser(_, { input }) {
      const newUser = new tbl_close_up_usuariosModel(input);
      console.log(newUser);
      await newUser.save();
      return newUser;
    },

    //delete usuario
    async deleteUser(_, {_id}){
      const deleteUser = await tbl_close_up_usuariosModel.findByIdAndDelete(_id)
      return deleteUser
    },

    //update usuario
    async updateUser(_, { _id, input}){
      const updateUser = await tbl_close_up_usuariosModel.findByIdAndUpdate(_id, input, {new: true})
      return updateUser
    }
  },
};
