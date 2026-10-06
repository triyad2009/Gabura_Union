import Link from "next/link";

const cards=[
["01","GABURA","Identity, history, geography and the changing landscape.","/gabura"],
["02","PEOPLE","People, community, education, health and society.","/people"],
["03","CLIMATE & GABURA","Water, Sundarbans, disasters and coastal resilience.","/climate"],
["04","DOCUMENTS & ACCOUNTABILITY","Evidence, records, claims and sources.","/documents"],
["05","STORIES & GABURA TODAY","Stories, interviews, culture, sport and the future.","/stories"],
];

export default function Home(){
 return <main>
  <header className="nav"><div className="wrap" style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"min(1180px,calc(100% - 40px))"}}><Link className="brand" href="/">GABURA ARCHIVE</Link><Link className="navlink" href="/gabura">Explore Archive →</Link></div></header>
  <section className="hero"><div className="wrap"><div className="eyebrow">A living digital archive · Gabura, Shyamnagar</div><h1>Documenting<br/>Gabura.</h1><p>একটি উপকূলীয় জনপদের ইতিহাস, মানুষ, স্মৃতি, জলবায়ু, নথি ও বর্তমানকে উৎসসহ সংরক্ষণ করার একটি স্বাধীন ডিজিটাল আর্কাইভ।</p></div></section>
  <section className="section"><div className="wrap"><div className="eyebrow">The Archive</div><h2>Five ways to understand Gabura.</h2><p className="muted">প্রতিটি তথ্যকে প্রেক্ষাপট, উৎস এবং সময়ের সঙ্গে সাজানো হবে—যাতে একটি জায়গা থেকে অন্য রেকর্ডে সহজে যাওয়া যায়।</p><div className="grid">{cards.map(([n,t,d,u])=><Link className="card" href={u} key={n}><small>{n}</small><h2>{t}</h2><p>{d}</p></Link>)}</div></div></section>
  <footer className="footer"><div className="wrap">GABURA DIGITAL ARCHIVE · Evidence first · Sources matter.</div></footer>
 </main>
}