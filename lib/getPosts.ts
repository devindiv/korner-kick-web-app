import { client } from "./sanity";

export async function getPosts() {
  const query = `*[_type == 'post' && featured != true] | order(_createdAt desc) {
      title,
        "currentSlug": slug.current,
        category,
        excerpt,
        content,
        tags,
        titleImage,
    }
    `;

  const posts = await client.fetch(query);

  return posts;
}

export async function getFeaturedPosts() {
  const query = `*[_type == 'post' && featured == true] | order(_createdAt desc) {
      title,
        "currentSlug": slug.current,
        category,
        content,
        excerpt,
        titleImage,
    }
    `;

  const featuredPosts = await client.fetch(query);

  return featuredPosts;
}
