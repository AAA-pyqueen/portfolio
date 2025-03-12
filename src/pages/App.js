import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import Dashboards from "./pages/Dashboards";
import Writing from "./pages/Writing";
import Coding from "./pages/Coding";
import Projects from "./pages/Projects";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/dashboards" element={<Dashboards />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/coding" element={<Coding />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
}

export default App;

