import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Data } from './components/Data';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Data/>}/>
    </Routes>
   </Router>
  );
}

export default App;
