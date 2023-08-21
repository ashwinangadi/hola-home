"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import signIn from "@/firebase/auth/signIn";
import { useRouter } from "next/navigation";
import Button from "@/components/button/Button";

import { isValidEmail, isValidPassword } from "@/utility";
import clsx from "clsx";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const router = useRouter();

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if (inputEmail.length <= 0) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(isValidEmail(inputEmail));
    }
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    if (inputPassword.length <= 0) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(isValidPassword(inputPassword));
    }
  };

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };

  // const vaild = clsx({
  //   [classes.red-border] : isEmailValid
  // })

  return (
    <section className="flex-col-center space-y-4">
      <Image
        src="/holaHomeBlack.png"
        width={235}
        height={135}
        priority
        alt="holaHomeBlack"
      />
      <p className="text-base ">Admin Panel</p>
      <div className="login-frame ">
        <form onSubmit={handleForm} className=" login-form">
          <div className="form-div">
            <label htmlFor="email" className="lable">
              Email
            </label>
            <span
              className={clsx(["input-span", { "border-red-500": !isEmailValid }])}
            >
              <input
                type="email"
                id="email"
                name="email"
                required
                className="outline-none"
                placeholder="Enter Email"
                onChange={handleEmailChange}
              />
              <p
                className={`absolute text-[10px] pt-1 text-red-500 ${
                  isEmailValid && "hidden"
                }`}
              >
                Please enter a valid email address
              </p>
            </span>
          </div>
          <div className="form-div">
            <label htmlFor="password" className="lable">
              Password
            </label>
            <span className={clsx(["input-span flex justify-between", { "border": !isPasswordValid }])}
            >
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter Password"
                className="outline-none "
                onChange={handlePasswordChange}
              />
              <Image
                src="/makeVisible.svg"
                width={16}
                height={16}
                alt="hide/visible"
                className="cursor-pointer"
              />
            </span>
            {/* <p
                className={`absolute text-[10px] pt-2 text-red-500 ${
                  isPasswordValid && "hidden"
                }`}
              >
                Password must contain only letters then numbers
              </p> */}
            <p className="text-end text-xs text-[#F9C900] cursor-pointer">
              <Link href="/login/forgotPassword">Forgot password?</Link>
            </p>
          </div>
          <Button type="submit" className="login-button" text="Login" />
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
