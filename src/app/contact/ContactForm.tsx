"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowLeft, IconCircleCheck } from "@tabler/icons-react";
import { InteractiveHoverButton } from "@/components/ui/int-hover-btn";
import { motion, AnimatePresence } from "motion/react";

import { sendContactMessage } from "./actions";
import { haptic } from "@/lib/haptic";
import { SectionHeader } from "@/components/ui/sec-header";

export default function ContactForm() {
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    haptic();
    if (loading) return;
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const formData = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      message: data.get("message") as string,
    };

    try {
      const res = await sendContactMessage(formData);

      if (res.success) {
        setShowToast(true);
        form.reset();
        setTimeout(() => setShowToast(false), 2000);
      } else {
        alert(
          res.error ||
            "Something went wrong while sending the message. Please try again.",
        );
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-8 pt-2 pb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Top Bar */}
      <div className="flex items-center">
        <Link
          href="/"
          onClick={() => haptic()}
          className="flex items-center gap-1.5 text-xs font-mono font-bold border border-border/80 bg-muted/30 px-3 py-1 text-muted-foreground rounded-full hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer select-none w-fit"
        >
          <IconArrowLeft className="size-3.5 select-none" />
          <span>HOME</span>
        </Link>
      </div>

      <section className="flex min-h-0 flex-col gap-y-4">
        <SectionHeader>Let&apos;s Connect</SectionHeader>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-xs font-bold font-mono text-muted-foreground tracking-widest"
            >
              NAME
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="What should I call you?"
              required
              className="w-full bg-muted/35 border border-border/80 focus:border-primary focus:bg-muted/50 rounded-lg outline-none px-4 py-3.5 text-sm font-mono text-foreground placeholder:text-muted-foreground/50 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs font-bold font-mono text-muted-foreground tracking-widest"
            >
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="How can I contact you?"
              required
              className="w-full bg-muted/35 border border-border/80 focus:border-primary focus:bg-muted/50 rounded-lg outline-none px-4 py-3.5 text-sm font-mono text-foreground placeholder:text-muted-foreground/50 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-xs font-bold font-mono text-muted-foreground tracking-widest"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              required
              rows={5}
              className="w-full bg-muted/35 border border-border/80 focus:border-primary focus:bg-muted/50 rounded-lg outline-none px-4 py-3.5 text-sm font-mono text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 resize-none"
            />
          </div>

          <div className="pt-2">
            <InteractiveHoverButton type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </InteractiveHoverButton>
          </div>
        </form>
      </section>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 px-6 rounded-full border border-transparent bg-foreground text-background font-semibold text-sm whitespace-nowrap max-w-[90vw] animate-in fade-in zoom-in-95 duration-300"
          >
            <IconCircleCheck className="size-4 text-background shrink-0" />
            <span>Message Sent!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
