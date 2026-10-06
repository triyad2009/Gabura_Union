import Link from "next/link";

const layers = [
 ["01","People","মানুষ","পরিবার, পরিচয়, পেশা, জীবন ও স্মৃতির verified archive."],
 ["02","Community","সম্প্রদায় ও সমাজ","পাড়া, প্রতিষ্ঠান, সামাজিক সম্পর্ক ও community life."],
 ["03","Education","শিক্ষা","স্কুল, মাদ্রাসা, শিক্ষক, শিক্ষার্থী ও শিক্ষার ইতিহাস."],
 ["04","Health","স্বাস্থ্য","চিকিৎসা, পানি, স্যানিটেশন ও স্বাস্থ্যসেবায় প্রবেশাধিকার."],
 ["05","Livelihood","জীবিকা","কাঁকড়া, চিংড়ি, কৃষি, মাছ, বন ও অন্যান্য কাজ."],
 ["06","Women & Children","নারী ও শিশু","শিক্ষা, স্বাস্থ্য, শ্রম, অধিকার ও vulnerability."],
 ["07","Youth","তরুণ প্রজন্ম","শিক্ষা, কাজ, খেলাধুলা, digital life ও aspiration."],
 ["08","Migration","অভিবাসন","মৌসুমি ও স্থায়ী migration-এর কারণ, গন্তব্য ও প্রভাব."],
 ["09","Culture","সংস্কৃতি","ভাষা, আচার, উৎসব, খাবার, গান ও স্থানীয় স্মৃতি."],
 ["10","Sports","খেলাধুলা","মাঠ, দল, খেলোয়াড়, tournament ও community identity."]
];

export default function PeoplePage() {
 return <main>
  <header className="nav"><div className="wrap history-nav">
   <Link className="brand" href="/">GABURA ARCHIVE</Link>
   <Link className="navlink" href="/">← ARCHIVE</Link>
  </div></header>

  <section className="people-hero"><div className="wrap">
   <div className="eyebrow">SECTION 02 / PEOPLE</div>
   <h1>People<br/><em>of Gabura</em></h1>
   <p>গাবুরাকে বুঝতে হলে প্রথমে তার মানুষকে বুঝতে হবে—তাদের জীবন, কাজ, শিক্ষা, স্মৃতি, স্থানান্তর, সংস্কৃতি এবং ভবিষ্যতের আকাঙ্ক্ষা।</p>
   <div className="people-meta"><span>People-first archive</span><span>Evidence-led</span><span>Time-aware</span></div>
  </div></section>

  <section className="people-lead"><div className="wrap people-lead-grid">
   <div><div className="eyebrow">A living archive</div><h2>মানুষকে শুধু একটি population number হিসেবে দেখা হবে না।</h2></div>
   <div>
    <p>২০১১ সালের Census baseline অনুযায়ী গাবুরায় 31,115 মানুষ ও 6,753 household ছিল। ২০১৫ সালের UNICEF-supported profile একই সময়ের literacy, child population ও livelihood-এর বিস্তারিত snapshot দিয়েছে। এগুলো historical baseline—বর্তমানের অনুমান নয়।</p>
    <p>এই section-এর প্রতিটি record-এ <strong>সময় · স্থান · উৎস · প্রমাণ · confidence</strong> আলাদা থাকবে। ব্যক্তিগত স্মৃতি বা interview-কে কখনো সরকারি fact হিসেবে দেখানো হবে না।</p>
   </div>
  </div></section>

  <section className="people-stats"><div className="wrap people-stat-grid">
   <div><strong>31,115</strong><span>Population · Census 2011</span></div>
   <div><strong>6,753</strong><span>Households · Census 2011</span></div>
   <div><strong>35.9%</strong><span>Literacy · Census 2011</span></div>
   <div><strong>45.21%</strong><span>Age 0–19 · Census 2011</span></div>
  </div></section>

  <section className="people-profile"><div className="wrap profile-grid">
   <div><div className="eyebrow">2011 SNAPSHOT</div><h2>একটি census থেকে পাওয়া মানুষের ছবি</h2></div>
   <div className="profile-copy">
    <p>2011 data-তে পুরুষ 15,398 এবং নারী 15,717। 0–19 বছর বয়সী জনসংখ্যা ছিল 14,066। literacy ছিল 35.9%—পুরুষ 38.8% এবং নারী 33.2%।</p>
    <p>2015 profile-এ crab fattening, shrimp farming, agriculture, fishing, day labour ও small trade-কে স্থানীয় জীবিকার অংশ হিসেবে নথিবদ্ধ করা হয়েছে। এগুলো 2015-এর socioeconomic snapshot; আজকের occupation map নয়।</p>
   </div>
  </div></section>

  <section className="people-sections"><div className="wrap">
   <div className="section-heading"><div><div className="eyebrow">SECTION 02 MAP</div><h2>Ten layers of people</h2></div><p>একজন মানুষের জীবন একাধিক সামাজিক ও ভৌগোলিক layer-এর সঙ্গে যুক্ত।</p></div>
   <div className="people-grid">{layers.map(([n,title,bn,desc])=><div className="people-card" key={n}><span>{n}</span><div><small>{bn}</small><h3>{title}</h3><p>{desc}</p></div><b>↗</b></div>)}</div>
  </div></section>

  <section className="people-method"><div className="wrap people-method-grid">
   <div><div className="eyebrow">ARCHIVE METHOD</div><h2>একজন মানুষের record কীভাবে তৈরি হবে?</h2><p className="method-intro">শুধু নাম সংগ্রহ নয়—একটি record-এর সঙ্গে তার প্রমাণের পথও থাকবে।</p></div>
   <div className="method-list">
    <div><b>01</b><span><strong>Identity</strong> — প্রয়োজনীয় পরিচয় তথ্য</span></div>
    <div><b>02</b><span><strong>Place</strong> — village, mouza, ward বা locality</span></div>
    <div><b>03</b><span><strong>Time</strong> — তথ্যটি কোন সময়ের</span></div>
    <div><b>04</b><span><strong>Evidence</strong> — document, interview, photo বা public record</span></div>
    <div><b>05</b><span><strong>Source</strong> — তথ্যের উৎস ও provenance</span></div>
    <div><b>06</b><span><strong>Confidence</strong> — verified / documented / reported / oral history</span></div>
   </div>
  </div></section>

  <section className="people-research"><div className="wrap people-research-box">
   <div><div className="eyebrow">RESEARCH QUEUE</div><h2>যে মানুষ-ভিত্তিক database এখনো তৈরি হবে</h2></div>
   <div className="research-grid"><span>Village-wise population</span><span>Household change</span><span>Occupation map</span><span>Education history</span><span>Health access</span><span>Migration patterns</span><span>Women-led households</span><span>Youth profiles</span><span>Local institutions</span><span>Oral histories</span><span>Community groups</span><span>Sports profiles</span></div>
  </div></section>

  <section className="people-source"><div className="wrap"><div className="eyebrow">SOURCE DISCIPLINE</div><p>2011 Census এবং 2015 UNICEF-supported Gabura Union Profile এই page-এর historical baseline। সরকারি source-এ থাকা পুরোনো সংখ্যা এবং বর্তমান population একসঙ্গে মেশানো হবে না। নতুন সংখ্যা পাওয়া গেলে year + source + methodology-সহ আলাদা snapshot তৈরি হবে।</p></div></section>
 </main>;
}
