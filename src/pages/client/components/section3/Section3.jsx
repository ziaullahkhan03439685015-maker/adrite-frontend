import React from 'react'
import Pdf from './Pdf'
import Projecttracker from './Projecttracker'
import MeetingSceduler from './MeetingSceduler'
import SupportTicket from './SupportTicket'

const Section3 = () => {
  return (
    <div className='w-80 h-185 bg-emerald-600 flex flex-col gap-2' >
      <Pdf/>
      <Projecttracker/>
<SupportTicket/>
      <MeetingSceduler/>
    </div>
  )
}

export default Section3