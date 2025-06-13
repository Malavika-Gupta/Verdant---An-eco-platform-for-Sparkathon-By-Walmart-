"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/services/firebase"; // ✅ path to your firebase.js
import { toast } from "react-hot-toast";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const auth = getAuth(app);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.loading("Signing in...", { id: "sign-in" });

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!", { id: "sign-in" });
      router.push("/dashboard"); // ✅ adjust as needed
    } catch (error) {
      toast.error(error.message, { id: "sign-in" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignIn} className="flex flex-col gap-y-4 max-w-md mx-auto mt-20">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="py-2 px-4 bg-black text-white rounded disabled:opacity-50"
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}
