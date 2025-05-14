import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/protectedRoutes";
import MobileWarning from "./components/mobile";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Events = lazy(() => import("./pages/events"));
const Initiatives = lazy(() => import("./pages/initiatives"));
const Contact = lazy(() => import("./pages/contact"));
const Impact = lazy(() => import("./pages/impact"));
const Members = lazy(() => import("./pages/members"));
const Pillars = lazy(() => import("./pages/pillars"));
const Login = lazy(() => import("./pages/login"));

const Membership = lazy(() => import("./components/membership"));

const ScholarshipBeneficiaries = lazy(
  () => import("./components/scholarship-beneficiaries")
);
const JambScorersBeneficiaries = lazy(
  () => import("./components/jamb-scorers-beneficiaries")
);
const JambScholarshipForm = lazy(
  () => import("./components/dipf-jamb-scholarship-exam-form")
);

const Tribute = lazy(() => import("./components/events/tribute"));
const Hospital = lazy(() => import("./components/events/hospital"));
const Personality = lazy(() => import("./components/events/personality"));
const Anniversary = lazy(() => import("./components/events/anniversary"));
const Agm2023 = lazy(() => import("./components/events/agm"));
const Teka = lazy(() => import("./components/events/teka"));
const Agbalanze = lazy(() => import("./components/events/agbalanze"));
const Ndeli = lazy(() => import("./components/events/ndeli"));
const Elevation = lazy(() => import("./components/events/elevation"));

const Dashboard = lazy(() => import("./components/dashboard"));
const Applicants = lazy(() => import("./components/applicants"));
const ApplicantDetails = lazy(() => import("./components/applicant-details"));

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="w-8 h-8 border-4 border-[#b58825] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/members" element={<Members />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/pillars" element={<Pillars />} />
          <Route
            path="/login"
            element={isMobile ? <MobileWarning /> : <Login />}
          />


          {/* Protect Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/applicants" element={<Applicants />} />
            <Route path="/applicants/:id" element={<ApplicantDetails />} />
          </Route>


          <Route
            path="/events/a-tribute-to-a-life-of-impact-chief-anaeliaku-na-ekwulobia"
            element={<Tribute />}
          />
          <Route
            path="/events/highlights-from-one-of-anambras-most-remarkable-hospital-launches"
            element={<Hospital />}
          />
          <Route
            path="/events/high-chief-dr-sir-darlington-nwabunike-wins-the-sun-humanitarian-service-personality-of-the-year-2024-award"
            element={<Personality />}
          />
          <Route
            path="/events/de-imperial-philanthropic-family-showing-love-to-chief-emeka-ikes-his-20th-wedding-anniversary"
            element={<Anniversary />}
          />
          <Route
            path="/events/de-imperial-philanthropic-familys-2023-agm-event-in-pictures"
            element={<Agm2023 />}
          />
          <Route
            path="/events/don-teka-appreciated-de-imperial-family-with-n30million-at-the-agm-2023"
            element={<Teka />}
          />
          <Route
            path="/events/agbalanze-onyekachukwu-and-mighty-mighty-na-umuchu-supported-chico-ezeani-with-n10million-each"
            element={<Agbalanze />}
          />
          <Route
            path="/events/ndeli-knighted-de-imperial-familys-president"
            element={<Ndeli />}
          />
          <Route
            path="/events/annual-general-meeting-2023-elevation-night-2023"
            element={<Elevation />}
          />


          <Route
            path="/initiatives/de-imperial-philanthropic-family-grants-scholarship-to-250-southeast-students"
            element={<ScholarshipBeneficiaries />}
          />
          <Route
            path="/initiatives/de-imperial-philanthropic-family-grants-scholarship-to-top-10-jamb-scorers-in-southeast-2025"
            element={<JambScorersBeneficiaries />}
          />
          <Route
            path="/initiatives/de-imperial-philanthropic-family-grants-scholarship-to-top-10-jamb-scorers-in-southeast-2025/register"
            element={<JambScholarshipForm />}
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
