import Link from "next/link";

const layers=[
["archive","Document Archive","নথি আর্কাইভ","A searchable home for PDFs, scans, notices, maps, photographs and other primary material."],
["government-records","Government Records","সরকারি নথি","Union, Upazila, BWDB, BBS and other public records with date and issuing authority."],
["court-records","Court Records","আদালতের নথি","Case numbers, orders, judgments and procedural status—never allegations presented as verdicts."],
["tender-archive","Tender Archive","টেন্ডার আর্কাইভ","Tender, package, award, contractor, BOQ and contract-management trail."],
["project-records","Project Records","প্রকল্প নথি","Project proposal, cost, location, progress, inspection, payment and completion evidence."],
["election-archive","Election Archive","নির্বাচন আর্কাইভ","Candidates, results, notices, turnout and source-linked election history."],
["investigation","Investigation","অনুসন্ধান","Evidence-led investigations with claim/source/response/status separation."],
["complaints","Complaints","অভিযোগ","A structured record of complaints, their sources, responses and status."],
["right-of-reply","Right of Reply","জবাবের অধিকার","A dedicated space for people or institutions to respond to published claims."],
["source-database","Source Database","উৎস ডেটাবেস","The backbone connecting every claim to a source, date, document and confidence level."]
];

export default function DocumentsPage(){return <main>
<header className="nav"><div className="wrap history-nav"><Link className="brand" href="/">GABURA ARCHIVE</Link><Link className="navlink" href="/">← ARCHIVE</Link></div></header>
<section className="layer-hero"><div className="wrap"><div className="eyebrow">SECTION 04 / DOCUMENTS & ACCOUNTABILITY</div><h1>Documents<br/><em>& Accountability</em></h1><p>কোনো দাবি শুধু লেখা থাকবে না—তার পেছনে কোন নথি, কোন উৎস, কোন তারিখ, কার বক্তব্য এবং বর্তমান status কী, তা দেখা যাবে।</p><div className="layer-meta"><span>Source-first</span><span>Claim-led</span><span>Right of reply</span></div></div></section>
<section className="layer-content"><div className="wrap"><div className="section-intro"><div><div className="eyebrow">10 LAYERS</div><h2>The evidence centre</h2></div><p>এই section-টি archive-এর accountability engine। সরকারি procurement system, court records এবং Right to Information framework-এর মতো primary systems থেকে পাওয়া material এখানে source-linked হবে।</p></div><div className="climate-grid">{layers.map(([slug,title,bn,desc],i)=><Link key={slug} href={"/documents/"+slug} className="climate-card"><span>04.{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><b>{bn}</b><p>{desc}</p><i>Explore →</i></Link>)}</div></div></section>
<section className="layer-facts"><div className="wrap facts-grid"><div><div className="eyebrow">Archive rules</div><h2>Evidence before accusation.</h2></div><div className="fact-list"><div><span>01</span>Claim ≠ fact. Every allegation must carry source, date, response and status.</div><div><span>02</span>Court record ≠ conviction. A case, charge, order and judgment are separate states.</div><div><span>03</span>Tender ≠ corruption. Procurement records will be described without assuming wrongdoing.</div><div><span>04</span>Silence ≠ admission. The archive will record whether a right of reply was requested, received or unavailable.</div></div></div></section>
<section className="layer-queue"><div className="wrap"><div className="eyebrow">Core schema</div><h2>Claim → Source → Response → Status</h2><div className="queue-grid"><div><b>01</b>Claim / allegation</div><div><b>02</b>Primary or independent source</div><div><b>03</b>Date + location</div><div><b>04</b>Person/institution named</div><div><b>05</b>Right-of-reply status</div><div><b>06</b>Court / administrative status</div></div></div></section>
</main>}