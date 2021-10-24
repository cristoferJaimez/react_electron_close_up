import userModel from "../../models/tbl_close_up_usuarios.model";
import preUsersModel from "../../models/tbl_close_up_usuarios_pre_registro.model";
import colombiaModel from "../../models/tbl_panel_colombia.model";
import labsModel from "../../models/tbl_panel_maestro_labs.model";
import productModel from "../../models/tbl_panel_maestro_productos.model";
import apellidoModel from "../../models/tbl_panel_maestro_apellidos.model";
import ficheroColombiaModel from "../../models/tbl_fichero_colombia";
import ficheroPoolModel from "../../models/tbl_fichero_pool";


const Mutation = { 

  //CREAR DATO DB COLOMBIA
  async createDBcolombia(_, { input }) {
    const newdbColombia = new colombiaModel(input);
    return await newdbColombia.save();
  },

  //CREAR DATO DB COLOMBIA FCHERO
  async createDBcolombiaFichero(_, { input }) {
    const newdbColombiaFichero = new ficheroColombiaModel(input);
    return await newdbColombiaFichero.save(); 
  },


  //CREAR DATO DB COLOMBIA FCHERO
  async createDBPoolFichero(_, { input }) {
    const newdbPoolFichero = new ficheroPoolModel(input);
    return await newdbPoolFichero.save(); 
  },


   //CREAR DATO DB LABS 
   async createLabs(_, { input }) {
    const newdbLABS = new labsModel(input);
    return await newdbLABS.save();
  },


  //crear producto para filtro
  async createProducts(_, { input }) {
    const newdbProduc = new productModel(input);
    return await newdbProduc.save();
  },


  //CRUD
  //crear apellido para filtro
  async createApellido(_, { input }) {
    const newdbapellido = new apellidoModel(input);
    return await newdbapellido.save();
    
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
