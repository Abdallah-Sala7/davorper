import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";
import { Suspense } from "react";

const Home = () => {
  return (
    <>
      <header className="section-style !pt-36">
        <div className="container">
          <div className="flex justify-between items-center gap-x-6 gap-y-8 flex-col-reverse lg:flex-row">
            <div className="flex-1 max-w-2xl text-center lg:text-start">
              <h1 className="font-bold text-5xl mb-4 leading-tight lg:mb-6">
                We Can Make Your Ideas A{" "}
                <span className="text-primary">Reality</span>
              </h1>

              <p className="text-xl">
                We turn your ideas into reality. Participate with us to make
                your project digital through innovation and technology.
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              <Image
                src="/gif/hero.gif"
                alt="Hero image"
                width={500}
                height={500}
                className="w-11/12 object-contain md:w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="section-style">
        <div className="container">
          <div className="flex justify-between items-center gap-x-6 gap-y-8 flex-col lg:flex-row">
            <div className="flex-1 text-center lg:text-start lg:max-w-xl">
              <h2 className="font-bold text-3xl mb-3 leading-tight text-primary">
                Our Vision
              </h2>

              <p className="text-xl mb-3">
                We offer a wide range of services to help you with your digital
                needs. From web development to mobile applications, we have you
                covered.
              </p>

              <p className="text-xl">
                We also offer consulting services to help you with your digital
                strategy.
              </p>
            </div>

            <div className="flex-1 aspect-video rounded-2xl overflow-hidden bg-black">
              <Suspense
                fallback={
                  <Image
                    src="/img/poster.png"
                    alt="Poster"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                }
              >
                <VideoPlayer
                  poster="/img/poster.png"
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  width={500}
                  height={500}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
