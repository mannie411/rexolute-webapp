import localFont from "next/font/local";
import { Inter, Onest, Poppins, Roboto } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});

export const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const fontMapper = {
  "font-onest": onest.variable,
  "font-inter": inter.variable,
  "font-poppins": poppins.variable,
};
