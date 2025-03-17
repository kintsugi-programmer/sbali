'use client'
import { useAnimate } from "framer-motion";
import React, { MouseEventHandler, ReactNode, useRef } from "react";
import { FiMousePointer } from "react-icons/fi";

export const ImgCursor = () => {
  return (<>      <h1 className="text-2xl md:text-7xl text-center font-bold text-green">
    Eyes Before Lens
    </h1>
    <div className="px-3 text-center my-4 italic dark:text-neutral-200">
    "Trying to capture the moments I see before the camera does."
    </div>
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/Capture/1.webp",
        "/Capture/2.webp",
        "/Capture/3.webp",
        "/Capture/4.jpg",
        "/Capture/5.webp",
        "/Capture/6.webp",
        "/Capture/7.webp",
        "/Capture/10.webp",
        "/Capture/20230502_135537.webp",
        "/Capture/20230517_153903.webp"
      ]}
    >
      <section className="grid h-screen w-full place-content-center" id="captures">
        <p className="flex items-center gap-2 text-3xl font-bold uppercase text-green-400">
          <FiMousePointer />
          <span>Hover me</span>
        </p>
      </section>
    </MouseImageTrail></>
  );
};

const MouseImageTrail = ({
    children,
    images,
    renderImageBuffer,
    rotationRange,
  }: {
    children: ReactNode;
    images: string[];
    renderImageBuffer: number;
    rotationRange: number;
  }) => {
    const [scope, animate] = useAnimate();
    const lastRenderPosition = useRef({ x: 0, y: 0 });
    const imageRenderCount = useRef(0);
    const [isLoaded, setIsLoaded] = React.useState(false);
  
    // Preload images
    React.useEffect(() => {
      const loadImage = (src: string) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
        });
  
      Promise.all(images.map(loadImage)).then(() => setIsLoaded(true));
    }, [images]);
  
    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
      if (!isLoaded) return; // Prevent rendering if images are not loaded
  
      const { clientX, clientY } = e;
  
      const distance = calculateDistance(
        clientX,
        clientY,
        lastRenderPosition.current.x,
        lastRenderPosition.current.y
      );
  
      if (distance >= renderImageBuffer) {
        lastRenderPosition.current.x = clientX;
        lastRenderPosition.current.y = clientY;
  
        renderNextImage();
      }
    };
  
    const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
      const deltaX = x2 - x1;
      const deltaY = y2 - y1;
      return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };
  
    const renderNextImage = () => {
      const imageIndex = imageRenderCount.current % images.length;
      const selector = `[data-mouse-move-index="${imageIndex}"]`;
      const el = document.querySelector(selector) as HTMLElement;
  
      el.style.top = `${lastRenderPosition.current.y}px`;
      el.style.left = `${lastRenderPosition.current.x}px`;
      el.style.zIndex = imageRenderCount.current.toString();
  
      const rotation = Math.random() * rotationRange;
  
      animate(
        selector,
        {
          opacity: [0, 1],
          transform: [
            `translate(-50%, -25%) scale(0.5) ${
              imageIndex % 2 ? `rotate(${rotation}deg)` : `rotate(-${rotation}deg)`
            }`,
            `translate(-50%, -50%) scale(1) ${
              imageIndex % 2 ? `rotate(-${rotation}deg)` : `rotate(${rotation}deg)`
            }`,
          ],
        },
        { type: "spring", damping: 15, stiffness: 200 }
      );
  
      animate(
        selector,
        { opacity: [1, 0] },
        { ease: "linear", duration: 0.5, delay: 5 }
      );
  
      imageRenderCount.current++;
    };
  
    return (
      <div ref={scope} className="relative overflow-hidden" onMouseMove={handleMouseMove}>
        {children}
        {images.map((img, index) => (
          <img
            className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
            src={img}
            alt={`Mouse move image ${index}`}
            key={index}
            data-mouse-move-index={index}
          />
        ))}
        {!isLoaded && <p className="text-center text-gray-500">Loading images...</p>}
      </div>
    );
  };
  