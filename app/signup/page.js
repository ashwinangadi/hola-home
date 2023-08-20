"use client";
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/button/Button";
import Image from "next/image";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();
    const { result, error } = await signUp(email, password);
    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push("/admin");
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
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                className=" outline-none "
              />
            </span>
          </div>
          <div className="form-div">
            <label htmlFor="password" className="lable">
              Password
            </label>
            <span className="input-span flex justify-between">
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="outline-none "
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
              <Link href="/login/forgotPassword">Login?</Link>
            </p>
          </div>
          <Button type="submit" className="login-button" text="Signup" />
        </form>
      </div>
    </section>
  );
}

export default Page;
