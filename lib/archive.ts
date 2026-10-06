export const ARCHIVE_COLLECTIONS = [
  "sections","places","people","events","documents","sources","claims",
  "projects","interviews","media","stories","users","audit_logs"
] as const;

export type ArchiveCollection = typeof ARCHIVE_COLLECTIONS[number];

export function isArchiveCollection(value: string): value is ArchiveCollection {
  return (ARCHIVE_COLLECTIONS as readonly string[]).includes(value);
}

export const PUBLIC_COLLECTIONS = [
  "sections","places","people","events","documents","sources","claims",
  "projects","interviews","media","stories"
] as const;
