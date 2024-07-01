import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex gap-4 items-center">
      <Image
        src={"/logow.png"}
        alt="ViewTB"
        width={500}
        height={500}
        className="w-[4.5rem]"
      />
      <div className="flex-col text-xl text-gray-100 hidden md:flex">
        <span className=" font-bold">ViewTB</span>
        <p className="opacity-70 max-w-48 text-light text-sm leading-5">
          {/* Understand TB better and impove you health  */}
          ቲቢን በደንብ ይረዱ እና ጤናዎን ይጠብቁ
        </p>
      </div>
    </Link>
  );
};
export default Logo;
