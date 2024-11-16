import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-10 w-full h-32 rounded-[40px] bg-dark px-10 py-6 flex flex-col justify-between items-center text-background">
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <Image
            src={"/favicon.png"}
            alt="logo"
            width={30}
            height={25}
            decoding="async"
          />
          <p className="font-semibold text-xl tracking-tight">Receptai</p>
        </div>
        <div className="flex gap-7 text-sm">
          <Link href="/" className="font-semibold uppercase cursor-pointer">
            Pagrindinis
          </Link>
          <Link
            href="/recipes"
            className="font-semibold uppercase cursor-pointer"
          >
            Receptai
          </Link>
          <Link
            href="/about-us"
            className="font-semibold uppercase cursor-pointer"
          >
            Apie mus
          </Link>
        </div>
        <div className="flex gap-3">
          <FacebookIcon className="cursor-pointer" size={24} />
          <InstagramIcon className="cursor-pointer" size={24} />
          <YoutubeIcon className="cursor-pointer" size={24} />
        </div>
      </div>
      <p>© 2024 Receptai UAB</p>
    </footer>
  );
};

export default Footer;
