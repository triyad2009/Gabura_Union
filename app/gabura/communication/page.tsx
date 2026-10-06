import Link from "next/link";

type TransportRecord = {
  number: string;
  label: string;
  title: string;
  status: "Documented" | "Needs current verification";
  body: string;
};

const transportRecords: TransportRecord[] = [
  {
    number: "01",
    label: "ACCESS / WATER",
    title: "খোলপেটুয়া নদী: যোগাযোগের ভৌগোলিক দরজা",
    status: "Documented",
    body: "গাবুরার মূল ভূখণ্ডের সঙ্গে যোগাযোগের ইতিহাস ও বর্তমান বাস্তবতা নদীর সঙ্গে সরাসরি যুক্ত। ২০১৫ সালের ইউনিয়ন প্রোফাইল গাবুরাকে hard-to-reach এলাকা হিসেবে বর্ণনা করেছে এবং খোলপেটুয়া নদীকে মূল ভূখণ্ড থেকে বিচ্ছিন্নতার গুরুত্বপূর্ণ কারণ হিসেবে উল্লেখ করেছে। ২০১৯ সালের একটি PPEPP ছবির নথিতেও স্থানীয় নৌযানকে শ্যামনগর mainland থেকে গাবুরায় যাতায়াতের মাধ্যম হিসেবে দেখানো হয়েছে।"
  },
  {
    number: "02",
    label: "ROAD NETWORK",
    title: "ভেতরের রাস্তা: ইউনিয়নের দৈনন্দিন চলাচলের কাঠামো",
    status: "Documented",
    body: "২০১৫ সালের Profile-এ কিছু সলিং ও কাঁচা রাস্তার মাধ্যমে প্রায় সব গ্রামের সঙ্গে যোগাযোগের কথা বলা হয়েছে। একই প্রোফাইলে মোট রাস্তা হিসেবে ২ কিলোমিটার পাকা ও ৭০ কিলোমিটার কাঁচা রাস্তার সংখ্যা দেওয়া আছে। এই সংখ্যা বর্তমান রাস্তার দৈর্ঘ্য হিসেবে ব্যবহার করা যাবে না—এটি ২০১৫/২০১৬ সময়ের source snapshot।"
  },
  {
    number: "03",
    label: "VILLAGE ACCESS",
    title: "গ্রামভেদে দূরত্ব ও যাতায়াত এক নয়",
    status: "Documented",
    body: "২০১৫ সালের ইউনিয়ন প্রোফাইলে ইউনিয়ন পরিষদ থেকে Sora-এর দূরত্ব ১২ কিমি, Chakbara ১১ কিমি, Chandmukhi ৮ কিমি এবং Dumuria ৭ কিমি হিসেবে দেওয়া হয়েছে। ওই সময় van, cycle ও motorcycle ব্যবহারের কথা উল্লেখ আছে। পুরো গ্রামের বর্তমান travel-time বা route condition-এর জন্য নতুন field verification প্রয়োজন।"
  },
  {
    number: "04",
    label: "EMBANKMENT / ROAD",
    title: "বাঁধ শুধু সুরক্ষা নয়—অনেক জায়গায় চলাচলেরও অংশ",
    status: "Documented",
    body: "২০১৬ সালের একটি স্থাপত্য-গবেষণা গাবুরার WAPDA bund-কে primary road network-এর অংশ হিসেবে বর্ণনা করে এবং boat, bicycle ও three-wheeler ব্যবহারের কথা নথিবদ্ধ করে। গবেষণাটি Aila-পরবর্তী সময়ের অবস্থা নিয়ে; তাই এটিকে বর্তমান road condition-এর সরাসরি মাপ হিসেবে নয়, historical transport record হিসেবে দেখা হবে।"
  },
  {
    number: "05",
    label: "SEASONAL ACCESS",
    title: "বর্ষা ও দুর্যোগে যোগাযোগের অর্থ বদলে যায়",
    status: "Documented",
    body: "UNICEF-supported 2015 profile বলছে, বর্ষাকালে দূরত্ব ও যোগাযোগের সমস্যার কারণে সামাজিক সেবা পাওয়া কঠিন হয়ে পড়ত। ২০১৬ সালের গবেষণাতেও rainy season-এ হাঁটাই অনেক ক্ষেত্রে প্রধান উপায় হয়ে যাওয়ার কথা পাওয়া যায়। অর্থাৎ Gabura-র transport archive-এ dry-season route আর disaster-season access আলাদা layer হিসেবে রাখা দরকার।"
  },
  {
    number: "06",
    label: "DIGITAL ACCESS",
    title: "নেটওয়ার্কও এখন যোগাযোগ অবকাঠামোর অংশ",
    status: "Needs current verification",
    body: "সাম্প্রতিক participatory research-এ গাবুরায় frequent network issues-এর কথা স্থানীয় গবেষকেরা জানিয়েছেন। তাই archive-এ রাস্তা ও নৌপথের পাশাপাশি mobile network coverage, internet availability এবং জরুরি যোগাযোগের reliability-ও নথিবদ্ধ করা হবে।"
  }
];

