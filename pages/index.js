import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Banner from "../components/Banner";
import CrewDetailModal from "../components/CrewDetailModal";
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
  const [showFinishModal, setShowFinishModal] = useState(false);

  const userEmail = user?.data?.user?.email;

  console.log({ user });

  useEffect(() => {
    if (user.paid === false) {
      setShowFinishModal(true);
    } else if (user.username === null) {
      setShowFinishModal(true);
    } else if (user.data.user) {
      setShowFinishModal(true);
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Get Crew | UK & Ireland - The Only Place for Crew.</title>
      </Head>

      <div className="w-full h-full">
        <Banner />

        <div className="mt-0 flex flex-col justify-center items-center w-full overflow-scroll md:h-[calc(100vh-205px)] md:mb-0 mb-12">
          {showFinishModal && (
            <div>
              <div
                onClick={() => setShowFinishModal(false)}
                className="fixed top-0 left-0 flex items-center justify-center w-full h-screen overflow-x-hidden overflow-y-auto z-2000 bg-wearecrewDarkestGrey/80"
              ></div>
              <div className="rounded-mg max-w-[900px] rounded-md border-b border-wearecrewBlue p-4 flex items-end flex-col z-3000 overflow-scroll max-h-[calc(100vh-150px)] w-[95%] bg-white shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button
                  onClick={() => setShowFinishModal(false)}
                  className="h-[40px] flex justify-end items-center fixed w-auto px-2 [95%] bg-white rounded-full"
                >
                  <svg
                    className="transition fill-current hover:text-wearecrewDarkBlue"
                    width="30px"
                    height="30px"
                    x="0px"
                    y="0px"
                    viewBox="0 0 252 252"
                  >
                    <g>
                      <path
                        d="M126,0C56.523,0,0,56.523,0,126s56.523,126,126,126s126-56.523,126-126S195.477,0,126,0z M126,234
                c-59.551,0-108-48.449-108-108S66.449,18,126,18s108,48.449,108,108S185.551,234,126,234z"
                      />
                      <path
                        d="M164.612,87.388c-3.515-3.515-9.213-3.515-12.728,0L126,113.272l-25.885-25.885c-3.515-3.515-9.213-3.515-12.728,0
                c-3.515,3.515-3.515,9.213,0,12.728L113.272,126l-25.885,25.885c-3.515,3.515-3.515,9.213,0,12.728
                c1.757,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636L126,138.728l25.885,25.885c1.757,1.757,4.061,2.636,6.364,2.636
                s4.606-0.879,6.364-2.636c3.515-3.515,3.515-9.213,0-12.728L138.728,126l25.885-25.885
                C168.127,96.601,168.127,90.902,164.612,87.388z"
                      />
                    </g>
                  </svg>
                </button>
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <h1 className="text-3xl mb-2">You&apos;re nearly there!</h1>
                  <p>
                    Complete the steps below to have your profile live and
                    visable to any productions looking for crew.
                  </p>
                  <div className="flex flex-col gap-y-2 mt-4">
                    <strong className="flex items-center">
                      <div className="font-bold flex items-center justify-center text-white w-[30px] h-[30px] text-1xl bg-wearecrewGreen rounded-full px-1 py-0.5 mr-2">
                        &#10003;
                      </div>
                      Logged In
                    </strong>
                    <strong className="flex items-center">
                      {user.username !== "" ? (
                        <div className="font-bold flex items-center justify-center text-white w-[30px] h-[30px] text-1xl bg-wearecrewGreen rounded-full px-1 py-0.5 mr-2">
                          &#10003;
                        </div>
                      ) : (
                        <div className="font-bold flex items-center justify-center text-white w-[30px] h-[30px] text-1xl bg-wearecrewRed rounded-full px-1 py-0.5 mr-2">
                          &#10005;
                        </div>
                      )}

                      <Link href="/my-crew">
                        <span className="underline cursor-pointer">
                          Profile Complete
                        </span>
                      </Link>
                    </strong>
                    <strong className="flex items-center">
                      {user.paid === true ? (
                        <div className="font-bold flex items-center justify-center text-white w-[30px] h-[30px] text-1xl bg-wearecrewGreen rounded-full px-1 py-0.5 mr-2">
                          &#10003;
                        </div>
                      ) : (
                        <div className="font-bold flex items-center justify-center text-white w-[30px] h-[30px] text-1xl bg-wearecrewRed rounded-full px-1 py-0.5 mr-2">
                          &#10005;
                        </div>
                      )}
                      <Link href="/my-crew">
                        <span className="underline cursor-pointer">
                          Profile Live
                        </span>
                      </Link>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          )}
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
                      works and does what it says on the tin. <br /> Having all
                      my credentials in one place, in this format AND have it
                      shareable is fantastic. &#34;
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
                        I’d recommend Get Crew to anyone looking for somewhere
                        to house all their professional <br /> information
                        productions are looking for when hiring. For 10p a day,
                        it’s a no brainer..
                        <span className="font-bold ml-2 text-2xl">&#34;</span>
                      </div>
                    </cite>
                    <p className="font-bold mt-4">
                      {" "}
                      - Seb Pannackal | Unit Manager
                    </p>
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
