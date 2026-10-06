import Link from "next/link";

const subsections = [
  {n:"01",slug:"people",title:"People",bn:"মানুষ",desc:"গাবুরার মানুষ—জনসংখ্যার সংখ্যা নয়, বরং পরিবার, পেশা, পরিচয়, স্মৃতি ও জীবনের পরিবর্তনের archive."},
  {n:"02",slug:"community",title:"Community",bn:"সম্প্রদায় ও সমাজ",desc:"পাড়া, সামাজিক সম্পর্ক, ধর্মীয় প্রতিষ্ঠান, স্থানীয় সংগঠন ও community life."},
  {n:"03",slug:"education",title:"Education",bn:"শিক্ষা",desc:"স্কুল, মাদ্রাসা, শিক্ষার্থী, শিক্ষক, dropout, literacy এবং শিক্ষার ইতিহাস."},
  {n:"04",slug:"health",title:"Health",bn:"স্বাস্থ্য",desc:"স্বাস্থ্যকেন্দ্র, মাতৃ ও শিশুস্বাস্থ্য, পানি-স্যানিটেশন, চিকিৎসা-প্রাপ্তি ও স্থানীয় স্বাস্থ্য বাস্তবতা."},
  {n:"05",slug:"livelihood",title:"Livelihood",bn:"জীবিকা",desc:"কাঁকড়া, চিংড়ি, কৃষি, মাছ, বননির্ভর কাজ, দিনমজুরি, ব্যবসা ও seasonal income."},
  {n:"06",slug:"women-and-children",title:"Women & Children",bn:"নারী ও শিশু",desc:"নারী ও শিশুদের জীবন, অধিকার, শিক্ষা, শ্রম, স্বাস্থ্য ও vulnerability."},
  {n:"07",slug:"youth",title:"Youth",bn:"তরুণ প্রজন্ম",desc:"তরুণদের শিক্ষা, কাজ, migration, sport, digital life এবং ভবিষ্যতের আকাঙ্ক্ষা."},
  {n:"08",slug:"migration",title:"Migration",bn:"অভিবাসন",desc:"মৌসুমি ও স্থায়ী migration—কেন মানুষ যায়, কোথায় যায় এবং ফিরে এসে কী বদলায়."},
  {n:"09",slug:"culture",title:"Culture",bn:"সংস্কৃতি",desc:"ভাষা, লোকাচার, ধর্মীয় ও সামাজিক উৎসব, গান, খাবার, পোশাক, স্মৃতি ও স্থানীয় ঐতিহ্য."},
  {n:"10",slug:"sports",title:"Sports",bn:"খেলাধুলা",desc:"স্থানীয় খেলাধুলা, মাঠ, দল, খেলোয়াড়, tournament এবং community identity."}
];

export default function PeoplePage(){
 return <main>
  <header className="nav"><div className="wrap history-nav">
   <Link className="brand" href="/">GABURA ARCHIVE</Link>
   <Link className="navlink" href="/">← ARCHIVE</Link>
  </div></header>

  <section className="people-hero">
   <div className="wrap">
    <div className="eyebrow">Section 02 / PEOPLE</div>
    <h1>People<br/><em>of Gabura</em></h1>
    <p>একটি ইউনিয়নকে বোঝার সবচেয়ে গুরুত্বপূর্ণ archive হলো তার মানুষ—তারা কোথায় থাকে, কীভাবে বাঁচে, কী কাজ করে, কী হারায়, কী মনে রাখে এবং ভবিষ্যৎ নিয়ে কী ভাবে।</p>
    <div className="people-meta"><span>People-first archive</span><span>Evidence + oral history</span><span>Time-aware records</span></div>
   </div>
  </section>

  <section className="people-lead"><div className="wrap people-lead-grid">
   <div><div className="eyebrow">The principle</div><h2>মানুষকে শুধু population number হিসেবে দেখা হবে না।</h2></div>
   <div><p>২০১১ সালের Census অনুযায়ী গাবুরার জনসংখ্যা ছিল 31,115 এবং 6,753 household। একই ২০১৫ সালের UNICEF-supported Union Profile-এ literacy, livelihood, child population, women ও health-এর আলাদা snapshot রয়েছে। এই data-গুলো baseline—আজকের মানুষের সম্পূর্ণ ছবি নয়। citeturn0search0turn0search12</p><p>তাই PEOPLE section-এ প্রতিটি record-এর সঙ্গে <b>সময়, স্থান, source, evidence এবং confidence</b> রাখা হবে। Oral history হলে সেটিও স্পষ্টভাবে labelled থাকবে।</p></div>
  </div></section>

  <section className="people-stats"><div className="wrap people-stat-grid">
   <div><strong>31,115</strong><span>2011 population baseline</span></div>
   <div><strong>6,753</strong><span>2011 households</span></div>
   <div><strong>35.9%</strong><span>2011 literacy rate in the 2015 profile</span></div>
   <div><strong>45.21%</strong><span>population aged 0–19 in 2011</span></div>
  </div></section>

  <section className="people-sections"><div className="wrap">
   <div className="section-heading"><div><div className="eyebrow">Section 02 map</div><h2>Ten layers of people</h2></div><p>একটি মানুষের জীবন একাধিক layer-এর সঙ্গে যুক্ত। archive সেই সম্পর্কগুলো ধরে রাখবে।</p></div>
   <div className="people-grid">{subsections.map(x=><Link className="people-card" href={`/people/${x.slug}`} key={x.slug}><span>{x.n}</span><div><small>{x.bn}</small><h3>{x.title}</h3><p>{x.desc}</p></div><b>↗</b></Link>)}</div>
  </div></section>

  <section className="people-method"><div className="wrap people-method-grid">
   <div><div className="eyebrow">Archive method</div><h2>একজন মানুষের record কীভাবে তৈরি হবে?</h2></div>
   <div className="method-list">
    <div><b>01</b><span>Identity — নাম/পরিচয়ের প্রয়োজনীয় তথ্য</span></div>
    <div><b>02</b><span>Place — village, mouza, ward বা locality</span></div>
    <div><b>03</b><span>Time — record-এর নির্দিষ্ট সময়</span></div>
    <div><b>04</b><span>Evidence — document, interview, photo বা public record</span></div>
    <div><b>05</b><span>Source — কে/কোথা থেকে তথ্য এসেছে</span></div>
    <div><b>06</b><span>Confidence — verified, documented, reported বা oral history</span></div>
   </div>
  </div></section>

  <section className="people-research"><div className="wrap people-research-box">
   <div><div className="eyebrow">Research queue</div><h2>যে database এখনো তৈরি করতে হবে</h2></div>
   <div className="research-grid">
    <span>Village-wise current population</span><span>Household change</span><span>Occupation map</span><span>Education history</span><span>Health access</span><span>Migration patterns</span><span>Women-led households</span><span>Youth profiles</span><span>Local leaders & institutions</span><span>Oral histories</span><span>Community organizations</span><span>Sports personalities</span>
   </div>
  </div></section>

  <section className="people-source"><div className="wrap"><div className="eyebrow">Source note</div><p>এই landing page-এর baseline figures মূলত 2011 Population & Housing Census এবং 2015 UNICEF-supported Profile of Gabura Union থেকে নেওয়া। Profile-এ 2011 literacy 35.9%, 0–19 population 45.21% এবং livelihood-এর sectoral distribution-ও দেওয়া হয়েছে। পুরোনো data-কে current fact হিসেবে ব্যবহার করা হবে না। citeturn0search0</p></div></section>
 </main>
}
