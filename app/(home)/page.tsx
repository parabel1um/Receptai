import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-7xl xl:mx-auto mx-8 my-8 flex h-full flex-col justify-center items-center">
      <div className="relative z-10 w-full h-full rounded-[40px] min-h-[700px] overflow-hidden">
        <div className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3 items-center justify-center text-center flex-col text-background">
          <h1 className="text-6xl font-bold uppercase tracking-tighter">
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
        <h1 className="text-4xl font-bold uppercase tracking-tighter text-[#262522] text-opacity-70">
          Naujausi receptai
        </h1>
        <div className="flex gap-20 w-full h-full"></div>
      </div>
    </section>
  );
}
