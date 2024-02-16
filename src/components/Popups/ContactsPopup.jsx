"use client"

import { useState, useEffect } from 'react';

const ContactsPopup = ({ error, success, sending }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ((error || success) && !sending) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2500); 
      return () => clearTimeout(timer);
    }
  }, [error, success, sending]);

  return (
    <>
      {visible && (
        <div className={`fixed bottom-0 right-0 z-50 py-4 px-2 w-full ${success ? 'bg-green-100 dark:bg-green-950 border-b border-green-600 dark:border-b-green-500' : 'bg-red-100 dark:bg-red-950 border-b border-red-600 dark:border-b-red-500'}`}>
          <p className={`flex gap-1 items-center text-center ${success ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'} py-1 px-2 text-lg rounded-md`}>
            {success ? 'The message has been sent successfully' : 'The message has not been sent, please try again later'}
          </p>
        </div>
      )}
    </>
  );
};

export default ContactsPopup;
