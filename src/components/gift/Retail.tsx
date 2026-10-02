import { Gift, Heart, Sparkles, Users, PartyPopper, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const occasions = [
  {
    icon: Heart,
    title: "Wedding anniversaries",
  },
  {
    icon: Gift,
    title: "Milestone birthdays",
  },
  {
    icon: Sparkles,
    title: "Engagements & wedding gifts",
  },
  {
    icon: PartyPopper,
    title: "Festive gifts for close family",
  },
  {
    icon: Users,
    title: "Parents’ special occasions",
  },
  {
    icon: Star,
    title: "Significant personal milestones",
  },
];

export function Retail() {
  return (
    <section
      id="retail"
      className="relative overflow-hidden bg-card py-28 sm:py-36"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Retail gifting
          </p>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            For occasions worth more than an{" "}
            <span className="text-gold-gradient italic">
              ordinary gift
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Thoughtful De LUSH experiences for the people and moments that
            deserve something truly memorable.
          </p>
        </Reveal>

        {/* Occasion cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((occasion, index) => {
            const Icon = occasion.icon;

            return (
              <Reveal key={occasion.title} delay={index * 80}>
                <article
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border
                    bg-background/70
                    p-7
                    shadow-soft
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-gold/40
                    hover:shadow-luxe
                  "
                >
                  {/* Gold accent */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-0.5
                      bg-gradient-gold
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="flex items-start gap-5">
                    <div
                      className="
                        flex
                        size-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gold/30
                        bg-gold/5
                        text-primary
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    >
                      <Icon className="size-5" strokeWidth={1.5} />
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-semibold leading-snug sm:text-2xl">
                        {occasion.title}
                      </h3>

                      <div className="mt-4 h-px w-10 bg-gradient-gold transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom statement */}
        <Reveal delay={500} className="mt-16 text-center">
          <p className="mx-auto max-w-2xl font-display text-xl italic text-muted-foreground sm:text-2xl">
            Give them a moment they can experience, not just unwrap.
          </p>

          <a
            href="#enquire"
            className="
              mt-7
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-gradient-gold
              px-8
              py-3.5
              text-sm
              font-medium
              uppercase
              tracking-[0.16em]
              text-ink
              shadow-gold
              transition-transform
              duration-300
              hover:-translate-y-0.5
            "
          >
            Find their experience
          </a>
        </Reveal>
      </div>
    </section>
  );
}