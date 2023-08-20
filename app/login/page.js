"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import signIn from "@/firebase/auth/signIn";
import { useRouter } from "next/navigation";
import Button from "@/components/button/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
            <span className="input-span">
              <input
                type="email"
                id="email"
                name="email"
                required
                className=" outline-none "
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
          </div>
          <div className="form-div">
            <label htmlFor="password" className="lable">
              Password
            </label>
            <span className="input-span flex justify-between">
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter Password"
                className="outline-none "
                onChange={(e) => setPassword(e.target.value)}
              />
              <Image
                src="/makeVisible.svg"
                width={16}
                height={16}
                alt="hide/visible"
                className="cursor-pointer"
              />
            </span>
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
