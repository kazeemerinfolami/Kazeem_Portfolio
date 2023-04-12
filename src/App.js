import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ContactPage from "./Pages/contactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
