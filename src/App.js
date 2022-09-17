import "./App.css";
import Home from "./components/Home";
import AppNavbar from "./components/Navbar";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  return (
    <div className="wrapper">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
