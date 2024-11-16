"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LogInButton from "./LogInButton";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { createUser } from "@/actions/user.action";
import ReceptButton from "./CreateReceptButton";
import NewReceptWindow from "../newRecipeWindow";

const NavbarComponent = () => {
  const [currentRoute, setCurrentRoute] = useState("");
  const [navbarActive, setNavbarActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  const router = useRouter();
  const pathname = usePathname() || "/";

  useEffect(() => {
    setCurrentRoute(pathname);
    console.log(pathname);
  }, [pathname]);

  useEffect(() => {
    console.log(isOpen);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="max-w-7xl md:mx-auto md:flex hidden mx-8 px-6 py-4 mt-4 items-center justify-between rounded-[35px] border-[2px] border-[#262522] border-opacity-25">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2"
        >
          <Image
            src={"/favicon.png"}
            alt="logo"
            width={30}
            height={25}
            decoding="async"
          />
          <p className="font-semibold text-xl tracking-tight ">Receptai</p>
        </button>
        <div className="flex gap-7">
          <Link href="/" className="font-semibold uppercase cursor-pointer">
            <span
              className={`group relative inline-block text-dark text-md ${
                currentRoute === "/" ? "font-medium" : "opacity-30"
              }`}
            >
              Pagrindinis
              <span
                className={`absolute -bottom-0.5 h-0.5 w-0 bg-color3 transition-all duration-300 ease-out ${
                  currentRoute == "/"
                    ? "w-full left-0"
                    : "left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              />
            </span>
          </Link>
          <Link
            href="/recipes"
            className="font-semibold uppercase cursor-pointer"
          >
            <span
              className={`group relative inline-block text-dark text-md ${
                currentRoute === "/recipes" ? "font-medium" : "opacity-40"
              }`}
            >
              Receptai
              <span
                className={`absolute -bottom-0.5 h-0.5 w-0 bg-color3 transition-all duration-300 ease-out group-hover:left-0 ${
                  currentRoute == "/recipes"
                    ? "w-full left-0"
                    : "left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              />
            </span>
          </Link>
          <Link
            href="/about-us"
            className="font-semibold uppercase cursor-pointer"
          >
            <span
              className={`group relative inline-block text-dark text-md ${
                currentRoute === "/about-us" ? "font-medium" : "opacity-40"
              }`}
            >
              Apie mus
              <span
                className={`absolute bottom-0 -left-1/0.-bottom-0.5 h-0.5 w-0 bg-color3 transition-all duration-300 ease-out group-hover:left-0 ${
                  currentRoute == "/about-us"
                    ? "w-full left-0"
                    : "left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              />
            </span>
          </Link>
        </div>
        <div className="w-fit">
          <SignedOut>
            <LogInButton />
          </SignedOut>
          <SignedIn>
            <div className="flex gap-5">
              <ReceptButton setOpen={setIsOpen} />
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </header>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full ">
          <NewReceptWindow isOpen={isOpen} setOpen={setIsOpen} />
        </div>
      )}
    </>
  );
};

export default NavbarComponent;
