import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Banner from "../components/Banner";
import LargeButton from "../components/LargeButton";
import { useUser } from "../context/user";
import Link from "next/link";
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Home() {
  const { user } = useUser();

  const userEmail = user?.data?.user?.email;

  return (
    <>
      <Head>
        <title>Get Crew | UK & Ireland - The Only Place for Crew.</title>
      </Head>

      <div className="w-full h-full">
        <Banner />

        <div className="mt-0 flex flex-col justify-center items-center w-full overflow-scroll md:h-[calc(100vh-205px)] md:mb-0 mb-12">
          <div className="flex flex-col gap-x-8 gap-y-4 px-4 w-full text-lg md:text-2xl font-bold justify-around max-w-[1200px] text-center mb-4 md:mb-0">
            <cite className="py-4">
              <span className="hidden md:block">
                Productions looking for crew.  Crew looking for productions.{" "}
                <br />
              </span>
              <span className="block md:hidden">
                Productions looking for crew. <br /> Crew looking for
                productions. <br />
              </span>
              <br />
              Select an option below to get started.
            </cite>
          </div>
          <div className="flex gap-x-4 gap-y-4 flex-col md:flex-row w-full md:justify-between items-center px-4 md:px-12 pb-8 md:py-12 max-w-[1200px]">
            <LargeButton text="I need crew" link="/I-need-crew/depts" />
            <LargeButton
              text={`${userEmail ? "My Profile" : "I am Crew"}`}
              link="/my-crew"
            />
          </div>
          <div className="w-full max-w-[1200px] flex flex-col px-4">
            <hr className="w-7/12 m-auto" />
            <CarouselProvider
              className="py-4"
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={3}
              isPlaying={true}
              interval={5000}
              dragStep={1}
              infinite={true}
              isIntrinsicHeight={true}
            >
              <Slider>
                <Slide index={0} className="">
                  <div className="text-center flex flex-col justify-center items-center  h-[180px] md:h-[100px]">
                    <cite className="flex">
                      <div className="w-full">
                        <span className="font-bold mr-2 text-2xl">&#34;</span>I
                        welcome the launch of{" "}
                        <span className="text-wearecrewBlue">Get Crew</span> to
                        market as in this fast paced / time poor world this
                        platform provides <br /> the perfect solution to seeking
                        out crew for short and long term projects.
                        <span className="font-bold ml-2 text-2xl">&#34;</span>
                      </div>
                    </cite>
                    <p className="font-bold mt-4">
                      {" "}
                      - Val Croft | Head of Production Frank Films
                    </p>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="text-center flex flex-col justify-center items-center  h-[160px] md:h-[100px]">
                    <cite>
                      &#34; The first platform I&apos;ve found that actually
                              works and does what it says on the tin. <br />{" "}
                              Having all my credentials in one place, in this format AND have it shareable is fantastic. &#34;
                    </cite>
                    <p className="font-bold mt-4">
                      {" "}
                      - Calvin P | Camera Assistant
                    </p>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="text-center flex flex-col justify-center items-center  h-[160px] md:h-[100px]">
                    <cite className="flex">
                      <div className="w-full">
                        <span className="font-bold mr-2 text-2xl">&#34;</span>
                        This is what the industry has been missing! So easy
                        I&apos;ve been able to find and contact crew within
                        10sec of coming to the site. <br /> This will be my
                        first port of call from now on.
                        <span className="font-bold ml-2 text-2xl">&#34;</span>
                      </div>
                    </cite>
                    <p className="font-bold mt-4"> - Producer | BBC</p>
                  </div>
                </Slide>
              </Slider>

              <DotGroup className="flex justify-center mt-4 text-wearecrewBlue">
                <Dot slide={0} className="mr-4">
                  &#9673;
                </Dot>
                <Dot slide={1} className="mr-4">
                  &#9673;
                </Dot>
                <Dot slide={2} className="">
                  &#9673;
                </Dot>
              </DotGroup>
            </CarouselProvider>
            <hr className="w-7/12 m-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
