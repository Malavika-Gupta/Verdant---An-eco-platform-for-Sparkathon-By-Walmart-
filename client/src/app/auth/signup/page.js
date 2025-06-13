"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/services/firebase"; // ✅ your firebase.js
import { toast } from "react-hot-toast";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const auth = getAuth(app);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.loading("Creating account...", { id: "sign-up" });

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signup successful!", { id: "sign-up" });
      router.push("/dashboard"); // ✅ adjust if needed
    } catch (error) {
      toast.error(error.message, { id: "sign-up" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-y-4 max-w-md mx-auto mt-20">
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
        {isLoading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}
