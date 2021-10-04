//import logo from './logo.svg';
import "./App.css";
import { Switch, Route } from "react-router-dom";

//componentes
//sign]_In
//import SignIn from "./components/sign_in/Sign_In";
import Register from "./components/register/Register";
//navBar
import NavBar from "./components/navBar/NavBar";
//conection
import ConectionStatus from "./components/conectionStatus/ConectionStatus";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
//ficheros
import File_ from "./components/files/File_";
import File from "./components/files/File_Proccess";

//moludos Panel
import Panel from "./components/panel/Panel";
import Task from "./components/panel/Task";
import Panel__ from "./components/panel/Panel__";
import Search_Products from "./components/panel/Search_Products";
import Search_Labs from "./components/panel/Search_Labs";
import Search_Names from "./components/panel/Search_Names";
import City_Medic from "./components/panel/City_Medic";
import Final_Medic from "./components/panel/Final_Medic";
import Final_Medic_Two from "./components/panel/Final_Medic_Two";

//listar usuarios ver usuarios editar usuarios por admin
import Users from "./components/users/Users";
//modulo base de datos
import DataBase from "./components/dataBase/DataBase";
import DataBaseColombia from "./components/dataBase/dataBase/DataBaseColombia";
import DataBaseZona from "./components/dataBase/dataBase/DataBaseZona";

// procewso de panel modulo 1

function App() {
  return (
    <div>
      <ConectionStatus />
      <Menu />
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/users" component={Users} exact></Route>
        <Route path="/register" component={Register} exact></Route>

        <Route path="/dbcolombia" component={DataBaseColombia} exact></Route>
        <Route path="/dbzonas" component={DataBaseZona} exact></Route>

        <Route path="/fichero_" component={NavBar}></Route>
        <Route path="/file_" component={File_}></Route>
        <Route path="/file_proccess" component={File}></Route>

        <Route path="/panel" component={Panel}></Route>
        <Route path="/panel__" component={Panel__}></Route>
        <Route path="/task" component={Task}></Route>
        <Route path="/search_products" component={Search_Products}></Route>
        <Route path="/search_labs" component={Search_Labs}></Route>
        <Route path="/search_names" component={Search_Names}></Route>
        <Route path="/city_medic" component={City_Medic}></Route>
        <Route path="/final_medic" component={Final_Medic}></Route>
        <Route path="/final_medic_two" component={Final_Medic_Two}></Route>

        <Route path="/database" component={DataBase}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
