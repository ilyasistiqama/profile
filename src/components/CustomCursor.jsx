import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/components/custom_cursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tailPosition, setTailPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(0);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const targetPositionRef = useRef({ x: 0, y: 0 });
  const displayPositionRef = useRef({ x: 0, y: 0 });
  const tailPositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      targetPositionRef.current = newPosition;
      setIsHidden(false);

      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON"
      );
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      const target = targetPositionRef.current;
      const current = displayPositionRef.current;
      const dx = target.x - current.x;
      const dy = target.y - current.y;
      const nextPosition = {
        x: current.x + dx * 0.18,
        y: current.y + dy * 0.18,
      };

      displayPositionRef.current = nextPosition;
      setPosition(nextPosition);
      setDirection(Math.atan2(dy, dx) * (180 / Math.PI));

      const tailCurrent = tailPositionRef.current;
      const nextTail = {
        x: tailCurrent.x + (nextPosition.x - tailCurrent.x) * 0.12,
        y: tailCurrent.y + (nextPosition.y - tailCurrent.y) * 0.12,
      };
      tailPositionRef.current = nextTail;
      setTailPosition(nextTail);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  if (typeof window !== "undefined" && window.innerWidth <= 768) return null;

  return (
    <>
      <div
        className={`custom-cursor-tail ${isHidden ? "hidden" : ""} ${
          isPointer ? "pointer-active" : ""
        }`}
        style={{ left: `${tailPosition.x}px`, top: `${tailPosition.y}px` }}
      />
      <div
        className={`custom-cursor-follower ${isHidden ? "hidden" : ""} ${
          isPointer ? "pointer-active" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) rotate(${direction}deg)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
