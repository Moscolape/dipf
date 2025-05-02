import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { logo } from "../constants/assets";
import { useForm } from "react-hook-form";
import { statesData } from "../utils/statesdata";
import FloatingInput from "./floating-input";

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
  jambSlip: File;
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
    formState: { errors },
  } = useForm<JambScholarshipFormData>();

  const stateOrigin = watch("stateOfOrigin");
  const stateSchool = watch("schoolState");

  const onSubmit = async (data: JambScholarshipFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "jambSlip") {
        formData.append("jambSlip", value[0]); // Append file
      } else {
        formData.append(key, value as string);
      }
    });

    try {
      // Dummy API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", Object.fromEntries(formData.entries()));
      alert("Application submitted successfully!");
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageWrapper>
      <div className="relative flex flex-col justify-center items-center my-5 p-4">
        {/* Top-Right Watermark */}
        <img
          src={logo}
          alt="watermark"
          className="absolute top-0 right-10 w-64 opacity-50 pointer-events-none z-0"
        />

        {/* Bottom-Right Watermark */}
        <img
          src={logo}
          alt="watermark"
          className="absolute bottom-0 right-10 w-64 opacity-50 pointer-events-none z-0 -mb-28 sm:mb-0"
        />

        {/* Bottom-Right Watermark */}
        <img
          src={logo}
          alt="watermark"
          className="absolute bottom-[40%] right-[30%] w-128 opacity-10 pointer-events-none z-30"
        />

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-3xl bg-white bg-opacity-90 sm:p-6 py-6 sm:rounded-lg sm:shadow-md font-Montserrat mt-20">
          <h2 className="text-lg sm:text-3xl font-bold mb-10 text-center">
            DIPF JAMB Scholarship Application
          </h2>
          <p className="mb-5">
            <b>N.B:</b> Entering inacurate information or uploading a photo of
            your result slip that isn't very clear could lead to your
            disqualification.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
            <select
              {...register("sex", { required: "Sex is required" })}
              className="w-full py-3 border-b-2 outline-none placeholder:text-gray-400"
            >
              <option value="">Select Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.sex && <p className="text-red-500">{errors.sex.message}</p>}
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
              <p className="text-red-500">{errors.stateOfOrigin.message}</p>
            )}
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
              <p className="text-red-500">{errors.lgaOfOrigin.message}</p>
            )}
            <select
              {...register("jambExamState", {
                required: "We need to know this!",
              })}
              className="w-full py-3 border-b-2 outline-none placeholder:text-gray-400"
            >
              <option value="">In Which State Did You Write Your JAMB?</option>
              {Object.keys(statesData).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.jambExamState && (
              <p className="text-red-500">{errors.jambExamState.message}</p>
            )}
            <FloatingInput
              label="Secondary school you graduated from"
              name="secondarySchool"
              type="text"
              register={register}
              error={errors.secondarySchool}
            />
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
              <p className="text-red-500">{errors.schoolState.message}</p>
            )}
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
              <p className="text-red-500">{errors.schoolLga.message}</p>
            )}
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
            <label className="block text-sm font-medium text-gray-700">
              Upload Original JAMB Result Slip (Image only)
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("jambSlip", {
                required:
                  "You must upload a clear photo of your Original JAMB Result Slip",
              })}
              className="w-full py-3 border-b-2 outline-none placeholder:text-gray-400"
            />
            {errors.jambSlip && (
              <p className="text-red-500 text-sm mt-1">
                {errors.jambSlip.message}
              </p>
            )}

            <div className="sm:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="bg-[#7f571c] text-white px-6 py-2 rounded hover:bg-[#926014] transition cursor-pointer"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default JambScholarshipForm;
