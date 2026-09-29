export const metadata = {
  title: "Contact Alyvero",
  description:
    "Contact Alyvero with product feedback, bug reports, questions and partnership enquiries.",
};

export default function Contact() {
  return (
    <div className="container">
      <div className="content-page">
        <h1>Contact Alyvero</h1>
        <p>Use this page to report a problem with a tool, send product feedback, ask a question about Alyvero or discuss a partnership. Clear reports help us reproduce problems and improve the tools.</p>

        <h2>What to include in a bug report</h2>
        <p>Tell us which tool you were using, what type of file you selected, what you expected to happen and what happened instead. If an error appears, include the exact message where possible. Do not send passwords, payment details or other sensitive information in the message.</p>

        <h2>Tool feedback</h2>
        <p>If a conversion, compression or generated file does not look right, explain what you noticed and the device or browser you were using. Keeping the original file until the result has been checked is recommended.</p>

        <h2>Partnership and general enquiries</h2>
        <p>For partnership enquiries or questions that are not related to a specific tool, use the same form and describe the request clearly. Alyvero does not require an account to use its public tools.</p>

        <form className="contact-form" action="https://formsubmit.co/rindodi@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="Alyvero contact form" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://www.alyvero.co.ke/contact?sent=1" />

          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={7} required />

          <button className="primary" type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
}
