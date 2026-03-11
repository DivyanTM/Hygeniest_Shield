import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './Pages/home';
import AboutUs from "./Pages/about";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}