import Link from "next/link";
import { notFound } from "next/navigation";

type HistorySection = {
  number: string;
  period: string;
  heading: string;
  paragraphs: string[];
  status: "Documented" | "Research needed";
};

const historySections: HistorySection[] = [
  {number:"01",period:"EARLY SETTLEMENT",heading:"ভূমি থেকে বসতি",status:"Documented",paragraphs:[
    "২০১৫ সালের UNICEF-সমর্থিত Profile of Gabura Union-এ স্থানীয় ইতিহাসের একটি বর্ণনা অনুযায়ী, গাবুরা একসময় সুন্দরবন-সংলগ্ন বনভূমির সঙ্গে যুক্ত ছিল এবং পলি জমে ভূমি গঠনের পর ধীরে ধীরে বসতি তৈরি হয়।",
    "প্রাথমিক মানুষের জীবিকার সঙ্গে গোলপাতা, জ্বালানি কাঠ, মধু ও মাছ সংগ্রহের সম্পর্কের কথাও ওই প্রোফাইলে পাওয়া যায়। তবে প্রথম বসতির নির্দিষ্ট সাল বা প্রথম বসতিস্থাপনকারী পরিবার সম্পর্কে এই উৎস এককভাবে চূড়ান্ত প্রমাণ নয়।"
  ]},
  {number:"02",period:"BRITISH ERA",heading:"ব্রিটিশ আমল: বৃহত্তর অঞ্চলের ভিত",status:"Documented",paragraphs:[
    "গাবুরার ইতিহাসকে সাতক্ষীরা-খুলনা অঞ্চলের বৃহত্তর প্রশাসনিক ইতিহাসের সঙ্গে মিলিয়ে পড়তে হয়। জেলা-ইতিহাসে সাতক্ষীরার প্রশাসনিক বিকাশের গুরুত্বপূর্ণ ধাপগুলো পাওয়া যায়।",
    "তবে জেলা-পর্যায়ের কোনো ঘটনা সরাসরি গাবুরা ইউনিয়নের ঘটনা হিসেবে ব্যবহার করা হবে না। গাবুরার নিজস্ব প্রশাসনিক অবস্থান নির্ধারণে পুরোনো গেজেট, মৌজা ম্যাপ, settlement record ও প্রশাসনিক নথি প্রয়োজন।"
  ]},
  {number:"03",period:"1947",heading:"দেশভাগের পর",status:"Research needed",paragraphs:[
    "১৯৪৭ সালের দেশভাগ দক্ষিণ-পশ্চিম বাংলার সীমান্ত, প্রশাসন, যোগাযোগ ও মানুষের চলাচলে বড় পরিবর্তন আনে। গাবুরায় এর নির্দিষ্ট প্রভাব বোঝার জন্য পরিবারভিত্তিক oral history-এর সঙ্গে জমির রেকর্ড, পুরোনো map এবং প্রশাসনিক দলিল মিলিয়ে দেখা প্রয়োজন।",
    "এই পেজে তাই কোনো অনুমানকে স্থানীয় ঘটনা হিসেবে লেখা হয়নি। প্রমাণ পাওয়া গেলে আলাদা event record তৈরি হবে।"
  ]},
  {number:"04",period:"1971",heading:"মুক্তিযুদ্ধ ও স্বাধীনতা",status:"Research needed",paragraphs:[
    "গাবুরার মুক্তিযুদ্ধের ইতিহাস এই আর্কাইভের একটি গুরুত্বপূর্ণ গবেষণা অধ্যায়। মুক্তিযোদ্ধা, প্রত্যক্ষদর্শী, শহীদ বা নিহত ব্যক্তির পরিবার, স্থানীয় দলিল এবং সরকারি তালিকা—সব ধরনের উৎস একসঙ্গে সংগ্রহ করা হবে।",
    "স্মৃতিচারণ ও সরকারি নথিতে পার্থক্য থাকলে উভয় বক্তব্য আলাদা করে দেখানো হবে; একটিকে অন্যটির জায়গায় বসানো হবে না।"
  ]},
  {number:"05",period:"2007–2009",heading:"সিডর ও আইলা: উপকূলের কঠিন পরীক্ষা",status:"Documented",paragraphs:[
    "সিডর (২০০৭) ও আইলা (২০০৯) গাবুরার আধুনিক সামাজিক-পরিবেশগত ইতিহাসের গুরুত্বপূর্ণ turning points। ২০১৫ সালের Gabura profile-এ এই দুই দুর্যোগের পর পানি, জীবিকা ও বসতির ওপর বড় চাপের কথা নথিবদ্ধ হয়েছে।",
    "আইলার পরে দীর্ঘস্থায়ী লবণাক্ততা, বাঁধের ক্ষতি ও জীবিকার সংকট কীভাবে মানুষের জীবন বদলেছে—এই পরিবর্তনকে শুধু দুর্যোগের দিনের ঘটনা নয়, বরং বহু বছরের recovery story হিসেবে সংরক্ষণ করা হবে।"
  ]},
  {number:"06",period:"2020",heading:"আম্পান",status:"Documented",paragraphs:[
    "২০২০ সালের আম্পান গাবুরার সাম্প্রতিক দুর্যোগ-ইতিহাসের একটি গুরুত্বপূর্ণ অধ্যায়। স্থানীয় ক্ষয়ক্ষতি, জলাবদ্ধতা, বাঁধ রক্ষা, আশ্রয় এবং মানুষের স্বতঃস্ফূর্ত প্রতিরোধের ঘটনাগুলো পৃথক source record-এ সংরক্ষণ করা হবে।"
  ]},
  {number:"07",period:"2024",heading:"রিমাল",status:"Documented",paragraphs:[
    "২০২৪ সালের রিমালও গাবুরার উপকূলীয় ঝুঁকি বোঝার জন্য গুরুত্বপূর্ণ। ক্ষয়ক্ষতি, আশ্রয়, পানিবন্দিত্ব, বাঁধের অবস্থা ও মানুষের অভিজ্ঞতার প্রতিটি দাবিকে তারিখ ও উৎসসহ আলাদা করা হবে।"
  ]},
  {number:"08",period:"PRESENT",heading:"বর্তমান গাবুরা: ইতিহাস এখনও তৈরি হচ্ছে",status:"Documented",paragraphs:[
    "আজকের গাবুরার ইতিহাসের কেন্দ্রে রয়েছে পানি, লবণাক্ততা, উপকূলীয় বাঁধ, কৃষি ও চিংড়ি অর্থনীতি, সুন্দরবননির্ভর জীবিকা, যোগাযোগ এবং জলবায়ু ঝুঁকি।",
    "অর্থাৎ History section কোনো ‘শেষ হয়ে যাওয়া’ অধ্যায় নয়। বর্তমানের verified records-ও ভবিষ্যতের historical archive-এর অংশ।"
  ]}
];



