import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./Layout/Navbar/Navbar.js";
import Home from "./Pages/Home/Home.js";
import Notfound from "./Pages/Notfound.js";
import Footer from "./Layout/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
