import { postList } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Link from "next/link";

export async function getPosts() {
  const query = `*[_type == 'post' && featured != true] | order(_createdAt desc) [0...4] {
      title,
        "currentSlug": slug.current,
        category,
        shortDescription,
        content,
        tags,
        titleImage,
    }
    `;

  const posts = await client.fetch(query);

  return posts;
}

export default async function LatestNews() {
  const posts: postList[] = await getPosts();
  return (
    <div className="bg-slate-900 p-4 md:p-8">
      <h1 className="text-orange-500 text-2xl font-extrabold tracking-wide uppercase">
        Latest
      </h1>
      <div className="py-4">
        <ul className="flex flex-col justify-between">
          {posts.map((post, i) => (
            <li key={i} className="text-gray-200 flex flex-col">
              <Link
                href={`/posts/${post.currentSlug}`}
                className="hover:text-orange-500"
              >
                <h2 className="text-lg lg:text-xl line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm line-clamp-2 md:my-2">
                  {post.shortDescription}
                </p>
                {i < 3 && (
                  <div className="bg-gray-200 w-full h-[1px] my-2"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