type OriginEvidence = {
  label: string;
  title: string;
  body: string;
};

const originEvidence: OriginEvidence[] = [
  {
    label: "01 / LOCAL TRADITION",
    title: "‘গাব’ গাছের স্মৃতি",
    body: "স্থানীয়ভাবে প্রচলিত একটি ব্যাখ্যায় বলা হয়, এই এলাকায় একসময় প্রচুর গাব গাছ ছিল। বনজীবী বাওয়ালি ও মৌয়ালরা জায়গাটিকে গাব-ঘেরা চর হিসেবে চিনতেন—সেখান থেকেই ‘গাবের চর’, ‘গাবুর চর’ এবং পরে ‘গাবুরা’ নামটি প্রচলিত হয়েছে বলে স্থানীয় বয়োজ্যেষ্ঠদের বর্ণনায় পাওয়া যায়।"
  },
  {
    label: "02 / WHAT IS VERIFIED",
    title: "নামের ব্যুৎপত্তি এখনো চূড়ান্ত নয়",
    body: "বর্তমান সরকারি ইউনিয়ন প্রোফাইল ও সহজলভ্য গবেষণা-উৎসে ‘Gabura’ নামটি ঠিক কোন ঘটনা, ব্যক্তি বা শব্দ থেকে স্থায়ীভাবে এসেছে—তার নির্ভরযোগ্য primary record পাওয়া যায়নি। তাই গাব-গাছের ব্যাখ্যাকে এই আর্কাইভে প্রতিষ্ঠিত ঐতিহাসিক সত্য হিসেবে লেখা হচ্ছে না।"
  },
  {
    label: "03 / HISTORICAL CONTEXT",
    title: "নামের আগে ছিল ভূদৃশ্য",
    body: "২০১৫ সালের UNICEF-সমর্থিত Profile of Gabura Union-এর ইতিহাস অংশে গাবুরার ভূমি গঠন, সুন্দরবন-সংলগ্ন পরিবেশ এবং ব্রিটিশ আমলে বনজ সম্পদ সংগ্রহ করতে আসা মানুষের বসতি গড়ে ওঠার কথা বলা হয়েছে। এই পরিবেশগত ইতিহাস নামের স্থানীয় স্মৃতিকে বোঝার গুরুত্বপূর্ণ context, কিন্তু নামটির সরাসরি প্রমাণ নয়।"
  },
  {
    label: "04 / WRITTEN RECORD",
    title: "‘Gabura’ নামটি নথিতে প্রতিষ্ঠিত",
    body: "সরকারি গেজেটের ২০১৫ সালের একটি তালিকায় গাবুরা ইউনিয়নের পূর্ণ মৌজাগুলোর একটি হিসেবে ‘গাবুরা (Gabura)’ নামটি স্পষ্টভাবে নথিবদ্ধ আছে। এটি প্রমাণ করে যে নামটি প্রশাসনিক/ভূমি-পরিচয়ের লিখিত ব্যবহারে ছিল; তবে ওই নথি নামটির প্রথম ব্যবহার বা ব্যুৎপত্তি ব্যাখ্যা করে না।"
  },
  {
    label: "05 / LOCAL MEMORY",
    title: "দুইশ বছরের বসতির দাবি",
    body: "গাবুরা গোপাল লক্ষ্মী মেমোরিয়াল মাধ্যমিক বিদ্যালয়ের প্রতিষ্ঠার ইতিহাসে বলা হয়েছে, পূর্বপুরুষদের শ্রম ও অর্থের মাধ্যমে প্রায় দুইশ বছরেরও আগে গাবুরা আবাদ হয়েছিল। এটি একটি স্থানীয় প্রাতিষ্ঠানিক historical narrative—নামের উৎপত্তির প্রমাণ নয়। তাই archive-এ settlement history ও name-origin evidence আলাদা রাখা হবে।"
  },
  {
    label: "06 / RESEARCH NEEDED",
    title: "নামটি যাচাই করার পরবর্তী পথ",
    body: "পুরোনো Revenue Survey / Cadastral map, mouza map, British-era gazetteer, settlement record, খাজনা বা জমির দলিল, পুরোনো ডাক/প্রশাসনিক নথি এবং প্রবীণদের oral history পাশাপাশি পরীক্ষা করতে হবে। বিশেষ লক্ষ্য হবে—বর্তমান ‘Gabura’ বানানের আগের কোনো spelling বা একই নামের পুরোনো স্থান-চিহ্ন পাওয়া যায় কি না।"
  }
];

