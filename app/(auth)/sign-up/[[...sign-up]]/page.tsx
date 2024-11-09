"use client";
import { SignUp, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { FormEvent, useState, useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const { sessionId } = useAuth();

  useEffect(() => {
    if (sessionId) {
      router.push("/dashboard");
    }
  }, [sessionId]);

  return (
    <div className="w-screen h-screen bg-background flex flex-col items-center justify-center lg:px-96 lg:py-96">
      <div className="flex flex-col items-center">
        <p className="text-3xl my-3 font-medium whitespace-nowrap">
          Užsiregistruokite
        </p>
        <SignUp
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
      </div>
    </div>
  );
}
