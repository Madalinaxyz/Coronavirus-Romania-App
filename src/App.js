import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home}from '../src/Components/Home/Home'
import {LoginPage} from '../src/Components/LoginPage/LoginPage'
import {Contact} from '../src/Components/Contact/Contact'
import {Register} from  '../src/Components/Register/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
