import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="flex-col-center space-y-4">
      <Image
        src="/holaHomeBlack.png"
        width={235}
        height={135}
        priority
        alt="hide/visible"
      />
      <p className="text-base ">Admin Panel</p>
      <div className="login-frame ">
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
              />
              <Image
                src="/makeVisible.svg"
                width={14}
                height={14}
                alt="hide/visible"
              />
            </span>
            <p className="text-end text-xs text-[#F9C900]">Forgot password?</p>
          </div>
          <button type="submit" className="login-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
