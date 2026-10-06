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

export default function HistoryPage() {
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