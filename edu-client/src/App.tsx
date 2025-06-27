import './main.scss'
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Features/Register';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}></Route>
        <Route path='/SignUp' element = {<Register/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
