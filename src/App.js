import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroupExample from './utils/cards';
import {switchToHederaNetworkethers} from './utils/metamaskService';
import { ethers } from "ethers";
import ModalForm from './utils/addNewModal';


function viewModalform(){
  return(
    <>
      <ModalForm></ModalForm>
    </>
  )
}

function App() {

  return (
   <>
      <button className="connect-btn" onClick={() => switchToHederaNetworkethers(ethers)}>
      Connect to Metamask
    </button>
    <div className="headline" >
      <b>Lets Help</b>
    </div>
      <p>- fundraiser organization</p>
    <GroupExample className="card"></GroupExample>
    <ModalForm />
   </>
  );
}


export default App;
