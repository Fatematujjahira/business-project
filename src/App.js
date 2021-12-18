import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar.js";
import Home from "./Pages/Home/Home.js";
import Notfound from "./Pages/Notfound.js";
import Footer from "./Layout/Footer/Footer.js";
// import Banner from "./Pages/Banner/Banner.js";
// import Contact from "./Pages/Contact/Contact.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="banner" element={<Banner />} /> */}

        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
