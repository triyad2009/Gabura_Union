import Link from "next/link";

const layers=[
["climate","Climate","জলবায়ু","Heat, rainfall, tidal dynamics and long-term environmental change."],
["sundarbans","Sundarbans","সুন্দরবন","Mangrove ecology, protection, resources and the human-forest relationship."],
["cyclones","Cyclones","ঘূর্ণিঝড়","Sidr, Aila, Bulbul, Amphan, Yaas, Remal and future storm records."],
["floods","Floods","বন্যা ও জলোচ্ছ্বাস","Tidal flooding, waterlogging, inundation depth and recovery."],
["river-erosion","River Erosion","নদীভাঙন","Kholpetua, riverbank movement and erosion evidence."],
["salinity","Salinity","লবণাক্ততা","Soil, surface water, groundwater and seasonal salinity."],
["drinking-water","Drinking Water","পানীয় জল","Ponds, rainwater, treatment, access and post-cyclone crises."],
["polder-15","Polder 15","পোল্ডার ১৫","Embankment, drainage, khal rehabilitation and coastal protection works."],
["coastal-protection","Coastal Protection","উপকূল সুরক্ষা","Embankment, sluice, slope protection and resilience infrastructure."],
["environment","Environment","পরিবেশ","Mangrove, biodiversity, land, water and human pressure."],
["disaster-timeline","Disaster Timeline","দুর্যোগের সময়রেখা","A date-by-date record of major hazards and their local effects."]
];

export default function ClimatePage(){return <main>
<header className="nav"><div className="wrap history-nav"><Link className="brand" href="/">GABURA ARCHIVE</Link><Link className="navlink" href="/">← ARCHIVE</Link></div></header>
<section className="layer-hero"><div className="wrap"><div className="eyebrow">SECTION 03 / CLIMATE & GABURA</div><h1>Climate<br/><em>& Gabura</em></h1><p>গাবুরার জলবায়ু শুধু weather-এর গল্প নয়। পানি, নদী, সুন্দরবন, লবণাক্ততা, বাঁধ, ঘূর্ণিঝড় এবং মানুষের টিকে থাকার কৌশল—সবকিছুকে একই evidence map-এ পড়তে হবে।</p><div className="layer-meta"><span>Climate evidence</span><span>Infrastructure records</span><span>Disaster memory</span></div></div></section>
<section className="layer-content"><div className="wrap"><div className="section-intro"><div><div className="eyebrow">11 LAYERS</div><h2>A coastal archive</h2></div><p>প্রতিটি climate record-এ date, place, hazard, observed impact, source এবং confidence আলাদা থাকবে। অনুমানকে fact হিসেবে দেখানো হবে না।</p></div><div className="climate-grid">{layers.map(([slug,title,bn,desc],i)=><Link key={slug} href={"/climate/"+slug} className="climate-card"><span>03.{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><b>{bn}</b><p>{desc}</p><i>Explore →</i></Link>)}</div></div></section>
<section className="layer-facts"><div className="wrap facts-grid"><div><div className="eyebrow">Evidence snapshot</div><h2>What we know.</h2></div><div className="fact-list"><div><span>01</span>Polder-15 surrounds Gabura and was conceived in the 1960s; construction began in 1968 and was completed in 1971.</div><div><span>02</span>BWDB records identify cyclone, tidal flooding and salinity intrusion as core risks for the polder.</div><div><span>03</span>2024 Cyclone Remal caused a documented drinking-water crisis in Gabura after saltwater entered a major pond source.</div><div><span>04</span>Current Polder-15 rehabilitation includes a 210-metre remaining embankment work package scheduled from September 2026 to May 2027.</div></div></div></section>
</main>}