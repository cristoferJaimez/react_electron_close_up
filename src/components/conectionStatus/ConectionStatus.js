import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faLongArrowAltDown , faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import '../../css/ConectionStatus.css'


function ConectionStatus() {

  const db = <FontAwesomeIcon icon={faDatabase}  className="dataBase"/>
  const rowDown = <FontAwesomeIcon icon={faLongArrowAltDown}  className="dataBase"/>
  const rowUp = <FontAwesomeIcon icon={faLongArrowAltUp}  className="dataBase"/>


  return (
      <div className="">
        <h2> estado:  {db}     velocidad subida: { rowUp }   velocidad descarga:{ rowDown } </h2>
      </div>
    );
  }
  
  export default ConectionStatus;