"use client";

import { useState, useEffect } from "react"; // Import useEffect
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { Button, InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui";

const RESEND_INTERVAL = 30; // Countdown time in seconds

const CreatePINForm = () => {
  const router = useRouter();
  const [pin, setPin] = useState<string>("");
  const [confirmPin, setConfirmPin] = useState<string>("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(RESEND_INTERVAL);
  const [resendDisabled, setResendDisabled] = useState(true);

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (resendDisabled && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
      if (timer) clearInterval(timer);
    }

    // Cleanup function to clear interval on component unmount or when timer stops
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [resendDisabled, countdown]);

  const handleResend = async () => {
    if (resendDisabled) return; // Prevent resend if already disabled

    console.log("Resending OTP...");
    // Add logic here to call the API to resend the OTP
    // try {
    //   await resendOtpApiCall(); // Replace with your actual API call
    //   setError(""); // Clear previous errors
    // } catch (resendError) {
    //   setError("Failed to resend OTP. Please try again.");
    //   return; // Stop if resend fails
    // }

    // Reset timer
    setResendDisabled(true);
    setCountdown(RESEND_INTERVAL);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // ... existing handleSubmit logic ...
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Add logic to verify the OTP (using the 'otp' state)
    console.log("Verifying OTP:", pin);

    try {
      // Simulate API call or verification logic
      // if (verificationSuccessful) {
      router.push("/dashboard");
      // } else {
      //   setError("Invalid OTP. Please try again.");
      //   setIsLoading(false);
      // }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    } finally {
      // Ensure isLoading is set to false even if verification logic is commented out
      // In a real scenario, this would likely be inside the try/catch based on success/failure
      // setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* ... header section ... */}
      <div className="space-y-2 text-center">
        {/* ... Image, h1, p ... */}
        <Image
          className="mx-auto hidden" // Consider removing 'hidden' if the image should be visible
          src="/graphics/svg/locks.svg"
          alt="Rexolute Logo"
          priority
          width={140}
          height={40}
        />
        <h1 className="text-3xl font-semibold tracking-tight">
          Check your email
        </h1>
        <p className="text-muted-foreground">
          {/* Consider making the email dynamic */}
          Enter OTP send to your email “asuquogodwin0@gmail.com”
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <div className="relative flex justify-center">
            {pin.length >= 6 && <></>}
            <InputOTP
              maxLength={6}
              value={pin}
              onChange={(value) => setPin(value)}
            >
              {/* ... InputOTPGroup and InputOTPSlots ... */}

              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTP>
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <div className="text-center text-sm space-y-1">
            <p className="text-muted-foreground">Didn’t receive a code?</p>
            <Button
              variant="link"
              type="button"
              className={`p-0 h-auto ${
                resendDisabled
                  ? "text-muted-foreground cursor-not-allowed"
                  : "text-[#f47425]"
              }`}
              onClick={handleResend} // Add onClick handler
              disabled={resendDisabled} // Disable button based on state
            >
              {resendDisabled
                ? `Re-send code in ${countdown}s`
                : "Re-send code"}
            </Button>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#2E8902] text-white hover:bg-[#2E8902]/80 rounded-full"
          disabled={isLoading || confirmPin.length !== 6}
        >
          {isLoading ? "Verifying..." : "Submit"}
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

export default CreatePINForm;
