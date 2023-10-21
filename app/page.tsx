import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
  return <>
    <header className="py-3 border-b border-text bg-white border-opacity-60 flex justify-between items-center z-50 sticky top-0 w-full ">
      <Link href={"/"} className="font-heading font-bold text-2xl text-text flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-orange-700 mt-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        <span style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Chrem</span>
      </Link>

      <Link href={'/protect'}>
        <Button variant={'outline'}>Create Account</Button>
      </Link>
    </header>
    <section className="w-full max-md:py-12 py-20 2xl:py-32 mx-auto ">
      <Hero />
    </section>

    <section className="w-full max-md:py-12 py-10 mx-auto border rounded-lg ">
    <Features />
    </section>
  </>
}
