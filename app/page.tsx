import Link from "next/link";

const cards = [
  ["01","GABURA","Identity, history, geography, rivers, villages and the changing landscape.","/gabura"],
  ["02","PEOPLE","People, community, education, health, livelihood and society.","/people"],
  ["03","CLIMATE & GABURA","Water, Sundarbans, disasters, salinity and coastal resilience.","/climate"],
  ["04","DOCUMENTS & ACCOUNTABILITY","Evidence, records, claims, investigations and source trails.","/documents"],
  ["05","STORIES & GABURA TODAY","Stories, interviews, culture, sport, memory and the future.","/stories"],
] as const;

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="wrap home-nav">
          <Link className="brand" href="/">GABURA <span>ARCHIVE</span></Link>
          <Link className="navlink nav-cta" href="/gabura">Explore archive <b>↗</b></Link>
        </div>
      </header>

      <section className="home-hero">
        <div className="wrap home-hero-inner">
          <div className="eyebrow">Independent digital archive · Gabura, Shyamnagar</div>
          <div className="hero-number" aria-hidden="true">01</div>
          <h1>Documenting<br/><em>Gabura.</em></h1>
          <p className="hero-deck">
            একটি উপকূলীয় জনপদের ইতিহাস, মানুষ, স্মৃতি, জলবায়ু, নথি ও বর্তমানকে
            উৎসসহ সংরক্ষণ করার একটি স্বাধীন ডিজিটাল আর্কাইভ।
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/gabura">Enter the archive <span>↗</span></Link>
            <a className="button button-ghost" href="#archive">Five sections <span>↓</span></a>
          </div>
        </div>
      </section>

      <section id="archive" className="home-archive section">
        <div className="wrap">
          <div className="section-heading">
            <div className="eyebrow">The archive</div>
            <h2>Five ways to<br/><em>understand Gabura.</em></h2>
            <p>একটি তথ্যের সঙ্গে তার প্রেক্ষাপট, উৎস, সময় ও প্রমাণের পথও থাকবে।</p>
          </div>
          <div className="archive-grid">
            {cards.map(([n, title, desc, href]) => (
              <Link className="archive-card" href={href} key={n}>
                <div className="archive-card-top"><small>{n}</small><span>↗</span></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="card-line" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-principles">
        <div className="wrap principles-grid">
          <div>
            <div className="eyebrow">Archive principles</div>
            <h2>Evidence<br/><em>before certainty.</em></h2>
          </div>
          <div className="principles-list">
            <div><b>01</b><span>Source first — তথ্যের সঙ্গে উৎস থাকবে।</span></div>
            <div><b>02</b><span>Time aware — পুরোনো তথ্যকে বর্তমান বলে দেখানো হবে না।</span></div>
            <div><b>03</b><span>Uncertainty visible — conflict বা research-needed লুকানো হবে না।</span></div>
            <div><b>04</b><span>Memory matters — oral history-কে source type হিসেবে আলাদা রাখা হবে।</span></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>GABURA DIGITAL ARCHIVE</span>
          <span>History · People · Climate · Documents · Stories</span>
        </div>
      </footer>
    </main>
  );
}
