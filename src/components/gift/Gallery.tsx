import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import image4 from "@/assets/4.jpg";
import image5 from "@/assets/5.jpg";
import image6 from "@/assets/6.jpg";
import image7 from "@/assets/7.jpg";
import image8 from "@/assets/8.jpg";
import image9 from "@/assets/9.jpg";
import image10 from "@/assets/10.jpg";
import image11 from "@/assets/11.jpg";
import image12 from "@/assets/12.jpg";
import image13 from "@/assets/13.jpg";
import image14 from "@/assets/14.jpg";
import image15 from "@/assets/15.jpg";
import image16 from "@/assets/16.jpg";
import image17 from "@/assets/17.jpg";
import image18 from "@/assets/18.jpg";

import { Reveal } from "./Reveal";

const images = [
  { src: image1, caption: "De LUSH Experience" },
  { src: image2, caption: "Luxury Stay" },
  { src: image3, caption: "Elegant Interiors" },
  { src: image4, caption: "Breakfast Experience" },
  { src: image5, caption: "Resort Experience" },
  { src: image6, caption: "Premium Hospitality" },
  { src: image7, caption: "Relax & Unwind" },
  { src: image8, caption: "Poolside Experience" },
  { src: image9, caption: "Luxury Suite" },
  { src: image10, caption: "High Tea Experience" },
  { src: image11, caption: "Wellness Experience" },
  { src: image12, caption: "A Moment Together" },
  { src: image13, caption: "Lush Surroundings" },
  { src: image14, caption: "De LUSH Resort" },
  { src: image15, caption: "Gift Experience" },
  { src: image16, caption: "Dining Experience" },
  { src: image17, caption: "Premium Escape" },
  { src: image18, caption: "Memories at De LUSH" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  const close = useCallback(() => {
    setOpen(null);
  }, []);

  const openImage = useCallback((index: number) => {
    setOpen(index);
  }, []);

  // Keyboard navigation for fullscreen gallery
  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }

      if (e.key === "ArrowRight") {
        setOpen((i) =>
          i === null ? i : (i + 1) % images.length,
        );
      }

      if (e.key === "ArrowLeft") {
        setOpen((i) =>
          i === null
            ? i
            : (i - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  // Keep active slide centered
  useEffect(() => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const slide = container.children[current] as HTMLElement;

    if (slide) {
      slide.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [current]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <Reveal className="text-center">
          <p className="text-[0.68rem] tracking-[0.34em] text-muted-foreground uppercase">
            A look inside
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl">
            What your gift{" "}
            <span className="text-gold-gradient italic">
              includes
            </span>
          </h2>

          <div className="rule-gold mx-auto mt-7 w-40" />
        </Reveal>

        {/* Slider */}
        <div className="relative mt-14">

          {/* Previous */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="
              glass-dark
              absolute
              left-2
              top-1/2
              z-20
              -translate-y-1/2
              rounded-full
              p-3
              text-primary-foreground
              shadow-lg
              transition-all
              duration-300
              hover:scale-110
              sm:left-4
            "
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Slides */}
          <div
            ref={sliderRef}
            className="
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              scroll-smooth
              px-[8%]
              pb-4
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
            onTouchStart={(e) => {
              touchX.current = e.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;

              const dx =
                (e.changedTouches[0]?.clientX ?? touchX.current) -
                touchX.current;

              if (dx < -50) next();
              if (dx > 50) prev();

              touchX.current = null;
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  min-w-[82%]
                  snap-center
                  sm:min-w-[60%]
                  md:min-w-[45%]
                  lg:min-w-[38%]
                  xl:min-w-[32%]
                "
              >
                <button
                  type="button"
                  onClick={() => openImage(index)}
                  aria-label={`Open ${img.caption}`}
                  className="
                    relative
                    block
                    aspect-[4/5]
                    w-full
                    overflow-hidden
                    rounded-2xl
                    shadow-soft
                  "
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, oklch(0.22 0.03 45 / 0.8))",
                    }}
                  />

                  {/* Caption */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      bottom-5
                      left-5
                      right-5
                      translate-y-3
                      text-left
                      text-sm
                      tracking-wide
                      text-primary-foreground
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    {img.caption}
                  </span>

                  {/* Image Number */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      right-5
                      top-5
                      rounded-full
                      bg-black/30
                      px-3
                      py-1
                      text-[0.65rem]
                      tracking-[0.15em]
                      text-white
                      backdrop-blur-sm
                    "
                  >
                    {String(index + 1).padStart(2, "0")} / 18
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="
              glass-dark
              absolute
              right-2
              top-1/2
              z-20
              -translate-y-1/2
              rounded-full
              p-3
              text-primary-foreground
              shadow-lg
              transition-all
              duration-300
              hover:scale-110
              sm:right-4
            "
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 px-8">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  current === index
                    ? "w-8 bg-gold"
                    : "w-2 bg-muted-foreground/40"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {open !== null && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-ink/92
            p-4
            backdrop-blur-md
            animate-in
            fade-in
            duration-300
          "
          role="dialog"
          aria-modal="true"
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;

            const dx =
              (e.changedTouches[0]?.clientX ?? touchX.current) -
              touchX.current;

            if (dx < -50) {
              setOpen(
                (i) =>
                  i === null
                    ? i
                    : (i + 1) % images.length,
              );
            }

            if (dx > 50) {
              setOpen(
                (i) =>
                  i === null
                    ? i
                    : (i - 1 + images.length) %
                      images.length,
              );
            }

            touchX.current = null;
          }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="
              absolute
              right-5
              top-5
              z-30
              rounded-full
              p-3
              text-primary-foreground/80
              transition-colors
              hover:text-primary-foreground
            "
          >
            <X className="size-6" />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              setOpen(
                (i) =>
                  i === null
                    ? i
                    : (i - 1 + images.length) %
                      images.length,
              );
            }}
            aria-label="Previous image"
            className="
              glass-dark
              absolute
              left-4
              z-30
              rounded-full
              p-3
              text-primary-foreground
              sm:left-8
            "
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Full Image */}
          <figure
            className="
              flex
              max-h-[90svh]
              max-w-[95vw]
              flex-col
              items-center
              justify-center
              animate-in
              zoom-in-95
              duration-300
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[open].src}
              alt={images[open].caption}
              className="
                max-h-[80svh]
                max-w-[92vw]
                rounded-2xl
                object-contain
              "
            />

            <figcaption
              className="
                mt-4
                text-center
                text-sm
                tracking-wide
                text-primary-foreground/80
              "
            >
              {images[open].caption} · {open + 1} /{" "}
              {images.length}
            </figcaption>
          </figure>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              setOpen(
                (i) =>
                  i === null
                    ? i
                    : (i + 1) % images.length,
              );
            }}
            aria-label="Next image"
            className="
              glass-dark
              absolute
              right-4
              z-30
              rounded-full
              p-3
              text-primary-foreground
              sm:right-8
            "
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      )}
    </section>
  );
}