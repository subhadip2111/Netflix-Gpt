import React, { useState, useRef } from "react";
import Header from "./Header";
import { validData } from "../utils/validation";

const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true);

  const [errMessage, setErrmessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClicked = () => {
    //validate the form
    const message = validData(email.current.value, password.current.value);

    setErrmessage(message);

    //after validate this go for sign in and sign up
    
  };

  const togleSignInForm = () => {
    setIsSignInform(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85 "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 my-2 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <p className="text-red-600 text-lg py-2 ">{errMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleButtonClicked}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={togleSignInForm}>
          {isSignInForm
            ? "New to Netflix Sign Up Now "
            : "Already Register Sign In now  "}
        </p>
      </form>
    </div>
  );
};

export default Login;