function OriginOfNamePage() {
  return <main>
    <header className="nav"><div className="wrap history-nav">
      <Link className="brand" href="/">GABURA ARCHIVE</Link>
      <Link className="navlink" href="/gabura">← SECTION 01</Link>
    </div></header>

    <section className="origin-hero">
      <div className="wrap">
        <div className="eyebrow">Section 01 / GABURA / 03</div>
        <h1>Origin<br/><em>of Name</em></h1>
        <p>একটি নামের ভেতরেও ভূদৃশ্য, বন, মানুষের স্মৃতি এবং সময়ের স্তর জমে থাকে।</p>
        <div className="origin-meta"><span>Local tradition</span><span>Written record found</span><span>Origin still unconfirmed</span></div>
      </div>
    </section>

    <section className="origin-lead">
      <div className="wrap origin-lead-grid">
        <div>
          <div className="eyebrow">The question</div>
          <h2>‘গাবুরা’ নামটি কোথা থেকে এল?</h2>
        </div>
        <div>
          <p>এই প্রশ্নের সহজ একটি স্থানীয় উত্তর আছে—গাব গাছের সঙ্গে নামটির সম্পর্ক। কিন্তু একটি archive-এর কাজ শুধু পরিচিত গল্প পুনরাবৃত্তি করা নয়; গল্পটি কোথা থেকে এসেছে, কোন অংশটি স্মৃতি, আর কোন অংশটি দলিলে পাওয়া যায়—সেটিও আলাদা করে দেখানো।</p>
          <p className="origin-note">এই কারণে নিচের ব্যাখ্যাগুলোকে একই confidence level-এ রাখা হয়নি।</p>
        </div>
      </div>
    </section>

    <section className="origin-evidence">
      <div className="wrap">
        {originEvidence.map((item, i) => <article className="origin-item" key={item.label}>
          <div className="origin-number">0{i + 1}</div>
          <div className="origin-copy">
            <div className="eyebrow">{item.label}</div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        </article>)}
      </div>
    </section>

    <section className="origin-language">
      <div className="wrap">
        <div className="eyebrow">Working hypothesis / Not established fact</div>
        <div className="origin-language-grid">
          <div><span>গাব</span><small>স্থানীয় গাছের নাম</small></div>
          <div className="arrow">→</div>
          <div><span>গাবের চর / গাবুর চর</span><small>স্থানীয় স্থান-নাম হিসেবে প্রচলনের সম্ভাব্য ধাপ</small></div>
          <div className="arrow">→</div>
          <div><span>গাবুরা</span><small>বর্তমান নাম</small></div>
        </div>
        <p className="origin-disclaimer">এটি একটি গবেষণামূলক hypothesis—প্রমাণিত etymology নয়। পুরোনো মানচিত্র বা দলিল পাওয়া গেলে এই sequence পরিবর্তিত হতে পারে।</p>
      </div>
    </section>

    <section className="origin-research">
      <div className="wrap origin-research-box">
        <div>
          <div className="eyebrow">Archive research queue</div>
          <h2>যে প্রমাণগুলো পাওয়া গেলে নামের ইতিহাস শক্ত হবে</h2>
        </div>
        <div className="origin-checklist">
          {["British-era gazetteer / district account","Revenue Survey & cadastral maps","Mouza map and old settlement records","Early land deeds / khatian references","Old postal and administrative records","Elder oral histories with names + dates","Old photographs, school registers, family papers","First known written spelling of ‘Gabura’"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</div>)}
        </div>
      </div>
    </section>

    <section className="origin-confidence"><div className="wrap origin-confidence-grid"><div><div className="eyebrow">Evidence ladder</div><h2>আমরা কী জানি—আর কী জানি না?</h2></div><div className="confidence-list"><div><b>HIGHER CONFIDENCE</b><span>‘Gabura’ নামটি প্রশাসনিক/ভূমি-নথিতে ব্যবহৃত হয়েছে।</span></div><div><b>MEDIUM</b><span>স্থানীয় settlement history ও পুরোনো বসতির স্মৃতি পাওয়া যায়।</span></div><div><b>UNCONFIRMED</b><span>‘গাব’ গাছ থেকে নামটির উৎপত্তি—এখনো primary evidence নেই।</span></div></div></div></section>

    <section className="origin-source">
      <div className="wrap">
        <div className="eyebrow">Source note</div>
        <p>এই পেজে তিন ধরনের evidence আলাদা রাখা হয়েছে: Gabura Union-এর সরকারি profile-এ থাকা historical background, ২০১৫ সালের সরকারি গেজেটে ‘Gabura’ মৌজার লিখিত উপস্থিতি, এবং Gabura G. L. M. Secondary School-এর স্থানীয় settlement narrative। ‘গাব গাছ’ থেকে নাম এসেছে—এই ব্যাখ্যাটি এখনো local tradition; স্বাধীন primary evidence ছাড়া এটিকে প্রতিষ্ঠিত etymology বলা হচ্ছে না।</p>
      </div>
    </section>
  </main>;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "origin-of-name") return <OriginOfNamePage />;

  return <HistoryPage />;
}

