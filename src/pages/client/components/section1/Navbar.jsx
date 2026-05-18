import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-yellow-100 w-50 h-185 pt-15 flex flex-col gap-10 '>
      <div className='w-40 h-40 bg-red-400 text-amber-700 rounded-full ml-6'></div>



      <div className='flex flex-col gap-1'>
        <div className='w-50 h-9  text-black flex justify-center '>Profile</div>
        <div className='w-50 h-9  text-black flex justify-center'>Project</div>
        <div className='w-50 h-9  text-black flex justify-center'>Files</div>
        <div className=' w-50 h-9  text-black flex justify-center'>Team</div>
      </div>
    </div>
  )
}

export default Navbar