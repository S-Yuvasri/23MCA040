//import logo from './logo.svg';
import './App.css';
import './components/avg';
import './components/prime';
function App() {
  return (
    <div>
     Enter the numbers
     <input type='text' id='t1'></input>
     <avg></avg><br></br>
     <button id='b1'>AVG</button>&nbsp;&nbsp;
     <prime></prime>
     <button id='b2'>PRIME</button>&nbsp;&nbsp;
     <fibo></fibo>
     <button id='b3'>FIBO</button>
    </div>
    
  );
}

export default App;