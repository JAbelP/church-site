"use client";
import React, { useState, useEffect } from "react";
import Header from "../component/headerComponent/header";
import NewMember from "../component/newMemberComponent/newMember";
import Footer from "../component/footerComponent/footer";
import EyeCatch from "../component/ministeriosComponents/eyeCatch";
import localFont from "next/font/local";import { EB_Garamond } from "next/font/google";

const ebG = EB_Garamond({ subsets: ["latin"] });
const trajanProFont = localFont({ src: "../../font/TrajanProR.ttf" });

export default function Home() {
  // State for the form fields
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(""); // Added state for gender
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [heard, setHeard] = useState(""); // Added state for gender
  const [wouldLikeTo, setWouldLikeTo] = useState(""); // Added state for gender
  const [petition, setPetition] = useState(""); // Added state for gender

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form data submission here
    console.log("Name: ", name);
    console.log("Age: ", age);
    console.log("Gender: ", gender); // Log the selected gender
    console.log("Phone: ", phone);
    console.log("Email: ", email);
    console.log("Heard: ", heard);
    console.log("Would Like to: ", wouldLikeTo);
    console.log("Petition: ", petition);
  };

  return (
    <main className={ebG.className}>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="m-auto"></div>
        <Header />
        <div className="flex flex-row mb-16 pl-16 text-xl">
          <div className="w-2/3">
            <div>
              <div className={trajanProFont.className}>
                <h1 className="text-4xl font-extrabold mb-4">About You</h1>
              </div>
              <form onSubmit={handleSubmit}>
                {/* First Section */}
                {/* First Row */}
                <div className=" flex flex-row gap-x-8 ">
                  {/* Name */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border bg-slate-200 rounded-lg px-3 py-2 w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  {/* Name */}

                  {/* Age */}
                  <div className="mb-4">
                    <label
                      htmlFor="age"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      className="border rounded-lg bg-slate-200 px-3 py-2 w-full"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                  </div>
                  {/* Age */}
                </div>
                {/* 2nd Row */}
                <div className="mb-4">
                  <label
                    htmlFor="gender"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    className="border rounded-lg px-3 py-2 w-[220.400px]"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {/* 2nd Section */}
                {/* First Row */}
                <div className={trajanProFont.className}>
                  <h1 className="text-4xl font-extrabold mb-4">Contact Information</h1>
                </div>
                <div className=" flex flex-row gap-x-8 ">
                  {/* Phone */}
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="border rounded-lg px-3 py-2 bg-slate-200 w-full"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  {/* Phone */}

                  {/* Email */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="border rounded-lg bg-slate-200 px-3 py-2 w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  {/* Email */}
                </div>
                {/* 3rd Section */}
                <div className={trajanProFont.className}>
                  <h1 className="text-4xl font-extrabold mb-4">
                    Additional Information
                  </h1>
                </div>
                {/* how did you hear about us */}
                <div className="mb-4">
                  <label
                    htmlFor="heard"
                    className="block text-gray-700 font-bold mb-2 capitalize"
                  >
                    How Did you hear about us?
                  </label>
                  <select
                    id="heard"
                    className="border rounded-lg px-3 py-2 w-[220.400px]"
                    value={heard}
                    onChange={(e) => setHeard(e.target.value)}
                    required
                  >
                    <option value="">Select an Option</option>
                    <option value="Friend">Friend</option>
                    <option value="Evangalism">Evangalism</option>
                    <option value="Facebook">Facebook</option>
                  </select>
                  {/* how did you hear about us? */}
                  {/* would like to */}
                  <div className="mb-4">
                    <label
                      htmlFor="wouldLikeTo"
                      className="block text-gray-700 font-bold my-2 capitalize"
                    >
                      I would like to...
                    </label>
                    <select
                      id="wouldLikeTo"
                      className="border rounded-lg px-3 py-2 w-[220.400px]"
                      value={wouldLikeTo}
                      onChange={(e) => setWouldLikeTo(e.target.value)}
                      required
                    >
                      <option value="">Select an Option</option>
                      <option value="Join The Church">Join The Church</option>
                      <option value="Convert">Convert</option>
                      <option value="Talk To Someone">Talk To Someone</option>
                    </select>
                  </div>
                  {/* would like to */}
                  {/* Do you have a Petition */}
                  <div className="mb-4">
                    <div className="mb-4">
                      <label
                        htmlFor="petition"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Do you have a Petition?
                      </label>
                      <input
                        type="text"
                        id="petition"
                        className="border rounded-lg px-3 py-2 h-56 bg-slate-200 w-full"
                        value={petition}
                        onChange={(e) => setPetition(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right hand side */}
          <div className="w-1/3">
            <div className="relative">
              <div className="w-[298px]">
                <p className="text-[34px] capitalize leading-[70.38px]">
                  Vengan a mí todos ustedes que están cansados y agobiados, y yo
                  les daré descanso.
                </p>
              </div>
              <div className="text-[51px]">- Mateo 11:28</div>
            </div>
          </div>

          {/* Right Hand side */}
        </div>
        <Footer />
      </div>
    </main>
  );
}
