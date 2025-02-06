import { ReactNode } from "react";

interface eventProps {
  event: {
    name: string;
    icon: ReactNode;
    description: string;
  };
}

export default function EventCard({ event }: eventProps) {
  return (
    <div className="flex justify-center w-44 h-44 md:w-80 md:h-80 bg-background/5 backdrop-blur-lg rounded-xl border border-border shadow-lg hover:scale-105 transition-all duration-500">
      <div className="grid grid-rows-2 md:grid-rows-3 gap-4 items-end justify-center text-center py-8 px-4">
        <div className="flex justify-center text-accent">{event.icon}</div>
        <h3 className="text-xl md:text-4xl">{event.name}</h3>
        <p className="hidden md:block text-sm">{event.description}</p>
      </div>
    </div>
  );
}
