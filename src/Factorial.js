import { useMemo } from "react";

const Factorial = ({ number }) => {
  const computeFactorial = (num) => {
    if (num === 0) {
      return 1;
    }
    return num * computeFactorial(num - 1);
  };

  return useMemo(() => {
    return computeFactorial(number);
  }, [number]);
};

export default Factorial;
