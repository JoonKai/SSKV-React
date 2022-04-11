import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './screens/Home';
import Cost from './screens/Cost';
import Mocvd from './screens/Mocvd';
import Measurement from './screens/Measurement';
import Test from './screens/Test';
import NavBarElements from './components/NavBar/NavBarElements';


function App() {
  return (
    <Router>
      <NavBarElements/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cost" element={<Cost/>}/>
        <Route path="/Mocvd" element={<Mocvd/>}/>
        <Route path="/Test" element={<Test/>}/>
        <Route path="/Measurement" element={<Measurement/>}/>
      </Routes>
    </Router>
  );
}

export default App;
