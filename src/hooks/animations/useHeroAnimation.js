import { gsap, useGSAP } from "@/lib/gsap/gsap";

export function useHeroAnimation({
  heroRef,
  badgeRef,
  headingRef,
  descriptionRef,
  buttonsRef,
  statsRef,
  previewRef,
  floatingOneRef,
  floatingTwoRef,
}) {
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 25,
        duration: 0.45,
      })

        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 60,
            duration: 0.8,
          },
          "-=0.2",
        )

        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.5,
          },
          "-=0.45",
        )

        .from(
          buttonsRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.5,
          },
          "-=0.35",
        )

        .from(
          statsRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.45,
          },
          "-=0.35",
        )

        .from(
          previewRef.current,
          {
            opacity: 0,
            x: 100,
            rotate: 3,
            duration: 0.9,
          },
          "-=0.55",
        )

        .from(
          floatingOneRef.current,
          {
            opacity: 0,
            y: 25,
            scale: 0.95,
            duration: 0.45,
          },
          "-=0.45",
        );
    },
    {
      scope: heroRef,
    },
  );
}
