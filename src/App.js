//import logo from './logo.svg';
import "./App.css";
import { Switch, Route} from "react-router-dom"


//componentes
//navBar
import NavBar from "./components/navBar/NavBar"
//conection
import ConectionStatus from "./components/conectionStatus/ConectionStatus"
import Menu from "./components/menu/Menu"
//moludos Panel
import Panel from "./components/panel/Panel"
import Check_Data_Base from "./components/panel/Check_Data_Base";

function App() {
  return (
    <div>
      <ConectionStatus />
      <Menu/>
      <Switch>
        <Route path="/" component={NavBar} exact ></Route>
        <Route path="/fichero_" component={NavBar}  ></Route>
        <Route path="/fichero__" component={NavBar} ></Route>
        <Route path="/panel" component={Panel}></Route>
        <Route path="/check_data_base" component={Check_Data_Base}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
