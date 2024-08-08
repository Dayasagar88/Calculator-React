import React from 'react'

const DisplayScreen = ( { receivedValue , history}) => {



  return (
    <div className='text-black h-[30%] flex flex-col justify-between bg-gray-900'>
        <h1 className='text-white font-semibold text-3xl p-2'>Calculator</h1>
        <div>
          <p className='text-gray-500 h-[2rem] text-right mr-2 text-2xl font-bold'>{history}</p>
        <input
        readOnly value={receivedValue  || ""} className={`px-2 bg-gray-900 ${receivedValue === "Error" ? "text-red-600" : "text-white"} outline-none caret-transparent  sm:text-4xl text-6xl font-bold py-4 w-full appearance-none  text-right`} type="text" />
        </div>
       
    </div>
  )
}

export default DisplayScreen