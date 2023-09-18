import React, { useState } from "react";
import { Navbar } from "./Navbar";

interface SignUpState {
  tel: string;
  email: string;
  password: string;
}

function SignUp() {
  // const [email, setEmail] = useState<string>("");
  // const [phoneNo, setPhoneNo] = useState<string>();
  // const [password, setPassword] = useState<string>("");

  const [formData, setFormData] = useState<SignUpState>({
    tel: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<SignUpState>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "email") {
      // Define a regex pattern for email validation
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      if (!emailPattern.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "Invalid email" }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
      }
    } else if (name === "password") {
      // Define a regex pattern for password validation
      const passwordPattern =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

      if (!passwordPattern.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Invalid password",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
      }
    } else if (name === "tel") {
      const phonePattern = /^\d{10}$/;

      if (name === "tel") {
        if (!phonePattern.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Invalid phone number",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
        }
      }
    }
  };

  const isFormValid = () => {
    // Check if any of the validation errors exist or if any input is empty
    return (
      !errors.email &&
      !errors.password &&
      !errors.tel &&
      formData.email !== "" &&
      formData.password !== "" &&
      formData.tel !== ""
    );
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    // console.log(phoneNo);

    if (isFormValid()) {
      console.log("Form data is valid:", formData);
    } else {
      console.log("Form data is invalid. Please fix the errors.");
    }

    console.log(formData);
  };
  return (
    <div className="">
      <Navbar />
      <div className="mt-5 flex mb-20 flex-col justify-center items-center ">
        <div className="w-16 h-16 rounded-full bg-gray-400 mb-10"></div>
        <div className="p-12 border rounded-[32px]  border-[#666666] flex flex-col">
          <div className="text-center mb-12">
            <h1 className="text-[32px]  font-bold">Create an account</h1>
            <p className="text-base font-normal">
              Lorem ipsum dolor, sit amet consectetur <br />
              adipisicing elit. Consequatur, dolore odit.
            </p>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              className="h-10 mb-4 px-3 rounded-lg border border-[#666666]"
              type="text"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <label htmlFor="number">Phone number</label>
            <input
              className="h-10 mb-4 px-3 rounded-lg border border-[#666666]"
              type="tel"
              placeholder=""
              value={formData.tel}
              onChange={handleChange}
              name="tel"
            />
            {errors.tel && <p className="text-red-500">{errors.tel}</p>}
            <label htmlFor="password">Password</label>
            <input
              className="h-10 mb-4 px-3 rounded-lg border border-[#666666]"
              type="password"
              placeholder=""
              value={formData.password}
              onChange={handleChange}
              name="password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
            <ul className="grid grid-cols-2 mb-7">
              <li>Use more than 8 characters</li>
              <li>Use upper and Lower case letters</li>
              <li>use a number</li>
              <li>use a symbol</li>
            </ul>

            <button
              disabled={!isFormValid()}
              className={`h-12 mb-7 rounded-full text-white w-full ${
                isFormValid() ? "bg-black" : "bg-gray-500"
              }`}
            >
              Sign Up
            </button>
            <p>
              By creating an account , you agree to the terms of Use and Privacy
              Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
