import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroupExample from './utils/cards';
import Add from './utils/add';
import {connectToMetamask, switchToHederaNetworkethers} from './utils/metamaskService'
import { Form } from 'react-bootstrap';
import { ethers } from "ethers";



function App() {

  return (
   <>
      <button className="connect-btn" onClick={() => switchToHederaNetworkethers(ethers)}>
      Connect to Metamask
    </button>
    <div className="headline" >
      <b>HELP</b>
    </div>
      <p>- fundraiser organization</p>
    <GroupExample className="card"></GroupExample>
    <Add ></Add>
    {/* <img width="100" height="100" className="add-btn" src="https://img.icons8.com/plasticine/100/plus-math.png" alt="plus-math"/> */}
   </>
  );
}


export default App;
