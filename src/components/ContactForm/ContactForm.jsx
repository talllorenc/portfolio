"use client";

import { useRef, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const basicSchema = yup.object().shape({
  name: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required field"),
  email: yup
    .string()
    .email("Enter the correct email address")
    .required("Required field"),
  message: yup
    .string()
    .max(100, "Must be 100 characters or less")
    .required("Required field"),
});

const ContactForm = ({}) => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    values,
    handleChange,
    touched,
    handleBlur,
    handleSubmit,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setSending(true);

        emailjs
          .sendForm("service_id", "template_id", formRef.current, "code")
          .then(
            (result) => {
              setSending(false);
              setError(false);
              setSuccess(true);
              resetForm();
            },
            (error) => {
              setSending(false);
              setError(true);
              setSuccess(false);
            }
          );

        console.log(values);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <div className="max-w-[400px] mx-auto">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        ref={formRef}
      >
        <div>
          {errors.name && touched.name && (
            <p className="text-red-500">{errors.name}</p>
          )}
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className={
              errors.name && touched.name
                ? "w-full border-red-500 focus:outline-none border-2 border-red-500 bg-inherit p-2 rounded-lg"
                : "focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-inherit p-2 rounded-lg"
            }
            onBlur={handleBlur}
            value={values.name}
            onChange={handleChange}
          />
          <label for="name" className="text-[#8c8b8b] flex items-center gap-1">
            <span className="text-red-600 text-lg mr-1">*</span>
            Must be 15 characters or less
          </label>
        </div>

        <div>
          {errors.email && touched.email && (
            <p className="text-red-500">{errors.email}</p>
          )}
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className={
              errors.email && touched.email
                ? "w-full border-red-500 focus:outline-none border-2 border-red-500 bg-inherit p-2 rounded-lg"
                : "focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-inherit p-2 rounded-lg"
            }
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
          />
          <label for="email" className="text-[#8c8b8b] flex items-center gap-1">
            <span className="text-red-600 text-lg mr-1">*</span>
            Required field
          </label>
        </div>

        <div>
          {errors.message && touched.message && (
            <p className="text-red-500">{errors.message}</p>
          )}
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="Message"
            className={
              errors.message && touched.message
                ? "resize-none h-[100px] w-full border-red-500 focus:outline-none border-2 border-red-500 bg-inherit p-2 rounded-lg"
                : "resize-none h-[100px] focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-inherit p-2 rounded-lg"
            }
            onBlur={handleBlur}
            value={values.message}
            onChange={handleChange}
          />
          <label for="email" className="text-[#8c8b8b] flex items-center gap-1">
            <span className="text-red-600 text-lg mr-1">*</span>
            Must be 100 characters or less
          </label>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            type="submit"
            className={`border-2 border-[#8c8b8b] py-1 px-8 rounded-lg transistion duration-300 easy-in-out hover:translate-x-4 ${
              sending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={sending}
          >
            {sending ? (
              <div
                className="spinner-border border-t-2 border-r-2 rounded-full p-3 text-light"
                role="status"
              ></div>
            ) : (
              <Image
                src="/Contacts/send.png"
                width={25}
                height={25}
                alt="send button image"
              />
            )}
          </button>
          <div className="flex gap-2 items-center">
            <p className="text-red-500">*</p>
            <p className="text-[#8c8b8b]"> - Required field</p>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-center mt-8">
        {success && !sending ? (
          <p className="flex gap-1 text-center items-center text-green-600 dark:text-green-500 py-1 px-2 w-fit text-lg rounded-md bg-green-100 dark:bg-green-950 border border-green-600 dark:border-green-500">
            The message has been sent successfully
          </p>
        ) : null}
        {error && !sending ? (
          <p className="flex gap-1 items-center text-center text-red-600 dark:text-red-500 py-1 px-2 w-fit text-lg rounded-md bg-red-100 dark:bg-red-950 border border-red-600 dark:border-red-500">
            The message has not been sent, please try again later
          </p>
        ) : null}
      </div>
    </div>
  );
};
export default ContactForm;
