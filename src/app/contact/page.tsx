import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for collaboration, freelance work, or custom AI agent/automation project inquiries.",
};

export default function ContactPage() {
  return <ContactForm />;
}
