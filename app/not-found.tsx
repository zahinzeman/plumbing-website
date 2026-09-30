import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-primary flex flex-col items-center justify-center text-center px-4 py-32 text-white">
      <Reveal isHero delay={0.1}>
        <span className="text-[120px] sm:text-[160px] lg:text-[200px] font-bold leading-none tracking-tight text-white select-none">
          404
        </span>
      </Reveal>

      <Reveal isHero delay={0.2} className="mt-2">
        <h2 className="text-[28px] sm:text-[32px] font-bold text-white tracking-[-0.03em]">
          This page does not exist
        </h2>
      </Reveal>

      <Reveal isHero delay={0.3} className="mt-3">
        <p className="text-[16px] text-white/90 max-w-[380px]">
          Try to check the URL or return to our homepage to find the service you need.
        </p>
      </Reveal>

      <Reveal isHero delay={0.4} className="mt-8">
        <Button href="/" variant="secondary" icon className="!h-[48px] !px-7 text-[15px]">
          Go to Home
        </Button>
      </Reveal>
    </div>
  );
}
