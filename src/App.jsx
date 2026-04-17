import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Offerings from "./pages/Offerings";
import Solutions from "./pages/Solutions";
import Ventures from "./pages/Ventures";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_22%),radial-gradient(circle_at_top_right,rgba(163,230,53,0.08),transparent_20%),linear-gradient(180deg,#020617_0%,#020817_45%,#020617_100%)]" />
        <div className="absolute left-[-8%] top-[-4%] h-[26rem] w-[26rem] rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="absolute right-[-6%] top-[4%] h-[24rem] w-[24rem] rounded-full bg-lime-300/8 blur-3xl" />
        <div className="absolute left-[28%] top-[22rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[18%] top-[42rem] h-[22rem] w-[22rem] rounded-full bg-sky-400/6 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}