import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primary-gradient w-full h-screen max-w-[1250px] mx-auto">
      {children}
    </div>
  );
}
