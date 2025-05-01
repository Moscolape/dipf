import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Events = lazy(() => import("./pages/events"));
const Contact = lazy(() => import("./pages/contact"));
const Impact = lazy(() => import("./pages/impact"));
const Members = lazy(() => import("./pages/members"));
const Pillars = lazy(() => import("./pages/pillars"));


function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="w-8 h-8 border-4 border-[#be202f] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/members" element={<Members />} />
          <Route path="/pillars" element={<Pillars />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
