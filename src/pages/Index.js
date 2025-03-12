    // App.js or index.js
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './Home';
    import AboutMe from './AboutMe';
    import ContactPage from './ContactPage';
    
    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      );
    }
    
    export default App;
