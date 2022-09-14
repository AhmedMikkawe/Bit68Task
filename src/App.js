import "./App.css";
import Home from "./components/Home";
import AppNavbar from "./components/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
