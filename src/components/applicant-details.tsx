import { useEffect, useState } from "react";
import DashboardWrapper from "./dashboardWrapper";
import { Applicant } from "./applicants";
import { ArrowLeftIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
import initializeAOS from "../utils/aos-init";

const ApplicantDetails = () => {
  const [applicant, setApplicant] = useState<Applicant | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const applicantId = location.pathname.split("/").pop() || "";

  useEffect(() => {
    initializeAOS();
  }, []);

  useEffect(() => {
    const getApplicant = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
            `https://dipf-backend.onrender.com/api/v1/applicants/${applicantId}`,
        //   `http://localhost:8080/api/v1/applicants/${applicantId}`
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to fetch applicants");
        }

        setApplicant(result.applicant);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    getApplicant();
  }, [applicantId]);

  return (
    <DashboardWrapper>
      {isLoading ? (
        <div className="flex items-center justify-center h-[60vh]">
          <div className="w-8 h-8 border-4 border-[#b58825] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="p-5 bg-gray-50 font-Montserrat">
          <Link to={"/applicants"}>
            <div
              className="bg-white p-3 rounded-full hover:scale-120 inline-block mb-3 cursor-pointer"
              title="Back to Applicants"
            >
              <ArrowLeftIcon className="text-black" />
            </div>
          </Link>
          <div className="p-6 rounded-lg shadow bg-white mb-10">
            <h1 className="mb-10 text-2xl font-semibold underline" data-aos="fade-in">
              PERSONAL INFORMATION
            </h1>
            <div className="flex items-start">
              <div className="w-1/3 mr-10">
                <img
                  src={applicant?.passport}
                  alt="passport"
                  className="w-80 h-80 rounded-full object-cover"
                  data-aos="fade-up"
                />
              </div>
              <div className="font-Montserrat grid grid-cols-2 gap-10 w-2/3" data-aos="fade-down">
                <div>
                  <span className="text-sm text-gray-400">NAME</span>
                  <p className="font-semibold">{applicant?.name}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">AGE</span>
                  <p className="font-semibold">{applicant?.age}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">SEX</span>
                  <p className="font-semibold">{applicant?.sex}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">PHONE NUMBER</span>
                  <p className="font-semibold">{applicant?.phone}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">
                    GUARDIAN PHONE NUMBER
                  </span>
                  <p className="font-semibold">{applicant?.guardianPhone}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">STATE OF ORIGIN</span>
                  <p className="font-semibold">{applicant?.stateOfOrigin}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">LGA OF ORIGIN</span>
                  <p className="font-semibold">{applicant?.lgaOfOrigin}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">
                    STATE OF JAMB EXAM
                  </span>
                  <p className="font-semibold">{applicant?.jambExamState}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">
                    SECONDARY SCHOOL OF GRADUATION
                  </span>
                  <p className="font-semibold">{applicant?.secondarySchool}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">SCHOOL'S STATE</span>
                  <p className="font-semibold">{applicant?.schoolState}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">SCHOOL'S LGA</span>
                  <p className="font-semibold">{applicant?.schoolLga}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">JAMB SCORE</span>
                  <p className="font-semibold">{applicant?.jambScore}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">FIRST CHOICE OF INSTITUTION</span>
                  <p className="font-semibold">{applicant?.firstChoice}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">SECOND CHOICE OF INSITUTION</span>
                  <p className="font-semibold">{applicant?.secondChoice}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow bg-white mb-5" data-aos="fade-up">
            <h1 className="mb-5 text-2xl font-semibold underline">
              RESULT UPLOADS
            </h1>
            <div className="flex gap-10 flex-wrap">
              {applicant?.jambSlip && (
                <div data-aos="fade-in">
                  <p className="text-sm text-gray-500 mb-1">JAMB Slip</p>
                  <img
                    src={applicant.jambSlip}
                    alt="JAMB Slip"
                    className="w-60 h-60 object-cover rounded"
                    title="View"
                  />
                  <span
                    onClick={() => setPreviewImage(applicant.jambSlip)}
                    className="text-blue-700 text-sm cursor-pointer hover:underline inline-block mt-2"
                  >
                    View
                  </span>
                </div>
              )}
              {applicant?.oLevelSlip && (
                <div data-aos="fade-out">
                  <p className="text-sm text-gray-500 mb-1">O-Level Result</p>
                  <img
                    src={applicant.oLevelSlip}
                    alt="O-Level Slip"
                    className="w-60 h-60 object-cover rounded"
                    title="View"
                  />
                  <span
                    onClick={() => setPreviewImage(applicant.oLevelSlip)}
                    className="text-blue-700 text-sm cursor-pointer hover:underline inline-block mt-2"
                  >
                    View
                  </span>
                </div>
              )}
            </div>
          </div>
          {previewImage && (
            <div
              className="fixed inset-0 bg-[#000000d8] flex items-center justify-center z-50"
              onClick={() => setPreviewImage(null)}
            >
              <div className="relative">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="max-w-[90vw] max-h-[90vh] rounded-lg"
                />
                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-2 right-2 bg-white hover:bg-gray-100 p-2 rounded-full shadow cursor-pointer"
                >
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </DashboardWrapper>
  );
};

export default ApplicantDetails;
