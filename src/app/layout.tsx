import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MD OLIULLAH",
  description:
    "Talal Mahmud, a MERN stack developer specializing in building scalable web applications using REST API,Postgresql ,MongoDB, Express.js, React.js, Next.js and Node.js.",
  keywords: [
    "MD OLIULLAH",
    "MERN stack developer",
    "REST API",
    "PostgreSQL",
    "MongoDB",
    "Express.js",
    "React.js",
    "Next.js",
    "Node.js",
    "Postgresql",
    "Tailwind CSS",
    "Material UI",
    "Chakra UI",
    "Redux",
    "Redux Toolkit",
    "React Query",
    "React Hook Form",
    "Formik",
  ],
  openGraph: {
    images: [
      { url: "oli.jpeg", width: 600, height: 400, alt: "Contact Us Image" },
    ],
  },
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#171717] `}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
