import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { statesData } from "../utils/allstatesdata";
import { countries } from "../utils/countries";
// import SuccessModal from "./success-modal";

interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  stateOfOrigin: string;
  skills: string[];
  about: string;
}

const skillOptions = [
  "Charismatic community organizer",
  "I am a Philanthropist",
  "Motivational Speaker",
  "Passionate about ending poverty",
  "I lived in and/or love S.E Nigeria",
  "I am a Faith Leader in my community",
  "I'm an Aid Worker",
  "I'm a people person!",
];

const VolunteerForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VolunteerFormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  //   const [showModal, setShowModal] = useState(false);

  const onSubmit: SubmitHandler<VolunteerFormData> = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://dipf-backend.onrender.com/api/v1/members",
        // "http://localhost:8080/api/v1/members",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const res = await response.json();
      if (res.message.toLowerCase().includes("created")) {
        reset();
        // setShowModal(true);
        alert("Thank you for registering! Kindly check your email inbox!!");
        return;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:p-8 p-2 mt-5 sm:mt-0"
        data-aos="zoom-in"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-1 font-medium">First name</label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              placeholder="John"
              className="w-full border rounded-full px-4 py-2"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Last name</label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Smith"
              className="w-full border rounded-full px-4 py-2"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Enter email address"
              className="w-full border rounded-full px-4 py-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              placeholder="Your phone number"
              className="w-full border rounded-full px-4 py-2"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Address</label>
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              placeholder="Enter your address"
              className="w-full border rounded-full px-4 py-2"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">City</label>
            <input
              type="text"
              {...register("city", { required: "City is required" })}
              placeholder="Enter your city"
              className="w-full border rounded-full px-4 py-2"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Zip code</label>
            <input
              type="text"
              {...register("zipCode", { required: "Zip code is required" })}
              placeholder="Enter your zip code"
              className="w-full border rounded-full px-4 py-2"
            />
            {errors.zipCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.zipCode.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Country of Residence
            </label>
            <select
              {...register("country", { required: "Country is required" })}
              className="w-full border rounded-full px-4 py-2"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">State of Origin</label>
            <select
              {...register("stateOfOrigin", {
                required: "State of origin is required",
              })}
              className="w-full border rounded-full px-4 py-2"
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
        </div>

        <div className="mt-10">
          <p className="font-semibold mb-2">
            What skills will you bring to the team?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {skillOptions.map((skill, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={skill}
                  {...register("skills", {
                    validate: (value) =>
                      value.length > 0 || "At least one skill must be selected",
                  })}
                  className="form-checkbox w-4 h-4 accent-[#b58825]"
                />
                <span>{skill}</span>
              </label>
            ))}
          </div>
          {errors.skills && (
            <p className="text-red-500 text-sm mt-1">{errors.skills.message}</p>
          )}
        </div>

        <div className="mt-10">
          <p className="font-semibold mb-2">A little more about yourself</p>
          <textarea
            placeholder="Write here..."
            rows={8}
            {...register("about", {
              required: "This field is required",
              minLength: {
                value: 20,
                message: "Please write at least 20 characters",
              },
            })}
            className="w-full border p-2 resize-none"
          ></textarea>
          {errors.about && (
            <p className="text-red-500 text-sm mt-1">{errors.about.message}</p>
          )}
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="bg-[#7f571c] text-white px-10 py-2 rounded-full hover:bg-[#926014] transition cursor-pointer flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
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
            {isSubmitting ? "Joining..." : "Get Involved"}
          </button>
        </div>
      </form>
      {/* {showModal && <SuccessModal text="Kindly check your inbox!!!" />} */}
    </>
  );
};

export default VolunteerForm;
