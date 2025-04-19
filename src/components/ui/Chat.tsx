import React from 'react';
import { FiCpu } from 'react-icons/fi';
import Link from 'next/link';

export default function FloatingAIButton() {
  return (
    <div className="fixed bottom-6 right-4 z-20 ">
      <Link
        href="/chat"
        className="h-20 w-20 rounded-full bg-neutral-800 flex items-center justify-center"
        aria-label="AI Chat"
      >
        <FiCpu className="h-10 w-10 text-green-500" />
      </Link>
    </div>
  );
}
