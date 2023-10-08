import { useEffect, useState } from 'react';

interface ICountDown {
  seconds: number;
}
const useCountdown = ({ seconds }: ICountDown) => {
  const [remainingSeconds, setRemainingSeconds] = useState<number>(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          // Handle countdown completion here
          return prevSeconds;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return getReturnValues(remainingSeconds);
};

const getReturnValues = (remainingSeconds: number) => {
  const formattedSeconds = (remainingSeconds % 60).toString().padStart(2, '0');

  return [formattedSeconds];
};

export default useCountdown;
