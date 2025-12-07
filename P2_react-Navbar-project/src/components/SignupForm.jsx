import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [ShowPassword, setShowPassword] = useState(false);

  const [accountType, setAccountType] = useState("student");

  const [confirmPassword, setConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Password not matching");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accDetails = {
      ...formData,
    };

    const finalData = {
      ...accDetails,
      accountType,
    };
    console.log("acc details", finalData);
    navigate("/dashboard");
  }

  return (
    <div>
      {/* student-instructor-tab */}
      <div className="flex rounded-full bg-richblack-800 gap-x-1 my-6 p-1 max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and last name */}
        <div className="w-full flex flex-row gap-5 mb-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              value={FormData.firstname}
              placeholder="Enter First Name"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              value={FormData.lastname}
              placeholder="Enter Last Name"
            />
          </label>
        </div>

        {/* email address */}
        <label>
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mb-4"
            required
            type="email"
            value={formData.email}
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
          />
        </label>

        {/*create password and confirm password */}
        <div className="w-full flex flex-row gap-5 mb-4">
          {/* create password */}
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              required
              type={ShowPassword ? "text" : "password"}
              value={formData.password}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
            />
            <span
              className="absolute right-3 mx-auto top-[38px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {ShowPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          {/* confirm password */}
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              required
              type={confirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
            />
            <span
              className="absolute right-3 mx-auto top-[38px] cursor-pointer"
              onClick={() => setConfirmPassword((prev) => !prev)}
            >
              {confirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="w-full mt-6 bg-yellow-50 rounded-[8px] hover:bg-yellow-300 font-medium text-richblack-900 px-[12px] py-[8px] ">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
