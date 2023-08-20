"use client";
import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
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
            <span className="input-span ">
              <input
                type="text"
                id="first"
                name="first"
                required
                className=" outline-none "
                placeholder="Enter Email"
              />
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
