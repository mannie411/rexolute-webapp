import { useState } from "react";

export const useErrorHandler = () => {
  const [error, setError] = useState(null);

  const handleError = (err: any) => {
    setError(err);
  };

  return { error, handleError };
};
