import { useContext } from "react";
import { SharedContext } from "@/components/shared";

export const useSharedData = () => {
  const context = useContext(SharedContext);
  if (context === undefined) {
    throw new Error("useSharedData must be used within a SharedProvider");
  }
  return context;
};
