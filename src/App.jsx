import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RouteEffects from "./components/RouteEffects";
import AccessibilityPage from "./pages/AccessibilityPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
