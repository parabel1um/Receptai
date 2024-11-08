import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-full relative bg-background">
      <div className="w-full h-full z-10">
        <div className="relative top-52 w-full h-56 flex justify-center">
          <div className="w-full max-w-[1300px] h-full flex flex-col justify-start">
            <div className="w-[430px] flex flex-col gap-0">
              <p className="text-sm uppercase font-medium font-inter tracking-tighter text-brand-primary mb-1">
                Social Media made simple
              </p>
              <h1 className="text-4xl font-bold font-redhat tracking-tight">
                Take Control of Your Social Media
              </h1>
              <p className="font-redhat text-lg tracking-tight mt-3">
                Syncel helps you plan and schedule posts, analyze performance
                and collaborate with your team, all in one platform.
              </p>
              <div className="flex gap-8">
                <div className="inline-flex gap-1.5">
                  <Image
                    src="/tick-square.svg"
                    width={24}
                    height={24}
                    alt="Tick"
                  />
                  <p className="font-inter text-sm tracking-tight">
                    No Credit Card required
                  </p>
                </div>
                <div className="inline-flex gap-1.5">
                  <Image
                    src="/tick-square.svg"
                    width={24}
                    height={24}
                    alt="Tick"
                  />
                  <p className="font-inter text-sm tracking-tight">
                    Cancel Anytime
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-40">
              <div className="w-10/12 flex flex-col sm:flex-row justify-between items-start gap-20">
                <div className="w-1/6 flex flex-col justify-center items-center">
                  <Image
                    src="/stars.png"
                    width={150}
                    height={40}
                    alt="5 stars"
                  />
                  <p className="italic font-inter text-sm tracking-tight text-center">
                    “Never thought managing socials could be this simple. Well
                    done!”
                  </p>
                </div>
                <div className="w-1/5 flex flex-col justify-center items-center">
                  <Image
                    src="/stars.png"
                    width={150}
                    height={40}
                    alt="5 stars"
                  />
                  <p className="italic font-inter text-sm tracking-tight text-center">
                    “Super clean design, love it!"
                  </p>
                </div>
                <div className="w-1/5 flex flex-col justify-center items-center">
                  <Image
                    src="/stars.png"
                    width={150}
                    height={40}
                    alt="5 stars"
                  />
                  <p className="italic font-inter text-sm tracking-tight text-center">
                    "This is going to make managing my socials way easier."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-[3000px] z-0 blurry overflow-clip hidden sm:block"></div>
    </div>
  );
}
