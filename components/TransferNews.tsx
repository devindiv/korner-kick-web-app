import { postList } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import Container from "./ui/container";

export async function getData() {
  const query = `*[_type == 'post' && featured != true && category->name == 'transfers' ] | order(_createdAt desc) [0..2] {
    title,
    "currentSlug": slug.current,
    category->{name}, // Selecting the category information
    shortDescription,
    titleImage,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function TransferNews() {
  const posts: postList[] = await getData();
  return (
    <Container>
      <div className="w-full my-4 md:my-10 px-3 py-4">
        <h1 className="font-bold text-xl text-slate-800 my-4">Transfer News</h1>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <li key={i}>
              <Link
                href={`/posts/${post.currentSlug}`}
                className="flex gap-2 mx-auto "
              >
                <Image
                  src={urlFor(post.titleImage).url()}
                  alt="transfers image"
                  width={400}
                  height={400}
                  className="w-36 h-48 object-cover"
                />
                <div className="my-3  hover:text-orange-500/2">
                  <h3 className="font-bold text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 text-sm">
                    {post.shortDescription}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
