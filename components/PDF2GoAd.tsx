export default function PDF2GoAd() {
  return (
    <section className="pdf2go-ad-section" aria-label="Sponsored affiliate offer">
      <aside className="pdf2go-ad">
        <div className="pdf2go-ad__label">SPONSORED</div>
        <div className="pdf2go-ad__brand">PDF2Go</div>
        <h2>Edit, Convert &amp; Compress PDFs</h2>
        <p>Manage your PDF files online with simple tools for everyday document tasks.</p>
        <a
          href="https://account.pdf2go.com?fpr=q9hdyc"
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="pdf2go-ad__button"
        >
          Try PDF2Go <span aria-hidden="true">→</span>
        </a>
        <p className="pdf2go-ad__disclosure">
          Affiliate link. Alyvero may earn a commission.
        </p>
      </aside>
      <style jsx>{`
        .pdf2go-ad-section {
          display: flex;
          justify-content: center;
          padding: 0 0 48px;
        }
        .pdf2go-ad {
          box-sizing: border-box;
          width: 320px;
          max-width: 100%;
          min-height: 300px;
          padding: 20px;
          border: 1px solid #dfe4ec;
          border-radius: 12px;
          background: #fff;
          color: #17202b;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: 0 7px 24px rgba(35, 55, 90, 0.055);
        }
        .pdf2go-ad__label {
          margin-bottom: 10px;
          color: #68727d;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .08em;
        }
        .pdf2go-ad__brand {
          margin-bottom: 10px;
          color: #3155e7;
          font-size: 15px;
          font-weight: 750;
        }
        .pdf2go-ad h2 {
          margin: 0 0 10px;
          font-size: 21px;
          line-height: 1.3;
          letter-spacing: -.025em;
        }
        .pdf2go-ad p {
          margin: 0 0 16px;
          color: #56616c;
          font-size: 13px;
          line-height: 1.55;
        }
        .pdf2go-ad .pdf2go-ad__button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 15px;
          border-radius: 7px;
          background: #3155e7;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }
        .pdf2go-ad .pdf2go-ad__button:hover {
          background: #2546cc;
        }
        .pdf2go-ad .pdf2go-ad__disclosure {
          margin: auto 0 0;
          padding-top: 14px;
          color: #68727d;
          font-size: 10px;
          line-height: 1.4;
        }
        @media (max-width: 360px) {
          .pdf2go-ad { padding: 18px; }
        }
      `}</style>
    </section>
  );
}
