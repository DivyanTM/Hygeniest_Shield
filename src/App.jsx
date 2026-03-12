import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './Pages/home';
import AboutUs from "./Pages/about";
import ContactUSPage from "./Pages/contactus";
import Services from "./Pages/Services";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUSPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}
