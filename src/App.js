import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroupExample from './utils/cards';
import Add from './utils/add';

function App() {
  
  return (
   <>
   <button className="connect-btn">Connect to metamask</button>
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
