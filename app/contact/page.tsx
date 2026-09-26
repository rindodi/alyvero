export const metadata = {
  title: "Contact",
  description: "Contact Alyvero with product feedback, bug reports, questions and partnership enquiries."
};

export default function Contact() {
  return (
    <div className="container">
      <div className="content-page">
        <h1>Contact Alyvero</h1>
        <p>Have feedback, found a bug, or want to discuss a partnership? Send a message using the form below.</p>

        <form className="contact-form" action="https://formsubmit.co/rindodi@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="Alyvero contact form" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://alyvero.vercel.app/contact?sent=1" />

          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={7} required />

          <button className="primary" type="submit">Send message</button>
        </form>

        <p className="contact-note">You can also email <a href="mailto:rindodi@gmail.com">rindodi@gmail.com</a> directly.</p>
      </div>
    </div>
  );
}