import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Primary } from "./pages/Primary";
import { Login } from "./pages/Login";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Primary />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
