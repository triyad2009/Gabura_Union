import Link from "next/link";

const layers=[
["stories","Stories","গল্প","Long-form stories grounded in people, places, documents and lived experience."],
["photo-stories","Photo Stories","ছবির গল্প","Visual narratives where every image carries date, place and context."],
["video-archive","Video Archive","ভিডিও আর্কাইভ","Documentary footage, interviews, events and historical visual material."],
["interviews","Interviews","সাক্ষাৎকার","Recorded conversations with residents, workers, teachers, leaders and witnesses."],
["oral-history","Oral History","মৌখিক ইতিহাস","Memory-based accounts preserved with narrator, date, place and confidence."],
["martello-cup","Martello Cup","মার্টেলো কাপ","Gabura's local football culture, seasons, teams, matches and community memory."],
["local-culture","Local Culture","স্থানীয় সংস্কৃতি","Food, language, rituals, sports, craft, celebrations and everyday life."],
["news","News","খবর","A dated local news index with source, publication date and claim status."],
["community-projects","Community Projects","কমিউনিটি প্রকল্প","Local initiatives, resilience work, education, environment and civic action."],
["gabura-today","Gabura Today","আজকের গাবুরা","A current snapshot that changes with verified updates rather than becoming a static page."],
["future-gabura","Future Gabura","ভবিষ্যতের গাবুরা","Ideas, plans, aspirations and evidence-based questions about what comes next."]
];

export default function StoriesPage(){return <main>
<header className="nav"><div className="wrap history-nav"><Link className="brand" href="/">GABURA ARCHIVE</Link><Link className="navlink" href="/">← ARCHIVE</Link></div></header>
<section className="layer-hero"><div className="wrap"><div className="eyebrow">SECTION 05 / STORIES & GABURA TODAY</div><h1>Stories<br/><em>& Gabura Today</em></h1><p>একটি জায়গার archive শুধু statistics দিয়ে বেঁচে থাকে না। মানুষের কণ্ঠ, ছবি, video, খেলাধুলা, সংস্কৃতি, স্মৃতি এবং আজকের পরিবর্তনও তার ইতিহাসের অংশ।</p><div className="layer-meta"><span>Human stories</span><span>Visual archive</span><span>Living memory</span></div></div></section>
<section className="layer-content"><div className="wrap"><div className="section-intro"><div><div className="eyebrow">11 LAYERS</div><h2>A living archive</h2></div><p>Stories section-এর প্রতিটি item-এর সঙ্গে date, place, people, source/consent এবং media context থাকবে। Sensitive stories-এ privacy-first handling থাকবে।</p></div><div className="climate-grid">{layers.map(([slug,title,bn,desc],i)=><Link key={slug} href={"/stories/"+slug} className="climate-card"><span>05.{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><b>{bn}</b><p>{desc}</p><i>Explore →</i></Link>)}</div></div></section>
<section className="layer-facts"><div className="wrap facts-grid"><div><div className="eyebrow">Living evidence</div><h2>Stories need context.</h2></div><div className="fact-list"><div><span>01</span>A photograph without date/place is an image; with provenance it becomes archive material.</div><div><span>02</span>An interview is a person's account—not automatically an independently verified fact.</div><div><span>03</span>Current news must carry publication date and source so later readers can reconstruct what was known then.</div><div><span>04</span>Local culture belongs to residents; the archive should document, not manufacture tradition.</div></div></div></section>
<section className="layer-queue"><div className="wrap"><div className="eyebrow">Story standard</div><h2>Person → Place → Time → Evidence</h2><div className="queue-grid"><div><b>01</b>Who is speaking / appearing?</div><div><b>02</b>Where did it happen?</div><div><b>03</b>When was it recorded?</div><div><b>04</b>What evidence accompanies it?</div><div><b>05</b>Consent / attribution status</div><div><b>06</b>Context + correction history</div></div></div></section>
</main>}