import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
