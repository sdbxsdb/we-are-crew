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
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Home() {
  const { user } = useUser();

  const userEmail = user?.data?.user?.email;

  return (
    <div className={styles.container}>
      <Head>
        <title>Get Crew | UK & Ireland - The Only Place for Crew.</title>
      </Head>

      <div className="relative">
        <Banner />
        <div className="w-full hidden md:flex items-center justify-center absolute mt-12 font-bold text-2xl text-center  "></div>
      </div>

      <div className="mt-8 md:mt-0 h-auto md:h-[calc(100vh-205px)] flex flex-col justify-center items-center w-full overflow-scroll">
        <div className="hidden md:flex flex-col gap-x-8 gap-y-4 px-4 w-full text-2xl font-bold justify-around max-w-[1200px] text-center ">
          {/* <hr className="w-7/12 m-auto" /> */}
          <cite className="py-4">
            <span className="">
              Productions looking for crew.  Crew looking for productions.{" "}
              <br />
            </span>
            <br />
            Select an option below to get started.
          </cite>
          {/* <hr className="w-7/12 m-auto" /> */}
        </div>

        <div className="flex gap-x-4 gap-y-4 flex-col md:flex-row w-full md:justify-between items-center px-4 md:px-12 pb-8 md:py-12 max-w-[1200px]">
          <LargeButton text="I need crew" link="/I-need-crew/depts" />
          <LargeButton
            text={`${userEmail ? "My Profile" : "I am Crew"}`}
            link="/my-crew"
          />
        </div>

        <div className="w-full  max-w-[1200px] flex flex-col ">
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
                <div className="text-center flex flex-col justify-center h-[100px]">
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
                <div className="text-center flex flex-col justify-center h-[120px]">
                  <cite className="flex">
                    <div className="w-full">
                      <span className="font-bold mr-2 text-2xl">&#34;</span>This
                      is what the industry has been missing! So easy I&apos;ve
                      been able to find and contact crew within 10sec of coming
                      to the site. <br /> This will be my first port of call
                      from now on.
                      <span className="font-bold ml-2 text-2xl">&#34;</span>
                    </div>
                  </cite>
                  <p className="font-bold mt-4">
                    {" "}
                    - Person 1 | Head of Production Frank Films
                  </p>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="text-center flex flex-col justify-center h-[100px]">
                  <cite>&#34; Test text test testtest test</cite>
                  <p className="font-bold mt-4">
                    {" "}
                    - Person 2 | Head of Production Frank Films
                  </p>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>

          {/* <div className="slider my-2">
            <Link href="#slide-1" scroll={false}>
              <a>1</a>
            </Link>
            <Link href="#slide-2" scroll={false}>
              <a>2</a>
            </Link>
            <Link href="#slide-3" scroll={false}>
              <a>3</a>
            </Link>
            <Link href="#slide-4" scroll={false}>
              <a>4</a>
            </Link>
            <Link href="#slide-5" scroll={false}>
              <a>5</a>
            </Link>

            <div className="slides">
              <div name="slide-1" id="slide-1">
                <div>
                  <cite>
                    &#34; I welcome the launch of{" "}
                    <span className="text-wearecrewBlue">Get Crew</span> to
                    market as in this fast paced / time poor world this platform
                    provides <br /> the perfect solution to seeking out crew for
                    short and long term projects. &#34;
                  </cite>
                  <p className="font-bold mt-4">
                    {" "}
                    - Val Croft | Head of Production Frank Films
                  </p>
                </div>
              </div>
              <div name="slide-2" id="slide-2">
              <div>
                  <cite>
                    &#34; This is what the industry has been missing.  I love how easy it is to use - <br /> so easy I&apos;ve been able to find and contact crew within 10sec of coming to the site. <br /> This will be my first port of call from now on.
                  </cite>
                  <p className="font-bold mt-4">
                    {" "}
                    - Some Person | Head of Production Somewhere
                  </p>
                </div>
              </div>
              <div id="slide-3">3</div>
              <div id="slide-4">4</div>
              <div id="slide-5">5</div>
            </div>
          </div> */}
          <hr className="w-7/12 m-auto" />
        </div>
      </div>
    </div>
  );
}
