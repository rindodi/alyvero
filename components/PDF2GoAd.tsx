import styles from "./PDF2GoAd.module.css";

export default function PDF2GoAd() {
  return (
    <section className={styles.section} aria-label="Sponsored affiliate offer">
      <article className={styles.ad}>
        <div className={styles.topline}>
          <span className={styles.label}>PARTNER OFFER</span>
          <span className={styles.sponsored}>Sponsored</span>
        </div>
        <div className={styles.brand}>PDF2Go</div>
        <h2>Need more ways to work with PDFs?</h2>
        <p>Explore online tools to edit, convert and compress PDF documents when you need another option.</p>
        <a
          href="https://account.pdf2go.com?fpr=q9hdyc"
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className={styles.button}
        >
          Explore PDF2Go <span aria-hidden="true">→</span>
        </a>
        <p className={styles.disclosure}>Affiliate link: Alyvero may earn a commission if you sign up.</p>
      </article>
    </section>
  );
}
