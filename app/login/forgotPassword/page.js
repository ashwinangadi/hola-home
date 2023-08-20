"use client";
import Button from "@/components/button/Button";
import { isValidEmail } from "@/utility";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
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


  const handleForm = (event) => {
    event.preventDefault();

    // const { result, error } = await signIn(email, password);

    // if (error) {
    //   return console.log(error);
    // }

    // // else successful
    // console.log(result);
    return router.push("/resetPass");
  };

  return (
    <section className="flex-col-center space-y-4 min-h-screen">
      <Link href="/">
        <Image
          src="/holaHomeBlack.png"
          width={235}
          height={135}
          priority
          alt="hide/visible"
        />
      </Link>
      <p className="text-base">Admin Panel</p>
      <div className="login-frame">
        <p className="text-base md:text-xl">Forgot password?</p>
        <form onSubmit={handleForm} className=" login-form ">
          <div className="form-div">
            <label htmlFor="first" className="lable">
              Email
            </label>
            <span className={`input-span ${
                isEmailValid ? "border" : "border-red-500"
              }`}>
              <input
                type="text"
                id="first"
                name="first"
                required
                className=" outline-none "
                placeholder="Enter Email"
                onChange={handleEmailChange}
              />
              <p className={`absolute text-[10px] pt-1 text-red-500 ${isEmailValid && "hidden"}`}>Please enter a valid email address</p>
            </span>
            
          </div>
          <Link href="/login/resetPass">
            {/* <p className="login-button w-full text-center">Submit</p> */}
            <Button className="login-button w-full text-center" text="Submit" />
          </Link>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
