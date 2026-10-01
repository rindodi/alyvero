import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Alyvero",
  description: "Contact Alyvero about product feedback, bug reports, questions and partnership enquiries.",
};

export default function Contact() {
  return (
    <div className="container content-page">
      <p className="eyebrow">Alyvero / contact</p>
      <h1>Tell us what happened.</h1>
      <p className="lead">Use the form for a bug report, product suggestion, question or partnership enquiry. Specific reports make file-tool problems much easier to reproduce.</p>
      <h2>For a bug report</h2>
      <p>Include the tool you were using, the file type, what you expected and what happened instead. If an error appears, include its exact wording where possible.</p>
      <h2>For file-result problems</h2>
      <p>Explain what looked wrong in the converted, compressed or generated file and mention the device and browser you were using. Keep your original file until the result has been checked.</p>
      <h2>Keep sensitive information out of messages</h2>
      <p>Do not send passwords, payment details, private keys or other sensitive information through this form. If a file contains confidential information, describe the problem without attaching or copying that information into the message.</p>
      <ContactForm />
    </div>
  );
}
