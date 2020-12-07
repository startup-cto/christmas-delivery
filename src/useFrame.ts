import { useEffect, useState } from "react";

export function useFrame(frames: number) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((frame) => (frame + 1) % frames);
    }, 100);
    return () => clearInterval(timer);
  }, [frames, setFrame]);
  return frame;
}