function HistoryPage() {
  return <main>
    <header className="nav"><div className="wrap history-nav">
      <Link className="brand" href="/">GABURA ARCHIVE</Link>
      <Link className="navlink" href="/gabura">← SECTION 01</Link>
    </div></header>

    <section className="history-hero">
      <div className="wrap">
        <div className="eyebrow">Section 01 / GABURA / 02</div>
        <h1>History</h1>
        <p>ভূমি, বন, মানুষ, নদী ও দুর্যোগ—এই পাঁচটি স্রোতের মধ্য দিয়ে গাবুরার ইতিহাসকে পড়া।</p>
        <div className="history-meta"><span>Evidence-first history</span><span>Documented + Research needed</span></div>
      </div>
    </section>

    <section className="history-intro">
      <div className="wrap history-intro-grid">
        <div><div className="eyebrow">How to read this page</div><h2>ইতিহাসের সঙ্গে উৎসও দেখা যাবে।</h2></div>
        <p>এই আর্কাইভে স্থানীয় স্মৃতি, প্রকাশিত প্রোফাইল, সরকারি নথি ও সংবাদ—সব একসঙ্গে ব্যবহার করা যেতে পারে। কিন্তু উৎসের ধরন আলাদা। তাই প্রতিটি অধ্যায়ে status রাখা হয়েছে। <strong>Documented</strong> মানে উৎস পাওয়া গেছে; <strong>Research needed</strong> মানে স্থানীয়ভাবে গুরুত্বপূর্ণ হলেও আরও primary evidence প্রয়োজন।</p>
      </div>
    </section>

    <section className="history-timeline">
      <div className="wrap">
        {historySections.map((item) => <article className="history-item" key={item.number}>
          <div className="history-index"><span>{item.number}</span><small>{item.period}</small></div>
          <div className="history-copy">
            <div className="history-status">{item.status}</div>
            <h2>{item.heading}</h2>
            {item.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </article>)}
      </div>
    </section>

    <section className="history-research">
      <div className="wrap research-box">
        <div className="eyebrow">Research Roadmap</div>
        <h2>যে নথিগুলো ইতিহাসকে আরও শক্ত করবে</h2>
        <div className="research-grid">
          {["British-era maps & gazetteers","Mouza / cadastral maps","Khatian & settlement records","Union formation records","School registers & old photographs","Liberation War records","Cyclone damage & relief records","Oral histories from elders"].map((x,i)=><div className="research-card" key={x}><span>0{i+1}</span>{x}</div>)}
        </div>
      </div>
    </section>

    <section className="history-source">
      <div className="wrap">
        <div className="eyebrow">Source discipline</div>
        <p>প্রাথমিক ভিত্তি: ২০১৫ সালের UNICEF-সমর্থিত Profile of Gabura Union এবং সরকারি/প্রকাশিত দুর্যোগ-সংক্রান্ত তথ্য। প্রতিটি নতুন historical claim ভবিষ্যতে Source → Date → Location → Evidence → Confidence status কাঠামোয় যুক্ত হবে।</p>
      </div>
    </section>
  </main>;
}