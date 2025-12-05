"use client";
import { sendEmail } from "@/utils/action";
import React, { useState, useEffect } from "react";

import Confetti from "react-confetti";
import toast, { Toaster } from "react-hot-toast";

interface User {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [user, setUser] = useState<User>({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  // const sendMail = async () => {
  //   setShowConfetti(true);
  //   setTimeout(() => setShowConfetti(false), 8000);
  //   if (!user.name || !user.email || !user.message) {
  //     toast.error("⚠️ Please fill out all fields before submitting.");
  //     return;
  //   }

  //   setIsSending(true);

  //   try {
  //     const res = await sendEmail(user);
  //     if (res?.success) {
  //       setShowConfetti(true);
  //       setTimeout(() => setShowConfetti(false), 4000);

  //       toast.success("🎉 Thanks for reaching out! I'll contact you soon.");
  //       setUser({ name: "", email: "", message: "" }); // Reset form
  //     } else {
  //       toast.error("❌ Failed to send your message. Please try again later.");
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     toast.error("⚠️ Sorry, there was a technical issue!");
  //   } finally {
  //     setIsSending(false);
  //   }
  // };
  const sendMail = async () => {
    if (!user.name || !user.email || !user.message) {
      toast.error("⚠️ Please fill out all fields before submitting.");
      return;
    }

    setIsSending(true);

    try {
      const res = await sendEmail(user);
      if (res?.success) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);

        toast.success("🎉 Thanks for reaching out! I'll contact you soon.");
        setUser({ name: "", email: "", message: "" }); // Reset form
      } else {
        toast.error("❌ Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("⚠️ Sorry, there was a technical issue!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="py-6 flex items-center justify-center">
      <Toaster position="top-center" />
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      <div className="w-full max-w-lg p-8 bg-gray-900 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>

        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            value={user.message}
            onChange={(e) => setUser({ ...user, message: e.target.value })}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            rows={4}
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="button"
          onClick={sendMail}
          className={`w-full p-3 bg-green-600 text-slate-100 font-bold rounded-lg hover:bg-green-500 transition ${
            isSending ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </div>
  );
};

export default Contact;
