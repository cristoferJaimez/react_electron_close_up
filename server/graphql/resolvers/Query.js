import userModel from '../../models/tbl_close_up_usuarios.model'
import preUsersModel from '../../models/tbl_close_up_usuarios_pre_registro.model'

const Query  = {
    ping(){
        return 'pong!'
    },

    users: async () => {  
      return  await userModel.find()
    },

    preUsers : async () => {
      return await preUsersModel.find()
    }

}

export default Query