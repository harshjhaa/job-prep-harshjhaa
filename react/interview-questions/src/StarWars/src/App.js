import "./App.css";
import Login from "./pages/Login/login";
import Planet from "./pages/Planet/planet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="planet" element={<Planet />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
