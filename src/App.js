//import logo from './logo.svg';
import "./App.css";
import { Switch, Route} from "react-router-dom"


//componentes
//sign]_In
import SignIn from "./components/sign_in/Sign_In"
//navBar
import NavBar from "./components/navBar/NavBar"
//conection
import ConectionStatus from "./components/conectionStatus/ConectionStatus"
import Menu from "./components/menu/Menu"
//moludos Panel
import Panel from "./components/panel/Panel"

//modulo base de datos
import DataBase from "./components/dataBase/DataBase";

function App() {
  return (
    <div>
      <ConectionStatus />
      <Menu/>
      <Switch>
        <Route path="/" component={SignIn} exact ></Route>
        <Route path="/fichero_"  component={ NavBar }  ></Route>
        <Route path="/panel" component={Panel}></Route>
        <Route path="/database" component={DataBase}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
