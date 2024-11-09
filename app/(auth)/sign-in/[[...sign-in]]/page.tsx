"use client";
import { SignIn, SignUp, useAuth, useSignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { FormEvent, useState, useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const { sessionId } = useAuth();

  const [passwordFieldVisible, setPasswordFieldVisible] = useState(false);

  useEffect(() => {
    if (sessionId) {
      router.push("/");
    }
  }, [sessionId]);

  useLayoutEffect(() => {
    const observer = new MutationObserver(() => {
      const emailFieldElement = document.querySelector(
        ".cl-formFieldInput__identifier"
      );
      setPasswordFieldVisible(!emailFieldElement);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-screen h-screen bg-background flex flex-col items-center justify-center lg:px-96 lg:py-96">
      <div className="flex flex-col items-center">
        <p className="text-3xl my-3 font-medium whitespace-nowrap">
          {passwordFieldVisible ? "Įveskite slaptažodį" : "Sveiki sugrįžę!"}
        </p>
        {!passwordFieldVisible && (
          <p className="text-xl my-2 font-medium whitespace-nowrap">
            Prisijunkite
          </p>
        )}

        <SignIn
          appearance={{
            elements: {
              cardBox: "shadow-none",
              card: "px-4 py-6 pt-3 bg-transparent",
              footer: "bg-none",
              socialButtonsBlockButton: "py-3 bg-white bg-opacity-75",
              input: "w-full h-10 text-base",
              formButtonPrimary:
                "bg-color2 text-white rounded-lg py-2 text-base",
              otpCodeFieldInputs: "mb-3",
              formResendCodeLink: "text-sm",
              header: "hidden",
              "internal-y44tp9": "hidden",
              footerAction: "hidden",
            },
          }}
        />
        {!passwordFieldVisible && (
          <div className="flex gap-1 items-center justify-center border-t-2 border-[rgba(0, 0, 0, 0.07)] w-full">
            <p className="my-3 font-thin text-sm">Neturite paskyros?</p>
            <Link href={"/sign-up"} className="text-sm">
              Užsiregistruokite čia
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
