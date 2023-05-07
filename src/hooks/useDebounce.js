import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
};

const useSearchDebounce = (initialValue, delay) => {
  const [search, setSearch] = useState(initialValue);
  const debouncedSearch = useDebounce(search, delay);
  return [debouncedSearch, setSearch];
};

export default useSearchDebounce;
