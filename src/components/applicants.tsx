import DashboardWrapper from "./dashboardWrapper";
import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Pagination from "./pagination";

export interface Applicant {
  _id: string;
  name: string;
  age: number;
  sex: string;
  phone: string;
  guardianPhone: string;
  stateOfOrigin: string;
  lgaOfOrigin: string;
  jambExamState: string;
  secondarySchool: string;
  schoolState: string;
  schoolLga: string;
  jambScore: number;
  firstChoice: string;
  secondChoice: string;
  jambSlip: string;
  passport: string;
  oLevelSlip: string;
  createdAt: string;
  updatedAt: string;
}

const Applicants = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchApplicants = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://dipf-backend.onrender.com/api/v1/applicants?sortBy=jambScore&order=${sortOrder}`,
        //   `http://localhost:8080/api/v1/applicants?sortBy=jambScore&order=${sortOrder}`
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to fetch applicants");
        }

        setApplicants(result.applicants);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplicants();
  }, [sortOrder]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentApplicants = applicants.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <DashboardWrapper>
      <div className="w-full m-auto font-Inter p-5">
        <div className="flex items-center justify-end mb-8 mt-4">
          <label className="mr-2 text-sm font-medium">
            Sort by JAMB Score:
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="">Select Order</option>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
        <div className="py-3 px-2 flex items-center bg-gray-300">
          <span className="w-[25%] font-bold">Name</span>
          <span className="w-[25%] font-bold">Phone Number</span>
          <span className="w-[25%] font-bold">JAMB Score</span>
          <span className="w-[15%] font-bold">Applied On</span>
          <span className="w-[10%] font-bold">Actions</span>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-[20vh]">
            <div className="w-8 h-8 border-4 border-[#b58825] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="min-h-[50vh]">
            {currentApplicants.map((applicant, index) => (
              <div
                key={applicant._id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                } py-3 px-2 font-Nunito group`}
              >
                <div className="flex items-center justify-between w-full cursor-pointer transition-all">
                  <span className="w-[25%] text-sm text-[#272525] font-normal group-hover:scale-[1.02]">
                    {applicant.name}
                  </span>
                  <span className="w-[25%] text-sm font-normal group-hover:scale-[1.02]">
                    {applicant.phone}
                  </span>
                  <span className="w-[25%] text-sm font-normal group-hover:scale-[1.02]">
                    {applicant.jambScore}
                  </span>
                  <span className="w-[15%] text-sm font-normal group-hover:scale-[1.02]">
                    {moment(applicant.createdAt).format("LL")}
                  </span>
                  <span className="w-[10%] text-sm text-[#b58825] font-normal">
                    <Link to={`/applicants/${applicant._id}`}>View</Link>
                  </span>
                </div>
              </div>
            ))}

            {/* Pagination goes here */}
            <Pagination
              totalItems={applicants.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </DashboardWrapper>
  );
};

export default Applicants;
