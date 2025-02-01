"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

type CardType = {
  id: number;
  content: JSX.Element;
  className: string;
  thumbnail: string;
};

type SkeletonProps = {
  title: string;
  quote: string;
};

type CardSectionProps = {
  cards: CardType[];
};

const Capture = () => {
  return (
    <section className="py-40" id="captures">
      <div className="h-screen w-full">
      <h1 className="text-2xl md:text-7xl text-center font-bold text-green">
      Eyes Before Lens
      </h1>
      <div className="px-3 text-center my-4 italic dark:text-neutral-200">
      "Trying to capture the moments I see before the camera does."
      </div>
        <CardSection cards={cards.slice(0, 4)} />
        <CardSection cards={cards.slice(4, 8)} />
        <CardSection cards={cards.slice(8, 14)} />
      </div>
    </section>
  );
};

export default Capture;

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  return <LayoutGrid cards={cards} />;
};

const Skeleton: React.FC<SkeletonProps> = ({ title, quote }) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 italic">"{quote}"</p>
    </div>
  );
};

const cards: CardType[] = [
  { id: 1, content: <Skeleton title="Nature's Web" quote="Every leaf speaks bliss to me, fluttering from the autumn tree." />, className: "md:col-span-2", thumbnail: "/Capture/1.webp" },
  { id: 2, content: <Skeleton title="City Lights" quote="The city lights shine like a million dreams waiting to be realized." />, className: "col-span-1", thumbnail: "/Capture/2.webp" },
  { id: 3, content: <Skeleton title="Shadow Play" quote="Where there is light, there must be shadow." />, className: "col-span-1", thumbnail: "/Capture/3.webp" },
  { id: 7, content: <Skeleton title="Illuminated Path" quote="There is always light, if only we're brave enough to see it." />, className: "md:col-span-2", thumbnail: "/Capture/6.webp" },

  { id: 10, content: <Skeleton title="Park Evening" quote="Evenings are life’s way of saying that you are closer to your dreams." />, className: "md:col-span-2", thumbnail: "/Capture/9.webp" },
  { id: 4, content: <Skeleton title="Mystic Moon" quote="The moon is a friend for the lonesome to talk to." />, className: "col-span-1", thumbnail: "/Capture/4.jpg" },
  { id: 5, content: <Skeleton title="Sunset Bliss" quote="The sky broke like an egg into full sunset and the water caught fire." />, className: "col-span-1", thumbnail: "/Capture/4.webp" },
  { id: 6, content: <Skeleton title="Green Canopy" quote="Look deep into nature, and then you will understand everything better." />, className: "md:col-span-2", thumbnail: "/Capture/5.webp" },

  { id: 8, content: <Skeleton title="Book Nook" quote="A room without books is like a body without a soul." />, className: "col-span-1", thumbnail: "/Capture/7.webp" },
  { id: 9, content: <Skeleton title="Golden Hour" quote="Happiness is... the golden hour glow." />, className: "col-span-1", thumbnail: "/Capture/8.webp" },
  { id: 11, content: <Skeleton title="Sky Burst" quote="Every cloud has a silver lining." />, className: "col-span-1", thumbnail: "/Capture/10.webp" },
  
  { id: 12, content: <Skeleton title="Moonlit Silhouette" quote="There are nights when the wolves are silent and only the moon howls." />, className: "col-span-1", thumbnail: "/Capture/11.webp" },
  { id: 13, content: <Skeleton title="Dome Experience" quote="The universe is under no obligation to make sense to you." />, className: "col-span-1", thumbnail: "/Capture/20230502_135537.webp" },
  { id: 14, content: <Skeleton title="Sunflower Glow" quote="Keep your face always toward the sunshine—and shadows will fall behind you." />, className: "col-span-1", thumbnail: "/Capture/20230517_153903.webp" }
];
