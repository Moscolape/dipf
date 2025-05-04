import PageWrapper from "../components/pageWrapper";
import { useEffect, useState } from "react";
import initializeAOS from "../utils/aos-init";
import { logo } from "../constants/assets";
import { useForm } from "react-hook-form";
import { statesData } from "../utils/statesdata";
import FloatingInput from "./floating-input";
import SuccessModal from "./success-modal";

interface JambScholarshipFormData {
  name: string;
  age: number;
  sex: string;
  phone: string;
  stateOfOrigin: string;
  lgaOfOrigin: string;
  secondarySchool: string;
  schoolState: string;
  schoolLga: string;
  jambScore: number;
  firstChoice: string;
  secondChoice: string;
  jambSlip: FileList;
  guardianPhone: string;
  jambExamState: string;
}

const JambScholarshipForm = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    // setValue,
    formState: { errors },
  } = useForm<JambScholarshipFormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const stateOrigin = watch("stateOfOrigin");
  const stateSchool = watch("schoolState");

  const onSubmit = async (data: JambScholarshipFormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      // Append all form fields except the file
      Object.entries(data).forEach(([key, value]) => {
        if (key !== "jambSlip") {
          formData.append(key, value as string);
        }
      });

      // Check and append file
      const file = data.jambSlip?.[0];

      if (file instanceof File) {
        formData.append("jambSlip", file);
      } else {
        console.error("Invalid or missing file:", data.jambSlip);
        alert("Please upload a valid JAMB slip file.");
        return;
      }

      console.log("Submitting FormData:", [...formData.entries()]);

      //   const response = await fetch("http://localhost:8080/api/v1/register", {
      const response = await fetch(
        "https://dipf-backend.onrender.com/api/v1/register",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Backend Error:", errorData);
        throw new Error(errorData.message || "Submission failed.");
      }

      const result = await response.json();
      setShowModal(true);
      console.log(result);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <div className="relative flex flex-col justify-center items-center my-5 p-4">
        {/* Top-Right Watermark */}
        <img
          src={logo}
          alt="watermark"
          className="absolute top-0 right-10 w-64 sm:opacity-50 opacity-20 pointer-events-none z-0"
        />

        {/* Bottom-Right Watermark */}
        <img
          src={logo}
          alt="watermark"
          className="absolute bottom-0 right-10 w-64 sm:opacity-50 opacity-20 pointer-events-none z-0 -mb-28 sm:mb-0"
        />

        {/* Bottom-Right Watermark */}
        <img
          src={logo}
          alt="watermark"
          className="absolute bottom-[40%] right-[30%] w-128 opacity-5 pointer-events-none z-30"
        />

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-3xl bg-white bg-opacity-90 sm:p-6 py-6 sm:rounded-lg sm:shadow-md font-Montserrat mt-20">
          <h2 className="text-lg sm:text-3xl font-bold mb-10 text-center">
            DIPF JAMB Scholarship Application
          </h2>
          <p className="mb-5">
            <b>NOTE:</b> Entering inaccurate information or uploading a photo of
            your result slip that isn't very clear could lead to your
            disqualification.
          </p>
          <div className="mb-5">
            <p>
              <b>NOTE:</b> You also have to meet the criteria below;
            </p>
            <ul className="list-disc ml-5">
              <li>Must be an Igbo indigene.</li>
              <li>
                Must have schooled and written 2025 JAMB in a Southeastern
                state.
              </li>
              <li>
                Must have selected Southeastern Universities as First and Second
                choice of institution.
              </li>
              <li>
                Must have scored 250 and above in 2025 JAMB UTME Examination.
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <FloatingInput
              label="Name"
              name="name"
              type="text"
              register={register}
              error={errors.name}
            />
            <FloatingInput
              label="Age"
              name="age"
              type="number"
              register={register}
              error={errors.age}
            />
            <div>
              <select
                {...register("sex", { required: "Sex is required" })}
                className="w-full py-3 border-b-2 outline-none placeholder:text-gray-400"
              >
                <option value="">Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.sex && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.sex.message}
                </p>
              )}
            </div>
            <FloatingInput
              label="Your phone number"
              name="phone"
              type="number"
              register={register}
              error={errors.phone}
            />
            <FloatingInput
              label="Parent/Guardian phone number"
              name="guardianPhone"
              type="number"
              register={register}
              error={errors.guardianPhone}
            />
            <div>
              <select
                {...register("stateOfOrigin", {
                  required: "State of Origin is required",
                })}
                className="w-full py-3 border-b-2 outline-none placeholder:text-gray-400"
              >
                <option value="">Select State of Origin</option>
                {Object.keys(statesData).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.stateOfOrigin && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.stateOfOrigin.message}
                </p>
              )}
            </div>
            <div>
              <select
                {...register("lgaOfOrigin", {
                  required: "LGA of Origin is required",
                })}
                className="w-full py-3 border-b-2 outline-none placeholder:text-gray-400"
              >
                <option value="">Select LGA of Origin</option>
                {stateOrigin &&
                  statesData[stateOrigin as keyof typeof statesData]?.map(
                    (lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    )
                  )}
              </select>
              {errors.lgaOfOrigin && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lgaOfOrigin.message}
                </p>
              )}
            </div>
            <div>
              <select
                {...register("jambExamState", {
                  required: "We need to know this!",
                })}
                className="w-full py-3 border-b-2 outline-none placeholder:text-gray-400"
              >
                <option value="">
                  In Which State Did You Write Your JAMB?
                </option>
                {Object.keys(statesData).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.jambExamState && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.jambExamState.message}
                </p>
              )}
            </div>
            <FloatingInput
              label="Secondary school you graduated from"
              name="secondarySchool"
              type="text"
              register={register}
              error={errors.secondarySchool}
            />
            <div>
              <select
                {...register("schoolState", {
                  required: "State of secondary school is required",
                })}
                className="w-full py-3 border-b-2 outline-none placeholder:text-gray-400"
              >
                <option value="">Select State of School</option>
                {Object.keys(statesData).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.schoolState && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.schoolState.message}
                </p>
              )}
            </div>
            <div>
              <select
                {...register("schoolLga", {
                  required: "LGA of secondary school is required",
                })}
                className="w-full py-3 border-b-2 outline-none placeholder:text-gray-400"
              >
                <option value="">Select LGA of School</option>
                {stateSchool &&
                  statesData[stateSchool as keyof typeof statesData]?.map(
                    (lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    )
                  )}
              </select>
              {errors.schoolLga && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.schoolLga.message}
                </p>
              )}
            </div>
            <FloatingInput
              label="JAMB Score"
              name="jambScore"
              type="number"
              register={register}
              error={errors.jambScore}
            />
            <FloatingInput
              label="First Choice of Tertiary Institution"
              name="firstChoice"
              type="text"
              register={register}
              error={errors.firstChoice}
            />
            <FloatingInput
              label="Second Choice of Tertiary Institution"
              name="secondChoice"
              type="text"
              register={register}
              error={errors.secondChoice}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Original JAMB Result Slip (Image only)
              </label>
              <input
                type="file"
                accept=".jpg, .png, .jpeg"
                {...register("jambSlip", {
                  required:
                    "You must upload a clear photo of your Original JAMB Result Slip",
                })}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setPreviewImage(URL.createObjectURL(file));
                  }
                }}
                className="w-full py-3 border-b-2 outline-none placeholder:text-gray-400"
              />

              {errors.jambSlip && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.jambSlip.message}
                </p>
              )}
            </div>

            {/* Image Preview */}
            {previewImage && (
              <div>
                <p className="font-medium mb-2">Image Preview:</p>
                <img
                  src={previewImage}
                  alt="Slip Preview"
                  className="w-64 h-64 object-cover"
                />
              </div>
            )}

            {showModal && <SuccessModal />}

            <div className="sm:col-span-2 flex justify-center mt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#7f571c] text-white px-6 py-2 rounded hover:bg-[#926014] transition cursor-pointer flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed w-full"
              >
                {isSubmitting && (
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                )}
                {isSubmitting ? "Applying..." : "Apply"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default JambScholarshipForm;
