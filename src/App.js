import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home.js';
import Login from './pages/login/Login.js';
import SignUp from './pages/SignUp/SignUp.js';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/ContextReducer/ContextReducer.js';
import MyOrders from './pages/MyOrders/MyOrders.js';
import About from './pages/AboutUs/About.js';

function App() {
  return (
    <CartProvider>
    <Router >
       <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<SignUp/>} />
        <Route exact path='/myOrderData' element={<MyOrders/>} />
        <Route exact path='/about' element={<About/>} />
       </Routes>
    </Router>
    </CartProvider>
  )
}

export default App;
