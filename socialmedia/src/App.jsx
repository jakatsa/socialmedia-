import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Primary } from "./pages/Primary";
import { Login } from "./pages/Login";
import { NavBar } from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import { CreaterPosts } from "./pages/create-posts/CreatePosts";
function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Primary />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/CreatePosts" element={<CreaterPosts />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
