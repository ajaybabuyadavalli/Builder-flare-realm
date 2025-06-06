import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RippleCardProps {
  children: ReactNode;
  className?: string;
  rippleColor?: string;
}

export const RippleCard = ({
  children,
  className,
  rippleColor = "rgba(255, 255, 255, 0.6)",
}: RippleCardProps) => {
  const [ripples, setRipples] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  };

  return (
    <motion.div
      className={cn("relative overflow-hidden cursor-pointer", className)}
      onClick={createRipple}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
      {ripples.map(({ x, y, id }) => (
        <motion.div
          key={id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: x - 25,
            top: y - 25,
            width: 50,
            height: 50,
            backgroundColor: rippleColor,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </motion.div>
  );
};
