import './App.css';
import Beneficiary from './components/Beneficiary.js'
import { Route, Routes } from 'react-router-dom'
import Fxcenters from './components/Fxcenter';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route exact path='/' element={<Beneficiary/>} />
        <Route exact path='/fx-center' element={<Fxcenters/>} />
      </Routes>
    </div>
  );
}

export default App;
