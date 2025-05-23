"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { Button, Input, Label } from "@/components/ui";

const ForgotPaswordForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const [showEmail, setShowEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      router.push("/auth/admin/verify-otp");
    } catch (error) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <Image
          className="mx-auto"
          src="/graphics/svg/locks.svg"
          alt="Rexolute Logo"
          priority
          width={140}
          height={40}
        />
        <h1 className="text-3xl font-semibold tracking-tight">
          Forgot password?
        </h1>
        <p className="text-muted-foreground">
          Enter your email to reset your password
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input
              id="email"
              type={"email"}
              placeholder="someone@mail.com"
              className="pr-10"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#2E8902] text-white hover:bg-[#2E8902]/80 rounded-full"
        >
          Reset password
        </Button>

        <div className="text-center text-sm ">
          <Link
            href="/auth/admin/login"
            className="font-medium text-[#f47425] hover:underline"
          >
            Go back to login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPaswordForm;
