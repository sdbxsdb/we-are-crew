import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";

export default function CrewDetailModal({ show, onClose, children, id, name }) {
  const [isBrowser, setIsBrowser] = useState(false);
  const router = useRouter();

  const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");


  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = () => {
    onClose()
    router.push(`${router.asPath.split('?')[0]}`, undefined, {scroll: false}, { shallow: true });
  };


  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      router.query.showModal = true;
      const param = slugify(name) + "_" + id;
      router.query.user = param;


      if (!window.location.href.includes("about")) {
        router.push({
          pathname: '/I-need-crew/depts/crew-list/'+router.query.crewList,
          query: 'user='+router.query.user + "&showModal=" + router.query.showModal,
        }, undefined, { shallow: true });
      } 
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);



  const modalContent = show ? (
    <>
      <div
        onClick={handleClose}
        className="fixed top-0 left-0 flex items-center justify-center w-full h-screen overflow-x-hidden overflow-y-auto z-2000 bg-wearecrewDarkestGrey/80"
      ></div>
      <div className="rounded-mg max-w-[900px] rounded-md border-b border-wearecrewBlue p-4 flex items-end flex-col z-3000 overflow-scroll max-h-[calc(100vh-150px)] w-[95%] bg-white shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={handleClose}
          className="h-[40px]  flex justify-end items-center fixed w-auto px-2 [95%] bg-white rounded-full"
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

        <div className="w-full h-full">{children}</div>

      </div>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
