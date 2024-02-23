"use client";

import { useTheme } from "next-themes";
import ContactForm from "@/components/ContactForm/ContactForm";
import React from "react";
import { motion } from "framer-motion";

const TransitionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const ContactsPage = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`mt-40 flex flex-col items-center justify-center ${
        theme === "dark" ? "dark-bg" : "light-bg"
      }`}
    >
      <motion.div
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
        className="w-full"
      >
        <h1 className="text-6xl font-bold text-center mb-8">Contact me</h1>
        <div className="container">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactsPage;
