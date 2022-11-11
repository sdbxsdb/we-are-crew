import { useState } from "react";
import CrewDetailModal from "./CrewDetailModal";

const ShowDemoModal = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const stylingLarge = {
    backgroundImage:
      "url('https://www.looper.com/img/gallery/the-untold-truth-of-marty-mcfly/intro-1597857837.jpg')",
    minWidth: "100px",
    minHeight: "100px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <button>
          <h1
            onClick={() => setShowDemoModal(true)}
            className="text-wearecrewBlue  text-center text-lg"
          >
            View an example profile
          </h1>
        </button>
      </div>

      <CrewDetailModal
        show={showDemoModal}
        id="demoProfile"
        name="Name"
        onClose={() => setShowDemoModal(false)}
      >
        <div className="flex gap-x-4">
          <div className="w-full flex flex-1 flex-col gap-x-4 gap-y-4 items-start ">
            
            
            
            
            
          <div className="w-full flex flex-col md:flex-row justify-between">
              <div className="flex gap-x-4 items-center mb-4">
                <div
                  style={stylingLarge}
                  className="rounded-full overflow-hidden w-[100px] h-[100px] flex flex-col items-center justify-center shadow-md mb-2"
                ></div>
                <div className="">
                  <div className="">
                    <h1 className="text-3xl border-b-2 pb-2 mb-2 max-w-max border-wearecrewBlue">
                      Marty McFly
                    </h1>
                  </div>

                  <div className="flex flex-col md:flex-row gap-x-4 flex-wrap">
                    Hover Boarder <span className="text-wearecrewBlue">-</span> Time Traveller
                  </div>
                </div>
              </div>
              <div className="md:w-[240px] md:ml-2 flex flex-col items-center md:items-end md:pt-10 md:mb-4">
                <strong
                  className={`md:mt-4 text-3xl  min-w-max text-wearecrewGreen`}
                >
                  Available
                </strong>
              </div>
            </div>
            
            
            
            


            <div className="flex flex-col-reverse md:flex-row w-full gap-x-4 gap-y-4">
              <div className="flex flex-1 flex-col gap-y-6 mt-4">
                <div className="flex justify-between items-center gap-x-4">
                  <div className="flex items-center gap-x-4">
                    <span className="material-icons text-wearecrewBlue">phone_iphone</span>
                    <a href={`tel:0044 123 456 78`} className="underline">
                      0044 123 456 78
                    </a>
                  </div>
                  <button className="text-wearecrewDarkGrey">
                    <cite>Copy Phone</cite>
                  </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                <div className="flex items-center gap-x-4">
                    <span className="material-icons text-wearecrewBlue">mail</span>
                    <a
                      href={`mailto:email@email.com?subject=I found your profile on Get Crew and want to check your availability!`}
                      className="underline"
                    >
                      marty@mcfly.com
                    </a>
                  </div>
                  <button className="text-wearecrewDarkGrey">
                    <cite>Copy Email</cite>
                  </button>
                </div>
                <div className="lex md:max-w-max flex-wrap justify-between items-center gap-x-4">
                    <div className="flex items-center gap-x-4">
                      <span className="material-icons text-wearecrewBlue">public</span>
                      <a
                        href='https://backtothefuture.com'
                        target="_blank"
                        rel="noreferrer"
                        className="underline "
                      >
                        https://backtothefuture.com
                      </a>
                    </div>
                    <button
                      className="text-wearecrewDarkGrey hover:text-wearecrewBlue transition md:w-max text-left ml-10 md:ml-0"
                    >
                      <cite className="min-w-max">Copy Website</cite>
                    </button>
                  </div>
                <div className="flex items-center gap-x-4">
                    <span className="material-icons text-wearecrewBlue">public</span>
                    <div className="flex flex-col items-start gap-1">
                      <a
                        href='https://www.imdb.com/name/nm0000150/'
                        target="_blank"
                        rel="noreferrer"
                        className="underline break-all"
                      >
                        https://www.imdb.com/name/nm0000150/
                      </a>
                      <button
                        className="text-wearecrewDarkGrey"
                      >
                        <cite>Copy IMDB</cite>
                      </button>
                    </div>
                  </div>
                <div className="flex items-start gap-x-4">
                  <span className="material-icons text-wearecrewBlue">where_to_vote</span>
                  <div className="flex flex-wrap justify-start gap-x-4 gap-y-2">
                    <div>
                      <p className="min-w-max">Belfast</p>
                    </div>
                    <div>
                      <p className="min-w-max">Dublin</p>
                    </div>
                    <div>
                      <p className="min-w-max">Glasgow</p>
                    </div>
                    <div>
                      <p className="min-w-max">Liverpool</p>
                    </div>
                    <div>
                      <p className="min-w-max">London</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-x-4">
                  <span className="material-icons text-wearecrewBlue">military_tech</span>
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="flex justify-center items-center">
                        <p className="text-base">
                          <cite>Mission Could Be A Bit Tricky </cite>
                        </p>
                        <span className="text-wearecrewBlue">  |  </span>
                        <p className="text-base">Focus Puller</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="flex justify-center items-center">
                        <p className="text-base">
                          <cite>Jurassic Universe</cite>
                        </p>
                        <span className="text-wearecrewBlue">  |  </span>
                        <p className="text-base">Focus Puller</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="flex justify-center items-center">
                        <p className="text-base">
                          <cite>Fast and Furios 324</cite>
                        </p>
                        <span className="text-wearecrewBlue">  |  </span>
                        <p className="text-base">Central Loader</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-x-4 -mt-4">
                  <span className="material-icons text-wearecrewBlue">school</span>

                  <div>
                    <p className="">Safety Training, First Aid, IMAX</p>
                  </div>
                </div>

                <div className="flex items-start gap-x-4 -mt-2">
                  <span className="material-icons text-wearecrewBlue">emoji_people</span>
                  <p>
                    Martin Seamus ’Marty’ McFly, Sr. is the main protagonist of
                    the Back to the Future franchise. He is the world’s second
                    time traveler (after Einstein), the first to travel to the
                    past, and the first human to travel through time. He was
                    also a high school student at Hill Valley High School in
                    1985. He’s also a good Focus Puller.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center md:w-3/12 ">
                <div className="w-full flex flex-col gap-y-4">
                  <a
                    href="tel:0044123456789"
                    className="rounded-md bg-wearecrewGreen p-2 shadow-md flex items-center justify-center w-full  text-white"
                  >
                    <h1 className="text-3xl">Call</h1>
                  </a>
                  <a
                    href={`mailto:email@email.com?subject=I found your profile on Get Crew!`}
                    className="rounded-md bg-wearecrewDarkBlue p-2 shadow-md flex items-center justify-center w-full  text-white"
                  >
                    <h1 className="text-3xl">Email</h1>
                  </a>
                  <a
                    href="http://backtothefuture.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-wearecrewTeal p-2 shadow-md flex items-center justify-center text-white"
                  >
                    <h1 className="text-3xl">Website</h1>
                  </a>

                  <a
                    download
                    href=""
                    className="border-2 text-center border-wearecrewBlue p-2 rounded shadow-md"
                  >
                    <h1 className="text-lg">Download Personal CV</h1>
                  </a>

                  <button className="border-2 flex gap-x-2 justify-center border-wearecrewBlue p-2 rounded shadow-md">
                    <span className="material-icons">ios_share</span>
                    <h1 className="text-lg">Share Profile</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CrewDetailModal>
    </>
  );
};

export default ShowDemoModal;
