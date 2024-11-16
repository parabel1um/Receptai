import NewestRecipes from "@/components/NewestRecipes";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";

export default function Home() {
  return (
    <section className="max-w-7xl xl:mx-auto mx-8 my-8 flex h-full flex-col justify-center items-center">
      <div className="relative z-10 w-full h-full rounded-[40px] min-h-[700px] overflow-hidden">
        <div className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3 items-center justify-center text-center flex-col text-background">
          <h1 className="md:text-6xl text-2xl font-bold uppercase tracking-tighter">
            Atraskite naujus skonius
          </h1>
          <p className="text-lg tracking-tight whitespace-nowrap">
            Atraskite naujus receptus, kurie papildys jūsų virtuvę bei
            dalinkitės jais su kitais.
          </p>
        </div>
        <Image
          src="/Hero Section.png"
          alt="logo"
          width={1200}
          height={500}
          decoding="async"
          className="absolute w-full h-full object-cover mix-blend-overlay"
        />
        <div className="bg-black w-full h-full absolute top-0 left-0 opacity-40" />
      </div>
      <div className="mt-10 w-full min-h-[600px] rounded-[40px] border-4 border-[#262522] border-opacity-25 px-12 py-8 flex flex-col justify-start items-start ">
        <h1 className="lg:text-3xl text-xl font-bold uppercase tracking-tighter text-[#262522] text-opacity-70">
          Naujausi receptai
        </h1>
        <div className="flex gap-20 w-full h-full">
          <NewestRecipes />
        </div>
      </div>
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
    </section>
  );
}
