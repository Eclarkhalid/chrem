import Image from "next/image";
import banner from '../../assets/banner.jpg'

const About = () => {
  return <>
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Choose Chrem?
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <Image src={banner} alt={"banner"} />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600 text-md font-medium leading-8">
              <p>
                Embark on a seamless journey of information and entertainment as our platform brings you everything you need in one place. Utilizing the cutting-edge OpenAI GPT-4 technology, we offer a unique and intelligent solution to summarize blogs, allowing you to digest information effortlessly.
              </p>

              <p>
                Dive into a culinary adventure with our API-powered recipe search, unlocking a world of global flavors right at your fingertips. Whether you are a cooking enthusiast or simply looking for new tastes, our comprehensive recipe search ensures that you discover delightful dishes from around the globe. And for movie enthusiasts, our platform serves as the ultimate one-stop resource. Easily find information about your favorite movies, explore new releases, and stay up-to-date with the cinematic world. With a user-friendly interface and powerful features, we provide a centralized hub for your diverse needs, making information retrieval and entertainment exploration a seamless and enjoyable experience.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

  </>;
}

export default About;