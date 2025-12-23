import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About"
import MobileWarning from "./MobileWarning"
import Mc from "./Minecraft"
export default function App() {
  return (
    <>
      <MobileWarning />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mc" element={<Mc />} />
      </Routes>
    </>
  );
}

