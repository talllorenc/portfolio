import ContactForm from '@/components/ContactForm/ContactForm'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen flex items-center justify-center contacts-bg'>
      <div className='container'>
      <ContactForm/>

      </div>
    </div>
  )
}

export default page