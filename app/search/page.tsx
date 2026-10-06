"use client";

import { FormEvent, useEffect, useState } from "react";

type Result = {
  _id?: string;
  _collection?: string;
  _kind?: string;
  title?: string;
  titleBn?: string;
  name?: string;
  slug?: string;
  sectionSlug?: string;
  description?: string;
  summary?: string;
  contentStatus?: string;
};

const sections = [
  ["", "সব সেকশন"],
  ["gabura", "GABURA"],
  ["people", "PEOPLE"],
  ["climate-and-gabura", "CLIMATE & GABURA"],
  ["documents-and-accountability", "DOCUMENTS & ACCOUNTABILITY"],
  ["stories-and-gabura-today", "STORIES & GABURA TODAY"],
];

const types = [
  ["", "সব ধরনের রেকর্ড"],
  ["archive_layers", "Archive layers"],
  ["places", "Places"],
  ["people", "People"],
  ["events", "Events"],
  ["documents", "Documents"],
  ["sources", "Sources"],
  ["claims", "Claims"],
  ["projects", "Projects"],
  ["interviews", "Interviews"],
  ["media", "Media"],
  ["stories", "Stories"],
];

function resultHref(item: Result) {
  if (item._collection === "archive_layers" && item.sectionSlug && item.slug) {
    const base =
      item.sectionSlug === "gabura" ? "/gabura" :
      item.sectionSlug === "people" ? "/people" :
      item.sectionSlug === "climate-and-gabura" ? "/climate" :
      item.sectionSlug === "documents-and-accountability" ? "/documents" :
      item.sectionSlug === "stories-and-gabura-today" ? "/stories" : "";
    return base ? base + "/" + item.slug : "#";
  }
  return "#";
}

export default function SearchPage() {
  const [q, setQ] = useState("");
  const [section, setSection] = useState("");
  const [type, setType] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function runSearch(event?: FormEvent) {
    event?.preventDefault();
    setLoading(true);
    const params = new URLSearchParams({ q, section, type, limit: "50" });
    const response = await fetch("/api/search?" + params.toString());
    const json = await response.json();
    setResults(json.data ?? []);
    setSearched(true);
    setLoading(false);
  }

  useEffect(() => {
    runSearch();
  }, []);

  return (
    <main className="search-page">
      <header className="search-hero">
        <div className="wrap">
          <a className="search-back" href="/">← GABURA ARCHIVE</a>
          <p className="eyebrow">SEARCH / FIND EVIDENCE</p>
          <h1>Find<br /><em>Gabura.</em></h1>
          <p className="search-intro">
            বাংলা বা English-এ খুঁজুন। মানুষ, জায়গা, ঘটনা, নথি এবং archive layer—
            সবকিছু এক জায়গা থেকে খুঁজে পাওয়ার জন্য এই search system তৈরি হচ্ছে।
          </p>

          <form className="search-form" onSubmit={runSearch}>
            <input
              value={q}
              onChange={(event) => setQ(event.target.value)}
              placeholder="যেমন: গাবুরা, Polder 15, Chandnimukha..."
              aria-label="Search the Gabura archive"
              autoComplete="off"
            />
            <button type="submit">{loading ? "Searching…" : "Search"}</button>
          </form>

          <div className="search-filters">
            <label>
              <span>Section</span>
              <select value={section} onChange={(event) => setSection(event.target.value)}>
                {sections.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </label>
            <label>
              <span>Type</span>
              <select value={type} onChange={(event) => setType(event.target.value)}>
                {types.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </label>
          </div>
        </div>
      </header>

      <section className="search-results">
        <div className="wrap">
          <div className="search-results-head">
            <div>
              <p className="eyebrow">{searched ? "RESULTS" : "ARCHIVE"}</p>
              <h2>{searched ? `${results.length} result${results.length === 1 ? "" : "s"}` : "Search the archive"}</h2>
            </div>
            <p>Evidence first. Sources and dates stay visible.</p>
          </div>

          {loading && <div className="search-empty">Searching the archive…</div>}

          {!loading && searched && results.length === 0 && (
            <div className="search-empty">
              <strong>কোনো ফল পাওয়া যায়নি।</strong>
              <span>বানান একটু বদলে, অন্য section বা type দিয়ে আবার চেষ্টা করুন।</span>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="search-list">
              {results.map((item, index) => {
                const href = resultHref(item);
                const title = item.title ?? item.titleBn ?? item.name ?? item.slug ?? "Untitled record";
                const subtitle = item.titleBn && item.title !== item.titleBn ? item.titleBn : item.description ?? item.summary;
                return (
                  <article className="search-result" key={String(item._id ?? index)}>
                    <div className="search-result-index">{String(index + 1).padStart(2, "0")}</div>
                    <div className="search-result-body">
                      <div className="search-result-meta">
                        <span>{item.sectionSlug ?? item._collection}</span>
                        {item.contentStatus && <span>{item.contentStatus}</span>}
                      </div>
                      <h3>{title}</h3>
                      {subtitle && <p>{subtitle}</p>}
                    </div>
                    {href !== "#" ? <a href={href} aria-label={`Open ${title}`}>Open ↗</a> : <span className="search-result-state">Record</span>}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
