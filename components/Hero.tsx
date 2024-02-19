import { postList } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import LatestNews from "./LatestNews";
import Container from "./ui/container";
import Image from "next/image";
import Link from "next/link";

export async function getData() {
  const query = `*[_type == 'post' && featured == true] | order(_createdAt desc) {
        title,
          "currentSlug": slug.current,
          category,
          content,
          shortDescription,
          titleImage,
      }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data: postList[] = await getData();
  const featuredPost = data[0];
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 px-3 py-4 gap-3">
        <div className="col-span-2 space-y-4">
          <Image
            src={urlFor(featuredPost.titleImage).url()}
            alt="featured Post"
            height={720}
            width={1280}
          />
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              {featuredPost.title}
            </h1>
            <div>
              <p className="leading-6 line-clamp-3 text-gray-500">
                {featuredPost.shortDescription}
              </p>
              <Link
                href={`/posts/${featuredPost.currentSlug}`}
                className="font-bold text-gray-800"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <LatestNews />
      </div>
    </Container>
  );
}
