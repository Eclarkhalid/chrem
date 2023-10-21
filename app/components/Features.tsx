const Features = () => {
  return <>
    <main >
      <div className='main'>
        <div className="gradient" />
      </div>
      <div className="app">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48  rounded-lg">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center">
              <div className="flex flex-col justify-center space-y-8 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">
                    Discover Our Unique Features
                  </h1>
                  <p className="max-w-[600px] text-slate-500 md:text-xl dark:text-zinc-100 mx-auto">
                    Our features are designed to enhance your productivity and streamline your workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

  </>;
}

export default Features;