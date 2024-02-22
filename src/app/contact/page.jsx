"use client";

import Image from "next/image";
import styles from "./contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactPage = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o3ku9gc", "template_u8u0sfm", formRef.current, {
        publicKey: "uBG8yYvuCzN_9u-Na",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form
          ref={formRef}
          action=""
          className={styles.form}
          onSubmit={sendEmail}
        >
          <input type="text" placeholder="Full Name" name="user_name" />
          <input type="text" placeholder="Email Address" name="user_email" />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            name="phone_number"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="How can I help make the best you?"
            className="message"
          ></textarea>
          <button>Send</button>
          {done && "Thank you for your email!"}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
