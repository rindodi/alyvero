export default function ContactForm() {
  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/rindodi@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_subject" value="Alyvero contact form" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://www.alyvero.co.ke/contact?sent=1" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />

      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required autoComplete="name" />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required autoComplete="email" />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={7} required />

      <button className="primary" type="submit">
        Send message
      </button>
    </form>
  );
}
