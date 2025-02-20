"use client";

import { useState, useEffect } from "react";

export default function TimeLeft() {
  const targetDate = new Date("2025-02-21T08:30:00Z").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="w-20 h-20 md:w-32 md:h-32 grid items-center bg-background/5 backdrop-blur-lg py-2 border border-border rounded-lg shadow-lg text-center hover:scale-105 transition-all duration-500">
        <h3 className="text-3xl md:text-6xl text-accent">{timeLeft.days}</h3>
        <span className="text-[0.6rem] md:text-base">Days</span>
      </div>

      <div className="w-20 h-20 md:w-32 md:h-32 grid items-center bg-background/5 backdrop-blur-lg py-2 border border-border rounded-lg shadow-lg text-center hover:scale-105 transition-all duration-500">
        <h3 className="text-3xl md:text-6xl text-accent">{timeLeft.hours}</h3>
        <span className="text-[0.6rem] md:text-base">Hours</span>
      </div>

      <div className="w-20 h-20 md:w-32 md:h-32 grid items-center bg-background/5 backdrop-blur-lg py-2 border border-border rounded-lg shadow-lg text-center hover:scale-105 transition-all duration-500">
        <h3 className="text-3xl md:text-6xl text-accent">{timeLeft.minutes}</h3>
        <span className="text-[0.6rem] md:text-base">Minutes</span>
      </div>

      <div className="w-20 h-20 md:w-32 md:h-32 grid items-center bg-background/5 backdrop-blur-lg py-2 border border-border rounded-lg shadow-lg text-center hover:scale-105 transition-all duration-500">
        <h3 className="text-3xl md:text-6xl text-accent">{timeLeft.seconds}</h3>
        <span className="text-[0.6rem] md:text-base">Seconds</span>
      </div>
    </div>
  );
}
