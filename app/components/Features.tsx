import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/constants";
import Image from "next/image";

const Features = () => {
  return <>
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48  rounded-lg">
        <div className="container px-4 md:px-6 ">
          <div className="grid gap-6 items-center max-md:my-4">
            <div className="flex flex-col justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
                  Explore Our Distinctive Attributes
                </h1>
                <p className="max-w-[600px] text-slate-500 md:text-xl dark:text-zinc-100 mx-auto">
                  Our attributes are crafted to elevate your efficiency and simplify your processes.
                </p>
                <div className="flex justify-center flex-wrap gap-9 py-6">
                  {services.map((service) => (
                    <Card key={service.label} className='flex-1 sm:w-[300px] sm:min-w-[300px] w-full rounded-[20px] shadow-3xl px-10 max-sm:px-2 py-8 bg-gray-200'>
                      <CardHeader className=' flex justify-center items-center  rounded-full'>
                          <Image src={service.img} alt={service.label} width={40} height={40} className="font-bold" />
                      </CardHeader>
                      <CardTitle className="font-bold text-2xl">
                        {service.label}
                      </CardTitle>
                      <CardContent>
                        {service.subtext}
                      </CardContent>
                    </Card>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  </>;
}

export default Features;