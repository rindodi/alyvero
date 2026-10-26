import styles from "./PDF2GoAd.module.css";

export default function PDF2GoAd() {
  return (
    <section className={styles.section} aria-label="Sponsored affiliate offer">
      <aside className={styles.ad}>
        <div className={styles.label}>SPONSORED</div>
        <div className={styles.brand}>PDF2Go</div>
        <h2>Edit, Convert &amp; Compress PDFs</h2>
        <p>Manage your PDF files online with simple tools for everyday document tasks.</p>
        <a
          href="https://account.pdf2go.com?fpr=q9hdyc"
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className={styles.button}
        >
          Try PDF2Go <span aria-hidden="true">→</span>
        </a>
        <p className={styles.disclosure}>
          Affiliate link. Alyvero may earn a commission.
        </p>
      </aside>
    </section>
  );
}
