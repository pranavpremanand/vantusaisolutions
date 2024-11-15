import React, { lazy, useContext } from "react";
import Banner from "../../componets/website/Banner";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { companyDetails } from "../../constant";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { SpinnerContext } from "../../componets/SpinnerContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ContactForm from "../../componets/common/ContactForm";
const MapComponent = lazy(() => import("../../componets/website/MapComponent"));

const ContactUs = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone Number: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "Contact Form Submission - Vantus AI Solution LLP",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <>
      <Banner page="Contact Us" />
      <ContactForm />
      <MapComponent />
    </>
  );
};

export default ContactUs;
