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

export async function getAllPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc) {
        _id,
        titleImage,
        title,
        shortDescription,
        content,
        "currentSlug": slug.current,
        "categoryName":category->name,
    }`;

  const data = await client.fetch(query);
  return data;
}
