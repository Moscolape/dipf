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
const Scholarships = lazy(() => import("./pages/scholarships"));
const Contact = lazy(() => import("./pages/contact"));
const Impact = lazy(() => import("./pages/impact"));
const Members = lazy(() => import("./pages/members"));
const Pillars = lazy(() => import("./pages/pillars"));
const Login = lazy(() => import("./pages/login"));

const Membership = lazy(() => import("./components/membership"));

const ScholarshipBeneficiaries = lazy(
  () => import("./components/scholarship-beneficiaries")
);
const ScholarshipBeneficiaries2023 = lazy(
  () => import("./components/2023-beneficiaries")
);
const ScholarshipBeneficiaries2024 = lazy(
  () => import("./components/2024-beneficiaries")
);
const ScholarshipBeneficiaries2025 = lazy(
  () => import("./components/2025-beneficiaries")
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
const Jamb = lazy(() => import("./components/events/jamb"));

const Dashboard = lazy(() => import("./components/dashboard"));
const Applicants = lazy(() => import("./components/applicants"));
const ApplicantDetails = lazy(() => import("./components/applicant-details"));
const DIPF2023 = lazy(() => import("./components/dipf-2023"));
const DIPF2024 = lazy(() => import("./components/dipf-2024"));
const DIPF2025 = lazy(() => import("./components/dipf-2025"));
const DIPF2026 = lazy(() => import("./components/dipf-2026"));
const DIPF2027 = lazy(() => import("./components/dipf-2027"));

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
          <Route path="/bout" element={<About />} />
          <Route path="/vents" element={<Events />} />
          <Route path="/nitiatives" element={<Scholarships />} />
          <Route path="/ontact" element={<Contact />} />
          <Route path="/mpact" element={<Impact />} />
          <Route path="/embers" element={<Members />} />
          <Route path="/embership" element={<Membership />} />
          <Route path="/illars" element={<Pillars />} />
          <Route
            path="/ogin"
            element={isMobile ? <MobileWarning /> : <Login />}
          />

          {/* Protect Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/ashboard" element={<Dashboard />} />
            <Route path="/pplicants" element={<Applicants />} />
            <Route path="/pplicants/:id" element={<ApplicantDetails />} />
            <Route
              path="/023-southeast-dipf-scholarships-for-js1-students"
              element={<DIPF2023 />}
            />
            <Route
              path="/024-southeast-dipf-scholarships-for-js1-students"
              element={<DIPF2024 />}
            />
            <Route
              path="/025-southeast-dipf-scholarships-for-js1-students"
              element={<DIPF2025 />}
            />
            <Route
              path="/026-southeast-dipf-scholarships-for-js1-students"
              element={<DIPF2026 />}
            />
            <Route
              path="/027-southeast-dipf-scholarships-for-js1-students"
              element={<DIPF2027 />}
            />
          </Route>

          <Route
            path="/vents/a-tribute-to-a-life-of-impact-chief-anaeliaku-na-ekwulobia"
            element={<Tribute />}
          />
          <Route
            path="/vents/highlights-from-one-of-anambras-most-remarkable-hospital-launches"
            element={<Hospital />}
          />
          <Route
            path="/vents/high-chief-dr-sir-darlington-nwabunike-wins-the-sun-humanitarian-service-personality-of-the-year-2024-award"
            element={<Personality />}
          />
          <Route
            path="/vents/de-imperial-philanthropic-family-showing-love-to-chief-emeka-ikes-his-20th-wedding-anniversary"
            element={<Anniversary />}
          />
          <Route
            path="/vents/de-imperial-philanthropic-familys-2023-agm-event-in-pictures"
            element={<Agm2023 />}
          />
          <Route
            path="/vents/don-teka-appreciated-de-imperial-family-with-n30million-at-the-agm-2023"
            element={<Teka />}
          />
          <Route
            path="/vents/agbalanze-onyekachukwu-and-mighty-mighty-na-umuchu-supported-chico-ezeani-with-n10million-each"
            element={<Agbalanze />}
          />
          <Route
            path="/vents/ndeli-knighted-de-imperial-familys-president"
            element={<Ndeli />}
          />
          <Route
            path="/vents/annual-general-meeting-2023-elevation-night-2023"
            element={<Elevation />}
          />
          <Route
            path="/vents/tertiary-education-support-funds-to-top-performers-in-jamb-2025"
            element={<Jamb />}
          />

          <Route
            path="/nitiatives/de-imperial-philanthropic-family-grants-scholarship-to-250-southeast-students"
            element={<ScholarshipBeneficiaries />}
          />
          <Route
            path="/nitiatives/de-imperial-philanthropic-family-grants-scholarship-to-250-southeast-students/2023-beneficiaries"
            element={<ScholarshipBeneficiaries2023 />}
          />
          <Route
            path="/nitiatives/de-imperial-philanthropic-family-grants-scholarship-to-250-southeast-students/2024-beneficiaries"
            element={<ScholarshipBeneficiaries2024 />}
          />
          <Route
            path="/nitiatives/de-imperial-philanthropic-family-grants-scholarship-to-250-southeast-students/2025-beneficiaries"
            element={<ScholarshipBeneficiaries2025 />}
          />
          <Route
            path="/nitiatives/de-imperial-philanthropic-family-scholarship-for-2025-top-jamb-performers"
            element={<JambScorersBeneficiaries />}
          />
          <Route
            path="/nitiatives/de-imperial-philanthropic-family-scholarship-for-2025-top-jamb-performers/register"
            element={<JambScholarshipForm />}
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
