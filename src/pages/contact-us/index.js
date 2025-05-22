import React from "react";
import ContactUsBanner from "@/components/Contact/ContactUsBanner";
import ContactUsList from "@/components/Contact/ContactUsList";
import ContactUsForm from "@/components/Contact/ContactUsForm";
import ContactUsLocation from "@/components/Contact/ContactUsLocation";

const index = () => {
  return (
    <>
      <ContactUsBanner />
      <ContactUsList />
      <ContactUsForm />
      <ContactUsLocation />
    </>
  );
};

export default index;
