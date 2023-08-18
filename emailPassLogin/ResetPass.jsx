import Image from "next/image";

const ResetPass = () => {
  return (
    <section className="flex-col-center text-center space-y-4 md:space-y-6">
      <Image
        src="/mailWithCircles.png"
        width={65}
        height={65}
        priority
        alt="hide/visible"
      />
      <p className="text-xl md:text-3xl font-semibold">Check your email</p>
      <span className="text-[#828282] text-base md:text-xl font-normal">
        <p>We sent a password resent link to</p>
        <p>johndoe@gmail.com</p>
      </span>
      <span className="flex-center space-x-5 text-[#828282] text-sm md:text-lg font-normal">
        <Image
          src="/arrowBack.svg"
          width={25}
          height={25}
          alt="hide/visible"
        />
        <p>Back to log in</p>
      </span>
    </section>
  );
};

export default ResetPass;
