import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return <>
    <header className="py-3 border-b border-text bg-white border-opacity-60 flex justify-between items-center z-10 sticky top-0 w-full ">
      <Link href={"/protect"} className="font-heading font-bold text-2xl text-text flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-orange-700 mt-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        <span style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Chrem</span>
      </Link>

      <UserButton afterSignOutUrl="/" />
    </header>

    <section className="w-full min-h-screen max-md:py-12 py-20 2xl:py-48 mx-auto">
      <h2 className="text-3xl font-bold sm:text-4xl">
        The contents of this page have gone fishing. Please come back when they return.
      </h2>
    </section>
  </>
}