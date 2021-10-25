import * as React from "react";
import { Link } from 'react-router-dom'
import "../../css/DataBase.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faEye, faCogs } from "@fortawesome/free-solid-svg-icons";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

function DataBase() {
  //icons
  const db = <FontAwesomeIcon icon={faDatabase} size="sm" />;
  const eye = <FontAwesomeIcon icon={faEye} size="sm" />;

  return (
    <div className="">
      <h3 style={{ fontSize: "2em" }}>Base de Datos</h3>

      <div className="box01">
        <div className="box02">
            <List>
              
              <Link className="link_data" to="/dbColombia">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>{db}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Colombia" secondary="Panel" />
                </ListItem>
              </Link>
             
              <Link className="link_data" to="/dbMasterLabs">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>{db}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Maestro" secondary="Labs" />
                </ListItem>
              </Link>
             
            

              <Link className="link_data" to="/dbZonas">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>{db}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Zonas de Influencia" secondary="Panel" />
                </ListItem>
              </Link>

              <Link className="link_data" to="/dbmasterape">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>{db}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Apellidos" secondary="Panel" />
                </ListItem>
              </Link>
             
              
            </List>
        </div>
        <div className="box03">
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{db}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Base Progress"
                  secondary="Fichero M&eacute;dico"
                />
              </ListItem>{" "}
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{db}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Pool"
                  secondary="Fichero M&eacute;dico"
                />
              </ListItem>
            </List>
        </div>
      </div>
    </div>
  );
}

export default DataBase;
