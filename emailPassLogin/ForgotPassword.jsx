import Image from "next/image";

const ForgotPassword = () => {
  return (
    <section className="flex-col-center space-y-4">
      <Image
        src="/holaHomeBlack.png"
        width={235}
        height={135}
        priority
        alt="hide/visible"
      />
      <p className="text-base">Admin Panel</p>
      <div className="login-frame ">
        <p className="text-base md:text-xl">Forgot password?</p>
        <form action="/api/form" className=" login-form">
          <div className="form-div">
            <label htmlFor="first" className="lable">
              Email
            </label>
            <span className="input-span">
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
          <button type="submit" className="login-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword ;
