import { useEffect } from "react";
import { useState } from "react";

// giảm thiểu hiệu suất dùng cho search
export const useDebounce = (value, delay) => {
  const [valueDebounce, setValueDebounce] = useState("");
  useEffect(() => {
    const handle = setTimeout(() => {
      setValueDebounce(value);
    }, [delay]);
    return () => {
      clearTimeout(handle);
    };
  }, [value]);
  return valueDebounce;
};
