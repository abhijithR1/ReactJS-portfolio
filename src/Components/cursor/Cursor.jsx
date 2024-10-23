import { useEffect, useRef } from "react";
import "./cursor.scss";
import { motion } from "framer-motion";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const mouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursor) {
        cursor.style.transform = `translate(${x + 10}px, ${y + 10}px)`;
      }
    };

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => mouseMove(e));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <motion.div className="cursor" ref={cursorRef} />;
};

export default Cursor;
