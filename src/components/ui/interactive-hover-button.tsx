'use client';
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  hoverActive?: boolean;
}

export function InteractiveHoverButton({ text = "Button", className, hoverActive = false, ...props }: InteractiveHoverButtonProps) {
  const [internalHover, setInternalHover] = useState(false);

  useEffect(() => {
    if (hoverActive) {
      // 약간의 지연 후 애니메이션 트리거
      const timer = setTimeout(() => setInternalHover(true), 10);
      return () => clearTimeout(timer);
    } else {
      setInternalHover(false);
    }
  }, [hoverActive]);

  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center cursor-pointer overflow-hidden rounded-2xl border border-black bg-white text-black transition-all h-[50px] px-4 text-base font-medium",
        "hover:bg-black hover:text-white",
        className,
      )}
      data-hover={internalHover ? 'true' : undefined}
      {...props}
    >
        {/* 원 - 왼쪽에 위치 */}
        <div className={cn(
          "absolute left-3 top-1/2 h-2 w-2 -translate-y-1/2 translate-y-[-5px] scale-[1] rounded-full bg-black transition-all duration-300 z-10 ",
          "group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:translate-y-0",
          "group-data-[hover=true]:left-0 group-data-[hover=true]:top-0 group-data-[hover=true]:h-full group-data-[hover=true]:w-full group-data-[hover=true]:scale-[1.8] group-data-[hover=true]:translate-y-0"
        )}></div>
      
      {/* 기본 텍스트 - 원 오른쪽에 위치 */}
      <span className={cn(
        "inline-block ml-4 transition-all duration-300 text-black relative z-20 flex items-center",
        "group-hover:translate-x-12 group-hover:opacity-0",
        "group-data-[hover=true]:translate-x-12 group-data-[hover=true]:opacity-0"
      )}>
        {text}
      </span>
      
      {/* hover 시 나타나는 텍스트와 화살표 */}
      <div className={cn(
        "absolute top-0 z-30 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300",
        "group-hover:-translate-x-1 group-hover:opacity-100",
        "group-data-[hover=true]:-translate-x-1 group-data-[hover=true]:opacity-100"
      )}>
        <span className="text-white ml-4">{text}</span>
        <ArrowRight className="text-white" />
      </div>
    </button>
  );
}