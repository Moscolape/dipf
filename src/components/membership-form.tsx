import React from "react";

const VolunteerForm: React.FC = () => {
  return (
    <form className="sm:p-8 p-2 mt-5 sm:mt-0" data-aos="zoom-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Row 1 */}
        <div>
          <label className="block mb-1 font-medium">First name</label>
          <input
            type="text"
            placeholder="John Smith"
            className="w-full border rounded-full px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Last name</label>
          <input
            type="text"
            placeholder="Your last name"
            className="w-full border rounded-full px-4 py-2"
          />
        </div>

        {/* Row 2 */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full border rounded-full px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="tel"
            placeholder="Your phone number"
            className="w-full border rounded-full px-4 py-2"
          />
        </div>

        {/* Row 3 */}
        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            className="w-full border rounded-full px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">City</label>
          <input
            type="text"
            placeholder="Enter your city"
            className="w-full border rounded-full px-4 py-2"
          />
        </div>

        {/* Row 4 */}
        <div>
          <label className="block mb-1 font-medium">Zip code</label>
          <input
            type="text"
            placeholder="Enter your zip code"
            className="w-full border rounded-full px-4 py-2"
          />
        </div>
        <div className="">
          <label className="block mb-1 font-medium">Country of Residence</label>
          <select className="w-full border rounded-full px-4 py-2">
            <option>Afghanistan</option>
          </select>
        </div>
        <div className="">
          <label className="block mb-1 font-medium">State of Origin</label>
          <select className="w-full border rounded-full px-4 py-2">
            <option>Abuja</option>
          </select>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-5">
        <p className="font-semibold mb-2">
          What skills will you bring to the team?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            "Charismatic community organizer",
            "I am a Philanthropist",
            "Motivational Speaker",
            "Passionate about ending poverty",
            "I lived in and/or love S.E Nigeria",
            "I am a Faith Leader in my community",
            "I'm an Aid Worker",
            "I'm a people person!",
          ].map((skill, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>{skill}</span>
            </label>
          ))}
        </div>
      </div>
    </form>
  );
};

export default VolunteerForm;
