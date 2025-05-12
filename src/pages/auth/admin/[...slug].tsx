import React, { Fragment, FC } from "react";
import Image from "next/image";
import { Head } from "@/components/shared";
import { GetServerSideProps } from "next/types";
import {
  CreatePasswordForm,
  CreatePINForm,
  ForgotPasswordForm,
  LoginForm,
  VerifyOTPForm,
} from "@/components/shared/forms";
import Link from "next/link";

interface CatchAllProps {
  query: any;
  slug: string;
  title: string;
}

const CatchAll: FC<CatchAllProps> = ({ query, slug, title }) => {
  console.log(slug, query);
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
            {slug === "verify-otp" && <VerifyOTPForm />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;
  const slug = query.slug as string[] | [];
  const validRoutes = [
    "create-password",
    "create-pin",
    "forgot-password",
    "login",
    "verify-otp",
  ];
  let currentRoute: string | null = null;
  let title: string = "Login";

  if (slug && slug.length > 0 && validRoutes.includes(slug[0])) {
    currentRoute = slug[0];
    switch (currentRoute) {
      case "create-password":
        title = "Create password";
        break;
      case "create-pin":
        title = "Create pin";
        break;
      case "forgot-password":
        title = "Forgot password";
        break;
      case "verify-otp":
        title = "Verify OTP";
        break;
    }
  } else {
    currentRoute = "login";
  }

  return {
    props: {
      query,
      slug: currentRoute,
      title,
    },
  };
};

export default CatchAll;
