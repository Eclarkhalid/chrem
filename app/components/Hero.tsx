import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return <>
    <div className="container px-4 md:px-6 border rounded-lg ">
      <div className="grid gap-6 items-center py-8">
        <div className="flex flex-col justify-center space-y-16 2xl:space-y-28 text-center p-4">
          <div>
            <Badge variant="outline">Get more works from the creator: &nbsp; <Link href={'https://portfolio-eclarkhalid.vercel.app/projects'} className="text-blue-600">Eclar Khalid</Link></Badge>
          </div>
          <div className="space-y-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bold font-poppins leading-10 my-4">
              Get Everything You Need In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-orange-500 text-bold">One</span> place
            </h1>
            <p className="max-w-2xl text-slate-900 md:text-xl mx-auto">
              Summarize Blogs using OpenAI GPT-4. Explore a world of global flavors with our API-powered recipe search, and find your favorite movies on our one-stop movie resource.
            </p>

          </div>
          <div className="w-full max-w-sm space-y-2 mx-auto">
            <Link href={'/protect'}>
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Hero;