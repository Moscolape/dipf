import PageWrapper from "../components/pageWrapper";
import { useEffect, useState } from "react";
import initializeAOS from "../utils/aos-init";
import { logo } from "../constants/assets";
import { useForm } from "react-hook-form";
import { statesData } from "../utils/allstatesdata";
import FloatingInput from "./floating-input";
import SuccessModal from "./success-modal";

export interface JambScholarshipFormData {
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
  passport: FileList;
  oLevelSlip: FileList;
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
  const [firstPreviewImage, setFirstPreviewImage] = useState<string | null>(
    null
  );
  const [secondPreviewImage, setSecondPreviewImage] = useState<string | null>(
    null
  );
  //   const [thirdPreviewImage, setThirdPreviewImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const stateOrigin = watch("stateOfOrigin");
  const selectedOriginState = statesData.find(
    (state) => state.state === stateOrigin
  );

  const stateSchool = watch("schoolState");
  const selectedSchoolState = statesData.find(
    (state) => state.state === stateSchool
  );

  const onSubmit = async (data: JambScholarshipFormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      // Append all non-file fields
      Object.entries(data).forEach(([key, value]) => {
        if (!["jambSlip", "passport"].includes(key)) {
          formData.append(key, value as string);
        }
      });

      // Append files
      const jambSlip = data.jambSlip?.[0];
      const passport = data.passport?.[0];
      //   const oLevelSlip = data.oLevelSlip?.[0];

      if (!jambSlip || !passport) {
        alert("Please upload all required documents (JAMB slip, passport).");
        return;
      }

      formData.append("jambSlip", jambSlip);
      formData.append("passport", passport);
      //   formData.append("oLevelSlip", oLevelSlip);

      const response = await fetch(
        // "http://localhost:8080/api/v1/register",
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
      console.log(result);
      setShowModal(true);
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
            DIPF 2025 JAMB Scholarship Application
          </h2>
          <p className="mb-5">
            <b>NOTE:</b> Entering inaccurate information or uploading a photo of
            your result slip that isn't very clear could lead to your
            disqualification.
          </p>
          <p className="mb-5">
            <b>NOTE:</b> Proceed with filling the form only if you got <b>250 and
            above</b>.
          </p>

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
              label="Candidate phone number"
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
                {statesData.map(({ state }) => (
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
                {selectedOriginState?.lgas.map((lga) => (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                ))}
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
                {statesData.map(({ state }) => (
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
                {statesData.map(({ state }) => (
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
                {selectedSchoolState?.lgas.map((lga) => (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                ))}
              </select>
              {errors.schoolLga && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.schoolLga.message}
                </p>
              )}
            </div>
            <FloatingInput
              label="JAMB Score (250 and above)"
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
                    setFirstPreviewImage(URL.createObjectURL(file));
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
            {firstPreviewImage && (
              <div>
                <p className="font-medium mb-2">JAMB Slip Preview:</p>
                <img
                  src={firstPreviewImage}
                  alt="Slip Preview"
                  className="w-64 h-64 object-cover"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Clear Passport Photo
              </label>
              <input
                type="file"
                accept=".jpg, .png, .jpeg"
                {...register("passport", {
                  required: "You must upload a clear photo of your face",
                })}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setSecondPreviewImage(URL.createObjectURL(file));
                  }
                }}
                className="w-full py-3 border-b-2 outline-none placeholder:text-gray-400"
              />

              {errors.passport && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.passport.message}
                </p>
              )}
            </div>

            {/* Image Preview */}
            {secondPreviewImage && (
              <div>
                <p className="font-medium mb-2">Passport Preview:</p>
                <img
                  src={secondPreviewImage}
                  alt="Slip Preview"
                  className="w-64 h-64 object-cover"
                />
              </div>
            )}

            <p className="italic mt-10">For more information or any enquiries, contact <b>Dr. Frank Igbojindu</b> (Best Brain Contest) @ <b>0703 055 5581</b></p>
            {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Original O'Level Result Slip (WAEC, NECO, or NABTEB)
              </label>
              <input
                type="file"
                accept=".jpg, .png, .jpeg"
                {...register("oLevelSlip", {
                  required:
                    "You must upload a clear photo of your O'Level Result",
                })}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setThirdPreviewImage(URL.createObjectURL(file));
                  }
                }}
                className="w-full py-3 border-b-2 outline-none placeholder:text-gray-400"
              />

              {errors.oLevelSlip && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.oLevelSlip.message}
                </p>
              )}
            </div> */}

            {/* Image Preview */}
            {/* {thirdPreviewImage && (
              <div>
                <p className="font-medium mb-2">O'Level Result Preview:</p>
                <img
                  src={thirdPreviewImage}
                  alt="Slip Preview"
                  className="w-64 h-64 object-cover"
                />
              </div>
            )} */}

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
