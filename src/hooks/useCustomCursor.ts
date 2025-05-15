import { useEffect } from "react";

const useCustomCursor = () => {
  useEffect(() => {
    const isTouchDevice = () =>
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice()) return;

    const cursor = document.getElementById("custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const addPulse = () => {
      if (cursor) {
        cursor.classList.add("pulse");
        setTimeout(() => cursor.classList.remove("pulse"), 400);
      }
    };

    const handleDrag = () => {
      if (cursor) cursor.classList.add("dragging");
    };

    const handleDragEnd = () => {
      if (cursor) cursor.classList.remove("dragging");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", addPulse);
    document.addEventListener("dragstart", () => {
      addPulse();
      handleDrag();
    });
    document.addEventListener("mouseup", handleDragEnd);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", addPulse);
      document.removeEventListener("dragstart", handleDrag);
      document.removeEventListener("mouseup", handleDragEnd);
    };
  }, []);
};

export default useCustomCursor;