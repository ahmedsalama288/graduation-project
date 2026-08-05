import Image from "next/image";
import logo from "@public/logo.avif";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="drop-shadow-lg inline-flex shrink-0 justify-center items-center w-[73px] h-[69px]">
      <Image
        className=" w-full h-auto drop-shadow-md"
        src={logo}
        priority
        alt="delta logo"
        height={900}
        width={845}
        quality={90}
      />
    </Link>
  );
}
