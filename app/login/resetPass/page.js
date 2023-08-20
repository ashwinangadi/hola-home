import Image from "next/image";
import Link from "next/link";

const ResetPass = () => {
  return (
    <section className="flex-col-center resetpass-section">
      <Image
        src="/mailWithCircles.png"
        width={65}
        height={65}
        priority
        alt="hide/visible"
      />
      <p className="text-xl md:text-3xl font-semibold">Check your email</p>
      <span className="text-reset">
        <p>We sent a password resent link to</p>
        <p>johndoe@gmail.com</p>
      </span>
      <span className="back-login">
      <Link href="/"><Image
          src="/arrowBack.svg"
          width={25}
          height={25}
          alt="hide/visible"
        /></Link>
        <Link href="/"><p>Back to log in</p></Link>
      </span>
    </section>
  );
};

export default ResetPass;
