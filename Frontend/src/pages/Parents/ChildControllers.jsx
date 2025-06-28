import Header from '@/components/Parents/Header';
import React from 'react'

const features = [
  {
    title: 'Content Filtering',
    description: 'Block access to inappropriate websites and content categories (e.g., adult content, violence, etc.).'
  },
  {
    title: 'Screen Time Management',
    description: 'Set daily or weekly limits on device usage to promote healthy screen time habits.'
  },
  {
    title: 'Activity Monitoring',
    description: "Track online activities, including websites visited and apps used, providing insights into children's behavior."
  },
  {
    title: 'App Management',
    description: 'Approve or block specific applications and games, ensuring only age-appropriate content is accessible.'
  },
  {
    title: 'Location Tracking',
    description: 'Monitor the physical location of devices through GPS, offering peace of mind for parents.'
  },
  {
    title: 'Internet Usage Reports',
    description: "Generate reports on internet usage patterns, helping parents understand their children's online habits."
  },
  {
    title: 'Remote Control',
    description: 'Allow parents to adjust settings or restrictions remotely, providing flexibility in managing controls.'
  }
];

const ChildControllers = () => {
  return (
     <section>
            <Header/>
   
    <div className="max-w-2xl mx-auto p-6">
   
      <h1 className="text-3xl font-bold mb-8 text-center text-[var(--parent4)]">Child Controller Features</h1>
      <div className="grid gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-[var(--parent2)] rounded-xl shadow p-5">
            <h2 className="text-xl font-semibold mb-2 text-[var(--parent3)]">{feature.title}</h2>
            <p className="text-[var(--parent4)]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default ChildControllers