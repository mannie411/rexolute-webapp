import { GetServerSideProps } from "next/types";
import { AdminAuthLayout as Page } from "@/components/admin/layout";

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

export default Page;
