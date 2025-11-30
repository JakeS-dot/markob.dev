import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About"
import MobileWarning from "./MobileWarning"
export default function App() {
  return (
    <>
      <MobileWarning />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

