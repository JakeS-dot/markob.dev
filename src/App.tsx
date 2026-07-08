import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import MobileWarning from "./MobileWarning";
import Mc from "./Minecraft";
import Blog from "./Blog";
import Links from "./Links";
import Rss from "./Rss";
import BlogPost from "./BlogPost";
import NotFound from "./NotFound";
export default function App() {
  return (
    <>
      <MobileWarning />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mc" element={<Mc />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/links" element={<Links />} />
        <Route path="/rss" element={<Rss />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
