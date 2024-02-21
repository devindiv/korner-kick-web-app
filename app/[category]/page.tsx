import Container from "@/components/ui/container";
import { postList } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

async function getData(category: string) {
  const query = `*[_type == "post" && (category->slug.current == "${category}" || category->parent->slug.current == "${category}")] | order(_createdAt desc) {
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

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: postList[] = await getData(params.category);
  return (
    <Container>
      <div className="px-4 py-3">
        {data.map((post, id) => (
          <div
            key={id}
            className="flex flex-col space-y-2 items-center justify-between"
          >
            <h1 className="text-center font-bold text-xl py-4 md:pt-6 md:pb-4">
              {post.title}
            </h1>
            <div className="mx-auto aspect-auto max-w-screen-lg overflow-hidden lg:rounded-lg">
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.titleImage?.alt || "Thumbnail"}
                height={720}
                width={1280}
                loading="eager"
                sizes="100vw"
                className="object-cover h-64 md:h-[32rem] hover:scale-105 transition duration-300"
              />
            </div>
            <p className="line-clamp-2 md:w-1/2">{post.shortDescription}</p>
            <Link
              href={`/posts/${post.currentSlug}`}
              className="font-bold text-gray-800 cursor-pointer"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
