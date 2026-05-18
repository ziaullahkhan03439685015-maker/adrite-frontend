import React from 'react'
import Task from './Task'
import Process from './Process'
import Status from './Status'

const Section2 = () => {
  return (
    <div className='w-250 h-185 bg-red-700 '>

<div className='w-30 h-30 bg-blue-500 m-5'></div>

<div className='h-15 w-250 bg-orange-300 flex justify-around '>
  <Task/>
  <Task/>
  <Task/>
  <Task/>
</div>
<div className='w-250 h-130 bg-teal-500 flex gap-2 '>
  <div className='w-200 h-130 bg-pink-500  grid grid-cols-2  ' >
    <Process/>
    <Process/>
    <Process/>
    <Process/>
  </div>
  <div className='w-60 h-130 bg-amber-900 flex flex-col gap-3 '>
    
      <Status/>
    
    
      <Status/>
    
    
  </div >
</div>



    </div>
  )
}

export default Section2