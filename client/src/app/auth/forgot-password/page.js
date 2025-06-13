"use client";

import Spinner from "@/components/shared/Spinner";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "@/services/firebase"; // your firebase.js path

const ResetPassword = () => {
  const router = useRouter();
  const auth = getAuth(app);

  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    setIsLoading(true);
    toast.loading("Sending reset link...", { id: "forgot-password" });

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.", { id: "forgot-password" });
      e.target.reset();
      setTimeout(() => {
        router.push("/auth/signin");
      }, 1000);
    } catch (error) {
      toast.error(error.message, { id: "forgot-password" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center px-4">
      <div className="max-w-md w-full flex flex-col gap-y-4 border p-8 rounded-primary">
        <div className="flex flex-row items-center gap-x-2">
          <hr className="w-full" />
          <Image
            src="/logo.png"
            alt="logo"
            width={141}
            height={40}
            className="max-w-full cursor-pointer"
            onClick={() => router.push("/")}
          />
          <hr className="w-full" />
        </div>
        <form
          className="w-full flex flex-col gap-y-4"
          onSubmit={handleResetPassword}
        >
          <label htmlFor="email" className="flex flex-col gap-y-1">
            <span className="text-sm">Enter Your Email</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="i.e. example@gmail.com"
              required
            />
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className="py-2 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow disabled:bg-gray-200 disabled:border-gray-200 disabled:text-black/50 disabled:cursor-not-allowed flex flex-row justify-center items-center text-sm"
          >
            {isLoading ? <Spinner /> : "Send Reset Link"}
          </button>
        </form>
        <div className="flex flex-row justify-center items-center gap-x-2 text-xs">
          <Link href="/auth/signin">Sign In</Link>
          <span className="h-4 border-l" />
          <Link href="/auth/signup">Sign Up</Link>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
