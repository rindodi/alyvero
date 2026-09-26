import { tools } from "@/lib/tools";

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Solve it.<br />Get it done.</h1>
        <p>Simple online tools for converting, compressing and creating files directly from your browser.</p>
        <form className="search-box" action="/#tools">
          <input name="q" placeholder="What do you need to do?" aria-label="Search Alyvero tools" />
          <button type="submit">Find a tool</button>
        </form>
      </section>
      <section className="section" id="tools">
        <h2>Popular tools</h2>
        <div className="tool-grid">
          {tools.map((tool) => (
            <a className="tool-card" href={`/${tool.slug}`} key={tool.slug}>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}