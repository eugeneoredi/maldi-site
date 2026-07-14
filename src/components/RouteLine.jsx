import { useScroll, useSpring, useTransform, motion } from "framer-motion";

export default function RouteLine() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.3 });
  const top = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="fixed right-6 md:right-10 top-[14vh] h-[72vh] w-6 hidden lg:block z-40 pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative h-full w-px mx-auto">
        <div
          className="absolute inset-0 w-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(11,46,54,0.25) 0, rgba(11,46,54,0.25) 3px, transparent 3px, transparent 9px)",
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-px bg-rust origin-top h-full"
          style={{ scaleY: smooth }}
        />
        <motion.svg
          viewBox="0 0 20 20"
          className="absolute -left-[9px] w-[19px] h-[19px] drop-shadow-sm"
          style={{ top }}
        >
          <path d="M10 1 L14 13 L6 13 Z" fill="#c1662f" />
          <rect x="9" y="13" width="2" height="5" fill="#0b2e36" />
        </motion.svg>
      </div>
    </div>
  );
}
