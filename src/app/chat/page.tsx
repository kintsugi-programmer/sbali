'use client'
import React, { useEffect, useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
}

export default function ChatPage() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Welcome message
  useEffect(() => {
    setMessages([
      {
        role: 'bot',
        content: 'Hi! I`m Siddhant Bali`s AI persona. Ask me anything about him or his work. I`ll be happy to assist you.',
      },
    ]);
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    const container = containerRef.current;
    if (container) container.scrollTop = container.scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    const text = query.trim();
    if (!text) return;

    // Add user message locally
    const userMsg: ChatMessage = { role: 'user', content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setQuery('');

    try {
      // Send entire conversation to API
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      });
      const { answer } = await res.json();

      // Append bot response
      const botMsg: ChatMessage = {
        role: 'bot',
        content: answer || 'Sorry, something went wrong.',
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: 'Error communicating with server.' },
      ]);
    }
  };

  return (
    <div className="max-w-screen h-auto mx-auto p-6">
         <Card className="bg-black border-0 w-full max-w-3xl mx-auto">

        <CardContent className="space-y-4 p-6">
          <h2 className="text-5xl font-bold text-green-400">
            KintsugiAI 👾
          </h2>
<p className='max-w-4xl text-justify text-base md:text-xl mt-8 text-green-300'>          have a chat with my AI to know more about me!
</p>          

<div
  ref={containerRef}
  className="flex flex-col gap-3 overflow-y-auto p-3 max-h-[500px] border-dashed border-2 border-white rounded-xl"
>
  {messages.map((msg, i) => (
    <div
      key={i}
      className={`flex ${
        msg.role === 'bot' ? 'justify-start' : 'justify-end'
      }`}
    >
      <div
        className={[
          'inline-block px-4 py-2 max-w-[70%] break-words shadow',
          msg.role === 'bot'
            ? 'bg-gray-100 text-gray-800 rounded-tr-none rounded-xl'
            : 'bg-blue-500 text-white rounded-tl-none rounded-xl',
        ].join(' ')}
      >
        {msg.content}
      </div>
    </div>
  ))}
</div>
<div className="flex flex-row gap-2 w-full">
  {/* 1) wrapper is flex‑1 */}
  <div className="flex-1">
    {/* 2) input fills its parent */}
    <Input
      className="w-full"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Type your message..."
      onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
    />
  </div>

  <button
    onClick={sendMessage}
    className="md:block hidden shadow-[0_0_0_3px_#000000_inset] px-6 py-2 text-green-400 bg-transparent border border-green-500 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
  >
    <span className="font-bold">&gt; </span>Send
  </button>
</div>

        </CardContent>
      </Card>
    </div>
  );
}