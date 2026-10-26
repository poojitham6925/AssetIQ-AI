import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}