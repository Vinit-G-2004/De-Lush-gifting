import { Gift, Sparkles } from "lucide-react";
import heroImg from "@/assets/3.jpg";
import voucherImg from "@/assets/10.jpg";
import logo from "@/assets/logo.png";
import { useParallax } from "@/hooks/use-reveal";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function Hero() {
  const y = useParallax(0.22);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden tilt-stage">

      {/* Background */}
      <div
        className="absolute inset-0 -z-20 scale-110"
        style={{
          transform: `translate3d(0, ${y}px, 0) scale(1.12)`,
        }}
      >
        <img
          src={heroImg}
          alt="De LUSH Resort at golden hour"
          width={1920}
          height={1200}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Hero Overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "var(--gradient-hero)",
        }}
      />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center gap-12 px-6 py-28 lg:flex-row lg:items-center lg:gap-16">

        {/* Left Content */}
        <div className="flex-1">

          {/* De LUSH Logo */}
          <Reveal>
            <div className="mb-7">
              <img
                src={logo}
                alt="De LUSH Resort"
                width={220}
                height={100}
                className="
                  h-auto
                  w-[170px]
                  object-contain
                  sm:w-[200px]
                  lg:w-[220px]
                "
              />
            </div>
          </Reveal>

          {/* Location / Brand Badge */}
          <Reveal delay={80}>
            <span
              className="
                glass-dark
                inline-flex
                items-center
                gap-2
                rounded-full
                px-5
                py-2.5
                text-sm
                font-semibold
                tracking-[0.24em]
                text-primary-foreground
                uppercase
              "
            >
              <Sparkles className="size-4" />
              De LUSH Resort · Bavdhan, Pune
            </span>
          </Reveal>

          {/* Main Heading */}
          <Reveal delay={160}>
            <h1
              className="
                mt-7
                font-display
                text-5xl
                font-bold
                leading-[1.02]
                tracking-tight
                text-primary-foreground
                sm:text-6xl
                lg:text-8xl
              "
            >
              Gifting an
              <span className="text-gold-gradient block italic">
                Experience
              </span>
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal delay={260}>
            <p
              className="
                mt-7
                max-w-xl
                text-lg
                font-medium
                leading-relaxed
                text-primary-foreground/90
                sm:text-xl
              "
            >
              Some gifts are unwrapped. Ours are remembered. Give someone you
              love a slow morning, a candlelit dinner and a night away — just
              twenty minutes from the city.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#packages"
                className="
                  bg-gradient-gold
                  shadow-gold
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  px-8
                  py-4
                  text-base
                  font-semibold
                  tracking-wide
                  text-ink
                  transition-transform
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                <Gift className="size-5" />
                Explore gift packages
              </a>
            </div>
          </Reveal>
        </div>

        {/* Voucher Card */}
        <Reveal
          delay={260}
          className="flex-1"
        >
          <TiltCard
            max={11}
            className="animate-float-slow mx-auto max-w-sm"
          >
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">

              {/* Gold Glow */}
              <div
                className="
                  animate-ribbon
                  pointer-events-none
                  absolute
                  -top-16
                  -right-16
                  size-52
                  rounded-full
                  blur-3xl
                "
                style={{
                  backgroundImage: "var(--gradient-gold)",
                }}
              />

              {/* Voucher Image */}
              <img
                src={voucherImg}
                alt="De LUSH gift voucher presentation box"
                width={1024}
                height={1280}
                loading="lazy"
                className="
                  aspect-4/5
                  w-full
                  rounded-[1.6rem]
                  object-cover
                "
              />

              {/* Voucher Text */}
              <div className="tilt-layer relative px-4 pt-5 pb-4">

                <p
                  className="
                    text-sm
                    font-semibold
                    tracking-[0.3em]
                    text-muted-foreground
                    uppercase
                  "
                >
                  The De LUSH Gift Voucher
                </p>

                <p className="font-display mt-2 text-2xl font-semibold">
                  Experience worth remembering.
                </p>

              </div>
            </div>
          </TiltCard>
        </Reveal>

      </div>
    </section>
  );
}