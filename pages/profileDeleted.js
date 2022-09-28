import React from 'react'

const profileDeleted = () => {
  return (
    <div className="h-[calc(100vh-105px)] w-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl text-center mb-2">Your profile has been deleted.</h1>
        <p> We&apos;re sorry to see you go. <br/> If there&apos;s anything we could have done differently to make you stay please let us know.</p>
        <a href="mailto:crew@getcrew.pro" target="_blank" rel="noreferrer" className="text-wearecrewBlue mt-2">crew@getcrew.pro</a>
        


      </div>
    </div>
  )
}

export default profileDeleted