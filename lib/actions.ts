import { client } from "./sanity";

export async function getCategories() {
  const query = `*[_type == "category" && defined(parent) != true] | order(_createdAt asc) {
    title,
      "slug": slug.current,
  }`;

  const data = await client.fetch(query);

  return data;
}
export async function getClubs() {
  const query = `*[_type == "category" && defined(parent) == true] | order(_createdAt asc) {
    title,
    "slug": slug.current
  }`;

  const club = await client.fetch(query);

  return club;
}
