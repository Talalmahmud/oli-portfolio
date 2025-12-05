import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Talal Mahmud",
  description:
    "Get in touch with us for any inquiries or support. We are here to help you with your needs.",
  keywords: ["contact", "support", "inquiry", "help"],
  authors: [{ name: "Talal Mahmud" }],
  openGraph: {
    title: "Contact Us - Talal Mahmud",
    description:
      "Get in touch with us for any inquiries or support. We are here to help you with your needs.",
    type: "website",
    url: "https://talalmahmud.vercel.app/contact",
    images: [
      {
        url: "talal.jpg",
        width: 600,
        height: 400,
        alt: "Contact Us Image",
      },
    ],
  },
};

const ContactPage = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default ContactPage;
