"use client";
import React, { useState } from "react";
import Header from "../component/headerComponent/header";
import Footer from "../component/footerComponent/footer";
import localFont from "next/font/local";
import Script from "next/script";
import { EB_Garamond } from "next/font/google";
import Text from "../component/textComponents/text";
import HeaderText from "../component/textComponents/HeaderText";
import LabelText from "../component/textComponents/Labeltext";
import LanguageSelector from "../component/flagComponents/flagSelector";
const ebG = EB_Garamond({ subsets: ["latin"] });
const trajanProFont = localFont({ src: "../../font/TrajanProR.ttf" });


export default function Home() {
  // set up for reCaptcha
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

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

    grecaptcha.ready(() => {
      grecaptcha
        .execute(siteKey, { action: "submit" })
        .then(async (token) => {
          console.log(token);
          const bodyForGoogleResponse = {
            recaptchaResponse: token,
          };

          try {
            const response1 = await fetch("/api/reCaptcha", {
              method: "POST",
              headers: { "content-type": "application/json;charset=utf-8" },
              body: JSON.stringify(bodyForGoogleResponse),
            });

            if (response1.ok) {
              const json = await response1.json();
              if (json.success) {
                console.log("swagger");
                // writeData(formValues.name, formValues.email, formValues.phone, formValues.address, clientNewServiceAmount, formValues.date);
                // sendEmail(formValues.name, formValues.email, formValues.phone, formValues.address, clientNewServiceAmount, formValues.date) ;
              }
            } else {
              throw new Error(response1.statusText);
            }
          } catch (error) {
            console.log(error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <main className={ebG.className}>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
      />
      <div className="bg-white h-fit w-full flex flex-col text-black">
        {/* <div className="m-auto"></div> */}
        <Header />
        <LanguageSelector />
        <div className="flex flex-row mb-16 pl-16 text-xl lg:mt-0 mt-32">
          {/* Left Hand Side */}
          <div className="w-2/3">
            <div>
              <div className={trajanProFont.className}>
                <div className="text-4xl font-extrabold mb-4">
                  <HeaderText aText={"About You"} />
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                {/* First Section */}
                {/* First Row */}
                <div className=" flex lg:flex-row flex-col gap-x-8 ">
                  {/* Name */}
                  <div className="mb-4">
                    <div className="block text-gray-700 font-bold mb-2">
                      <LabelText htmlFor="name" aText={"Name"} />
                    </div>
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
                    <div className="block text-gray-700 font-bold mb-2">
                      <LabelText htmlFor={"age"} aText={"Age"} />
                    </div>
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
                  <div className="block text-gray-700 font-bold mb-2">
                    <LabelText htmlFor={"gender"} aText={"Gender"} />
                  </div>
                  <select
                    id="gender"
                    className="border rounded-lg px-3 py-2 w-[220.400px]"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">
                      <Text aText={"Select Gender"} />
                    </option>
                    <option value="Male">
                      <Text aText={"Male"} />
                    </option>
                    <option value="Female">
                      <Text aText={"Female"} />
                    </option>
                  </select>
                </div>
                {/* 2nd Section */}
                {/* First Row */}
                <div className={trajanProFont.className}>
                  <div className="text-4xl font-extrabold mb-4 mt-12 lg:mt-6">
                    <HeaderText aText={"Contact Information"} />
                  </div>
                </div>
                <div className=" flex lg:flex-row flex-col gap-x-8 ">
                  {/* Phone */}
                  <div className="mb-4">
                    <div className="block text-gray-700 font-bold mb-2">
                      <LabelText htmlFor={"phone"} aText={"Phone"} />
                    </div>
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
                    <div className="block text-gray-700 font-bold mb-2">
                      <LabelText htmlFor={"email"} aText={"Email"} />
                    </div>
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
                  <div className="text-4xl font-extrabold mb-4 mt-12 lg:mt-6">
                    <HeaderText aText={"Additional Information"} />
                  </div>
                </div>
                {/* how did you hear about us */}
                <div className="mb-4">
                  <div className="block text-gray-700 font-bold mb-2 capitalize">
                    <LabelText
                      htmlFor={"heard"}
                      aText={"How did you hear about us?"}
                    />
                  </div>
                  <select
                    id="heard"
                    className="border rounded-lg px-3 py-2 w-[220.400px]"
                    value={heard}
                    onChange={(e) => setHeard(e.target.value)}
                    required
                  >
                    <option value="">
                      <Text aText={"Select An Option"} />
                    </option>
                    <option value="Friend">
                      <Text aText={"Friend"} />
                    </option>
                    <option value="Evangalism">
                      <Text aText={"Evangalism"} />
                    </option>
                    <option value="Facebook">
                      <Text aText={"Facebook"} />
                    </option>
                  </select>
                  {/* how did you hear about us? */}
                  {/* would like to */}
                  <div className="mb-4">
                  <div className="block text-gray-700 font-bold my-2 capitalize">

                  <LabelText aText={"I would like to..."} htmlFor={"wouldLikeTo"} />
                  </div>
                    <select
                      id="wouldLikeTo"
                      className="border rounded-lg px-3 py-2 w-[220.400px]"
                      value={wouldLikeTo}
                      onChange={(e) => setWouldLikeTo(e.target.value)}
                      required
                    >
                      <option value="">
                        <Text aText={"Select An Option"} />
                      </option>
                      <option value="Join The Church">
                        <Text aText={"Join The Church"} />
                      </option>
                      <option value="Convert">
                        <Text aText={"Convert"} />
                      </option>
                      <option value="Talk To Someone">
                        <Text aText={"Talk To Someone"} />
                      </option>
                    </select>
                  </div>
                  {/* would like to */}
                  {/* Do you have a Petition */}
                  <div className="mb-4">
                    <div className="mb-4">
                      <div className="block text-gray-700 font-bold mb-2">
                        <LabelText
                          htmlFor={"petition"}
                          aText={"Do You Have a Petition?"}
                        />
                      </div>
                      <textarea
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
                    <Text aText="Submit" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right hand side */}
          <div className="w-1/3 hidden lg:block">
            <div className="relative">
              <div className="w-[298px]">
                <div className="text-[34px] capitalize leading-[70.38px]">
                  <Text
                    aText="Vengan a mí todos ustedes que están cansados y agobiados, y yo
                  les daré descanso."
                  />
                </div>
              </div>
              <div className="text-[51px]">
                <Text aText={"- Mateo 11:28"} />
              </div>
            </div>
          </div>

          {/* Right Hand side */}
        </div>
        <Footer />
      </div>
    </main>
  );
}
