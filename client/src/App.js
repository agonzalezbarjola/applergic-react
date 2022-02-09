import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { JwtContext } from "./shared/JwtContext/JwtContext";
import { useState } from "react";
import RegisterPage from "./pages/ResgisterPage/RegisterPage"
import HomePage from "./pages/HomePage/HomePage";
import Rated from "./components/Rated/Rated";

function App() {

  const [Jwt, setJwt] = useState(localStorage.getItem("token") || null);
  return (
    <JwtContext.Provider value={{ Jwt, setJwt }}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<OnboardingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/rated" element={<Rated />} />
          </Routes>
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;
