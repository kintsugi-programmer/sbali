"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phno: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.message);
        setFormData({ name: "", email: "", phno: "", subject: "", message: "" });
      } else {
        setResponseMessage(result.message);
      }
    } catch (error) {
      setResponseMessage("An error occurred while sending the email.");
    }
    setLoading(false);
  };

  return (
    
    <div className="relative isolate overflow-hidden px-6 flex flex-col items-center justify-center">

<h1 className="text-2xl md:text-7xl text-center font-bold text-green">
    Reach Out
      </h1>
      <div className="px-3 text-center mb- italic dark:text-neutral-200">
      "Let's create production-ready, human-centered products driven by empathy and innovation."
      </div>
      <section className=" w-full" id="contact">
        <div className="px-4 mx-auto max-w-screen-md">
          <form onSubmit={handleSubmit} className="space-y-2">
            <LabelInputContainer label="Your name" id="name" type="text" value={formData.name} handleChange={handleChange} placeholder="Your Name" />
            <LabelInputContainer label="Your email" id="email" type="email" value={formData.email} handleChange={handleChange} placeholder="Your Email" />
            <LabelInputContainer label="Your Phone No." id="phno" type="text" value={formData.phno} handleChange={handleChange} placeholder="Your Phone No." />
            <LabelInputContainer label="Subject" id="subject" type="text" value={formData.subject} handleChange={handleChange} placeholder="Subject" />
            <LabelInputContainer label="Your message" id="message" isTextarea value={formData.message} handleChange={handleChange} placeholder="Leave a message here.." />
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-green-500 text-green-border-green-500 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            <span className="font-bold" >&gt; </span>{loading ? "Sending..." : "Send message"}
            </button>

          </form>
        </div>
      </section>
    </div>
  );
};

const LabelInputContainer = ({ label, id, type = "text", isTextarea, value, handleChange, placeholder }: { label: string; id: string; type?: string; isTextarea?: boolean; value: string; handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; placeholder: string; }) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-300">
        {label}
      </label>
      {isTextarea ? (
        <textarea id={id} rows={6} value={value} onChange={handleChange} placeholder={placeholder} className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-slate-500 focus:border-slate-500 bg-black/[0.96] border-gray-600 placeholder-gray-400 text-green-400 focus:ring-slate-500 focus:border-slate-500" />
      ) : (
        <input id={id} type={type} value={value} onChange={handleChange} placeholder={placeholder} className="shadow-sm  border  text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 bg-black/[0.96] border-gray-600 placeholder-gray-400 text-green-400 focus:ring-slate-500 focus:border-slate-500 shadow-sm-light" required />
      )}
    </div>
  );
};

export default ContactForm;