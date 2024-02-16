"use client";

import { useTheme } from "next-themes";
import ContactForm from "@/components/ContactForm/ContactForm";
import React from "react";

const ContactsPage = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "contacts-bg" : "main-bg-light"
      }`}
    >
      <h1 className="text-3xl font-bold p-2">Contact me</h1>
      <div className="container">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactsPage;
