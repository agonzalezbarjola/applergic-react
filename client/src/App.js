import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { JwtContext } from "./shared/JwtContext/JwtContext";
import { useState } from "react";
import RegisterPage from "./pages/ResgisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import Rated from "./components/Rated/Rated";
import ScannerPage from "./pages/ScannerPage/ScannerPage";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import NotFound from "./pages/NotFound/NotFound";
import Logout from "./components/Logout/Logout";

function App() {
  const [Jwt, setJwt] = useState(localStorage.getItem("token") || null);
  return (
    <JwtContext.Provider value={{ Jwt, setJwt }}>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<OnboardingPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <HomePage />
                </RequireAuth>
              }
            />
            <Route
              path="/rated"
              element={
                <RequireAuth>
                  <Rated />
                </RequireAuth>
              }
            />
            <Route
              path="/scanner"
              element={
                <RequireAuth>
                  <ScannerPage />
                </RequireAuth>
              }
            />
            <Route
              path="/logout"
              element={
                <RequireAuth>
                  <Logout />
                </RequireAuth>
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;
