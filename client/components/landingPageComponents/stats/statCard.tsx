import { useEffect, useState } from "react";

interface ComponentProps {
  stat: {
    title: string;
    statNumber: number;
    statTimer: number;
  };
}

export default function StatCard({ stat }: ComponentProps) {
  const [number, setNumber] = useState<number>(0);
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (number < stat.statNumber) {
      timer = setInterval(() => {
        setNumber((prev) => {
          if (prev >= stat.statNumber) {
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, stat.statTimer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [number, stat.statNumber, stat.statTimer]);

  return (
    <div className="text-white text-center font-rubik space-y-3">
      <p className="text-5xl font-medium text-pink-600">{number}+</p>
      <p className="text-xl">{stat.title}</p>
    </div>
  );
}
