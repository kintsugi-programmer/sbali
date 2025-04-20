'use client'
import { motion } from "framer-motion";
import { useRef, useState } from "react";

type ListOrderItem = "front" | "middle" | "back";

const Testimonials = () => {
  const [order, setOrder] = useState<ListOrderItem[]>([
    "front",
    "middle",
    "back",
  ]);

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop() as ListOrderItem);
    setOrder(orderCopy);
  };

  return (
    <div className="grid place-content-center overflow-hidden  px-8 py-24 text-slate-50">
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        <Card
          imgUrl="/testimonials/Pragma.png"
          testimonial="Siddhant combined creative design with technical precision to deliver a high-quality research lab website. His leadership and reliability left a lasting impact on our project outcomes."
          author="Dr. Pragma Kar - Director, PerSIsst Lab, IIIT Delhi"
          handleShuffle={handleShuffle}
          position={order[0]}
        />
        <Card
          imgUrl="/testimonials/Binu.jpeg"
          testimonial="Siddhant showcased strong leadership and full-stack web development skills during multiple high-impact departmental projects. His ability to integrate DevOps with scalable design made him a valuable asset to our team."
          author="Ms. Binu Ann Joseph - Admin, HCD, IIIT Delhi"
          handleShuffle={handleShuffle}
          position={order[1]}
        />
        <Card
          imgUrl="/testimonials/csbhatiya.webp"
          testimonial="Siddhant developed fast, user-focused websites using modern UI/UX and secure backend practices. His technical depth and design thinking consistently exceeded expectations across all deliverables."
          author="CA Chintan S. Bhatiya - Director, C S Bhatiya & Associates"
          handleShuffle={handleShuffle}
          position={order[2]}
        />
      </div>
    </div>
  );
};

interface CardProps {
  handleShuffle: Function;
  testimonial: string;
  position: ListOrderItem;
  imgUrl: string;
  author: string;
}

const Card = ({
  handleShuffle,
  testimonial,
  position,
  imgUrl,
  author,
}: CardProps) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e: MouseEvent) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e: MouseEvent) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={imgUrl}
        alt={`Image of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-slate-400">
        "{testimonial}"
      </span>
      <span className="text-center text-sm font-medium text-indigo-400">
        {author}
      </span>
    </motion.div>
  );
};

export default Testimonials;