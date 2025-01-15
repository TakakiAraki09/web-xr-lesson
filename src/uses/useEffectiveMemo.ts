import { DependencyList, useEffect, useState } from "react";

export const useEffectiveMemo = <T>(callback: () => T, deps: DependencyList) => {
  const [value, setValue] = useState<T | null>(null);
  useEffect(() => {
    const value = callback();
    setValue(value);
  }, deps);
  return value;
};
