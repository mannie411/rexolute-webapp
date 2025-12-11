import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FileType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFileType = (url: string): FileType => {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.endsWith(".pdf")) return "pdf";
  if (/\.(png|jpg|jpeg|webp|gif)$/.test(lowerUrl)) return "image";
  if (/\.(doc|docx|txt|csv|xls|xlsx)$/i.test(lowerUrl)) return "doc";
  return "unsupported";
};
