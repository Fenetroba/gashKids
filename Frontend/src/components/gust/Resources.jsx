import React from 'react'

const Resources = () => {
  return (
    <div className='bg-[var(--parent4)] w-full px-20 pb-10' >
      <h2 className='text-4xl font-bold pb-10'>Guides</h2>
      <ul>
        <li><strong>Setting Up a Child Controller:</strong> Follow the app's step-by-step instructions to create a child profile and link their device.</li>
        <li><strong>Managing Access:</strong> Use the dashboard to set screen time limits, approve apps, and monitor activity.</li>
        <li><strong>Updating Settings:</strong> Regularly review and update controls as your child grows and their needs change.</li>
      </ul>
      <h2>Tips</h2>
      <ul>
        <li>Start conversations about online safety early and keep them ongoing.</li>
        <li>Encourage your child to share their online experiences and ask questions.</li>
        <li>Set clear rules together about what is safe and appropriate online.</li>
        <li>Be a role model—practice good digital habits yourself.</li>
        <li>Remind children never to share personal information with strangers online.</li>
      </ul>
    </div>
  )
}

export default Resources