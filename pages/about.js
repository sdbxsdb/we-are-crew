import ShowDemoModal from "../components/ShowDemoModal";

const about = () => {

  return (
    <div className="aboutPage pb-12 ">

      <div className="w-full banner flex justify-center items-center p-12 mb-12 text-white">
        <h1 className="text-2xl text-center md:text-3xl">Any experience. Any department. Anyone.</h1>
      </div>

      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center justify-center max-w-[1200px]">
          <div className="px-4 md:px-12 flex flex-col md:flex-row gap-x-4 gap-y-4 mb-4">
            <div className="w-full md:w-1/2 shadow-md rounded-md p-4 border-b border-wearecrewBlue bg-white">
              <h1 className="text-2xl mb-2">What is it?</h1>
              <p>
                We Are Crew has been designed and built with ALL crew in mind.
                <br />
                <br />
                Gone are the days of dated, regional crew listing pages hidden in the depths of a website.
                <br />
                <br />
                Create a profile and have it readily
                accessible to any Producer, Production Manager or Production needing
                crew in the UK or Ireland.
                <br />
                <br />
                We work for you. We Are Crew.
              </p>
            </div>
            <div className="w-full md:w-1/2 aboutPageListTicks shadow-md rounded-md p-4 border-b border-wearecrewBlue bg-white">
              <h1 className="text-2xl mb-2">Not another diary service.</h1>
              <ul>
                <li>
                  <p>No limit the number of crew we list.</p>
                </li>
                <li>
                  <p>
                    No relying on someone else answering a phone or replying to email to check your availability.
                  </p>
                </li>
                <li>
                  <p>
                    1/10<sup>th</sup> of the cost compared to a tradional diary service’s ££££.
                  </p>
                </li>
                <li>
                  <p>
                    No restrictions when it comes to your location, your experience
                    or your department.
                  </p>
                </li>
                <li>
                  <p>
                    Your availability easily viewed at a glance and is set by you.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 md:px-12 flex flex-col md:flex-row gap-x-4 gap-y-4 mb-4">
            <div className="w-full md:w-1/2 aboutPageListNumbers shadow-md rounded-md p-4 border-b border-wearecrewBlue bg-white">
              <h1 className="text-2xl mb-2">How does it work?</h1>
              <ul>
                <li>
                  <h1>1.</h1>
                  <span>
                    Sign up and create your profile. You can upload your own
                    personal CV and list out credits, qualifications and more.
                  </span>
                </li>
                <li>
                  <h1>2.</h1>
                  <span>
                    Save your profile and pay via secure Stripe Payment (you’ll need
                    a credit or debit card).
                  </span>
                </li>
                <li>
                  <h1>3.</h1>
                  <span>
                    That’s it! Your profile will be live and ready to be viewed by
                    the biggest productions crewing up or looking for dailies.
                  </span>
                </li>
                <ShowDemoModal/>
              </ul>
            </div>
            <div className="w-full md:w-1/2 shadow-md rounded-md p-4 border-b border-wearecrewBlue bg-white">
              <h1 className="text-2xl mb-2">Extreamely Affordable?</h1>
              <p>
                Yes, extremely. £180 per year which works out at 50p a day is all it
                costs to have your profile listed on We Are Crew.
                <br />
                <br />
                One price for all no hidden charges and your listing will be visable
                to productions for 365 days from your payment.
              </p>
            </div>
          </div>
          <div className="px-4 md:px-12 flex flex-col md:flex-row gap-x-4 gap-y-4 mb-4">
            <div className="w-full md:w-1/2 shadow-md rounded-md p-4 border-b border-wearecrewBlue bg-white">
              <h1 className="text-2xl mb-2">We Share.</h1>
              <p>
                We actively share the platform and encourage the use of We Are Crew amongst
                Producers, Line Producers, Production Managers and anyone else who needs crew in the UK and Ireland.
              </p>
            </div>
            <div className="w-full md:w-1/2 shadow-md rounded-md p-4 border-b border-wearecrewBlue bg-white">
              <h1 className="text-2xl mb-2">
                Two for the price of one?
              </h1>
              <p>
                If you’d like to list yourself as an individual but also list your company we won’t charge you for two different listings!  <br/><br/> Just send us an email to <a href="mailto:crew@wearecrew.com" className="text-wearecrewBlue">crew@wearecrew.com</a> and we’ll guide you in the process.
              </p>
            </div>
          </div>
          <div className="px-4 md:px-12 flex flex-col md:flex-row gap-x-4 gap-y-4 max-w-[800px]">
            <div className="w-full shadow-md rounded-md p-4 border-b border-wearecrewBlue bg-white">
              <h1 className="text-2xl mb-2">
                Keeping it green!{" "}
                <span className="material-icons text-wearecrewGreen">forest</span>
              </h1>
              <p>
                We all know the film industry isn’t exactly green. Waste food,
                hundreds of call sheets and sides printed, engines running all day
                the list goes on. <br/><br/>So for every person that signs up to We Are Crew
                we will plant a tree to help combat the Film and Television
                industries carbon footprint!  Every little helps!
              </p>
            </div>
          </div>
        </div>
      </div>


      

    </div>
  );
};

export default about;
