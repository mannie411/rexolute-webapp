import React, { FC, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import { PageProps } from "@/lib/types";
import { Head } from "@/components/shared";
import {
  CreatePasswordForm,
  CreatePINForm,
  ForgotPasswordForm,
  LoginForm,
  VerifyOTPForm,
} from "@/components/admin/forms";

const AuthLayout: FC<PageProps> = ({ slug, query, title }) => {
  return (
    <Fragment>
      <Head title={title} />

      <div className="flex min-h-screen">
        {/* Left side - Green background with illustration */}
        <div className="hidden w-1/3 flex-col bg-[#205406] p-8 md:flex">
          <div className="flex flex-col items-center gap-6 my-12">
            <Link href={"/home"}>
              <Image
                src="/graphics/svg/logos/white.svg"
                alt="Rexolute Logo"
                priority
                width={140}
                height={40}
              />
            </Link>
            <h2 className="mt-4 text-xl font-medium text-white">
              ADMIN PORTAL
            </h2>
          </div>

          <div className="flex flex-1 ">
            <Image
              src="/graphics/svg/admin-cuate.svg"
              alt="Admin Portal Illustration"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="flex-1 flex w-full flex-col items-center justify-center p-8">
          <div className="w-full max-w-md">
            {slug === "create-pin" && <CreatePINForm />}
            {slug === "create-password" && <CreatePasswordForm />}
            {slug === "login" && <LoginForm />}
            {slug === "forgot-password" && <ForgotPasswordForm />}
            {slug === "verify-otp" && (
              <VerifyOTPForm
                provider={query.provider ?? "email"}
                identity={query.identity ?? "someone@mail.com"}
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthLayout;
