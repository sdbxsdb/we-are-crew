import React from 'react'

const pricing = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center md:h-[calc(100vh-296px)] ">
      <div className="w-full banner flex flex-col justify-center items-center p-12 mb-12 text-white">
        <h1 className="text-2xl text-center md:text-3xl">Simple plans. Better prices.</h1>
        <p>Get yourself out there</p>
      </div>

      <div className="flex justify-around items-center h-full mt-12 flex-wrap gap-4 w-full px-4 max-w-[1200px]">
        <div className="bg-white flex flex-col text-center items-center rounded-md shadow-md p-4 border-2 border-wearecrewBlue w-[300px]">
          <h1 className="text-3xl mb-4">One Year Listing</h1>
          <strong className="text-2xl">50p per day</strong>
          {/* <p>£180 per year</p> */}
          <p className="mt-4">Profile visable for <strong>356 days</strong> from when you go live.</p>
          <button className="border-2 rounded-md shadow-md px-4 py-2 border-wearecrewBlue mt-4 bg-wearecrewBlue text-white hover:text-wearecrewDarkestGrey hover:bg-white transition">Select</button>
        </div>
        <div className="bg-white flex flex-col text-center items-center rounded-md shadow-md p-4 border-2 border-wearecrewBlue w-[300px]">
          <h1 className="text-3xl mb-4">Two Year Listing</h1>
          <strong className="text-2xl">36p per day</strong>
          {/* <p>£270 per year</p> */}
          <p className="mt-4">Profile visable for <strong>730 days</strong> from when you go live.</p>
          <button className="border-2 rounded-md shadow-md px-4 py-2 border-wearecrewBlue mt-4 bg-wearecrewBlue text-white hover:text-wearecrewDarkestGrey hover:bg-white transition">Select</button>
        </div>
        <div className="bg-white flex flex-col text-center items-center rounded-md shadow-md p-4 border-2 border-wearecrewBlue w-[300px]">
          <h1 className="text-3xl mb-4">Lifetime Listing</h1>
          <strong className="text-2xl">3p per day</strong>
          {/* <p>£399 per working lifetime</p> */}
          <p className="mt-4">Profile visable for <strong>30 <cite>years</cite></strong> when you go live.</p>
          <button className="border-2 rounded-md shadow-md px-4 py-2 border-wearecrewBlue mt-4 bg-wearecrewBlue text-white hover:text-wearecrewDarkestGrey hover:bg-white transition">Select</button>
        </div>
      </div>
    </div>
  )
}

export default pricing