import Link from "next/link";

const items=[
["about","About Gabura","পরিচয়, অবস্থান ও মৌলিক তথ্য"],
["history","History","বসতি থেকে বর্তমান পর্যন্ত ইতিহাস"],
["origin-of-name","Origin of Name","গাবুরা নামের উৎপত্তি — লোকঐতিহ্য ও প্রমাণ"],
["geography","Geography","দ্বীপ-জনপদ, সীমানা ও ভূপ্রকৃতি"],
["rivers-and-waterways","Rivers & Waterways","নদী, খাল ও জোয়ার-ভাটার জীবন"],
["villages-and-mouzas","Villages & Mouzas","গ্রাম, মৌজা ও স্থানীয় ভূগোল"],
["population","Population","জনসংখ্যা ও পরিসংখ্যান"],
["administration","Administration","ইউনিয়ন প্রশাসন ও প্রতিষ্ঠান"],
["maps","Maps","ঐতিহাসিক ও বর্তমান মানচিত্র"],
["timeline","Historical Timeline","সময়রেখায় গাবুরার গুরুত্বপূর্ণ অধ্যায়"],
["communication","Communication & Access","রাস্তা, নদীপথ, বাঁধ ও মানুষের চলাচল"],
];

export default function Gabura(){
 return <main><header className="nav"><div className="wrap" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><Link className="brand" href="/">GABURA ARCHIVE</Link><span className="navlink">SECTION 01 / GABURA</span></div></header>
 <section className="hero"><div className="wrap"><div className="eyebrow">Section 01</div><h1>GABURA</h1><p>একটি উপকূলীয় ইউনিয়নের পরিচয়, ইতিহাস, ভূগোল, নদী, গ্রাম, জনসংখ্যা, প্রশাসন ও পরিবর্তনের দীর্ঘ রেকর্ড।</p></div></section>
 <section className="section"><div className="wrap"><div className="grid">{items.map(([slug,title,desc],i)=><Link className="card" href={"/gabura/"+slug} key={slug}><small>{String(i+1).padStart(2,"0")}</small><h2>{title}</h2><p>{desc}</p></Link>)}</div></div></section></main>
}