const accessLayers = [
  "Mainland ↔ Gabura river crossing",
  "Kholpetua River / boat routes",
  "Union-to-village road network",
  "Polder / embankment routes",
  "Bridge and culvert locations",
  "Bazar, school, clinic and UP access",
  "Cyclone-shelter access routes",
  "Seasonal waterlogging / blocked routes",
  "Mobile network coverage",
  "Emergency evacuation routes"
];

const researchQueue = [
  "বর্তমান road inventory: paved / semi-paved / earthen",
  "সব ferry/ghat ও regular boat crossing-এর GPS point",
  "Bridge, culvert ও damaged crossing register",
  "Polder-15 embankment road বনাম public road আলাদা layer",
  "বর্ষা ও শুকনো মৌসুমের travel-time comparison",
  "Cyclone shelter থেকে village-level evacuation route",
  "বর্তমান mobile operator coverage ও dead zones",
  "Emergency ambulance / fire / rescue access time",
  "Historical bridge and road changes after Aila",
  "স্থানীয় boatman ও transport worker oral history"
];

export default function CommunicationPage() {
  return <main>
    <header className="nav">
      <div className="wrap history-nav">
        <Link className="brand" href="/">GABURA ARCHIVE</Link>
        <Link className="navlink" href="/gabura">← SECTION 01</Link>
      </div>
    </header>

    <section className="communication-hero">
      <div className="wrap">
        <div className="eyebrow">Section 01 / GABURA / 11</div>
        <h1>Communication<br/><em>& Access</em></h1>
        <p>একটি উপকূলীয় জনপদে রাস্তা শুধু রাস্তা নয়—নদী, নৌকা, বাঁধ, ঘাট, মৌসুমি জলাবদ্ধতা এবং মানুষের পৌঁছানোর সক্ষমতা মিলেই তৈরি হয় যোগাযোগের বাস্তব মানচিত্র।</p>
        <div className="communication-meta">
          <span>Hard-to-reach history</span>
          <span>Road + Water + Embankment</span>
          <span>Current network needs verification</span>
        </div>
      </div>
    </section>

    <section className="communication-lead">
      <div className="wrap communication-grid">
        <div>
          <div className="eyebrow">The central question</div>
          <h2>গাবুরায় মানুষ কীভাবে পৌঁছায়—আর কোথায় আটকে যায়?</h2>
        </div>
        <div>
          <p>গাবুরার যোগাযোগকে শুধু সড়কের দৈর্ঘ্য দিয়ে বোঝা যাবে না। খোলপেটুয়া নদী, নৌপথ, পোল্ডার ও বাঁধ, গ্রামের কাঁচা রাস্তা, সেতু-কালভার্ট এবং বর্ষা—সবগুলো একই access system-এর অংশ।</p>
          <p className="communication-note">এই archive-এ পুরোনো transport data-কে বর্তমান অবস্থা হিসেবে দেখানো হবে না। প্রতিটি route-এর সঙ্গে year, source ও verification status থাকবে।</p>
        </div>
      </div>
    </section>

    <section className="communication-records">
      <div className="wrap">
        {transportRecords.map((item) => <article className="communication-record" key={item.number}>
          <div className="communication-index">{item.number}<small>{item.label}</small></div>
          <div className="communication-copy">
            <span className={"communication-status " + (item.status === "Documented" ? "documented" : "")}>{item.status}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        </article>)}
      </div>
    </section>

    <section className="communication-model">
      <div className="wrap">
        <div className="eyebrow">Access model</div>
        <h2>Gabura-এর যোগাযোগকে ১০টি layer-এ দেখা হবে</h2>
        <div className="communication-layers">
          {accessLayers.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><b>{item}</b></div>)}
        </div>
      </div>
    </section>

    <section className="communication-research">
      <div className="wrap communication-research-grid">
        <div>
          <div className="eyebrow">Archive research queue</div>
          <h2>যে data যোগ হলে যোগাযোগের মানচিত্র সত্যিই ব্যবহারযোগ্য হবে</h2>
        </div>
        <div className="communication-checklist">
          {researchQueue.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</div>)}
        </div>
      </div>
    </section>

    <section className="communication-source">
      <div className="wrap">
        <div className="eyebrow">Source discipline</div>
        <p><strong>Primary baseline:</strong> Gabura Union-এর সরকারি “এক নজরে গাবুরা” পেজ এবং September 2015 UNICEF-supported Profile of Gabura Union। ওই profile-এ Gabura-কে hard-to-reach বলা হয়েছে এবং village-level distance/transport modes দেওয়া আছে।</p>
        <p><strong>Historical transport context:</strong> 2016 FARU research-এ Gabura-র island condition, boat communication, internal road damage এবং WAPDA bund-এর transport role নথিবদ্ধ হয়েছে। এটিকে historical snapshot হিসেবে রাখা হবে।</p>
        <p><strong>Recent field context:</strong> Asia Foundation-এর participatory research-এ Kholpetua crossing এবং network সমস্যার স্থানীয় অভিজ্ঞতা উঠে এসেছে।</p>
        <p className="communication-disclaimer">এই পেজের পুরোনো route/road figures বর্তমান infrastructure-এর দাবি নয়। বর্তমান access map তৈরি হলে survey date, GPS/source এবং season অবশ্যই record করতে হবে।</p>
      </div>
    </section>
  </main>;
}
