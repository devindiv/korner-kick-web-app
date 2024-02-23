import { RichTextComponents } from "@/components/RichTextComponent";
import Container from "@/components/ui/container";
import { singlePost } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30;

async function getSinglePost(slug: string) {
  const query = `
        *[_type == 'post' && slug.current == '${slug}'] {
            "currentSlug": slug.current,
            title,
            content,
            titleImage,
        }[0]
    `;

  const data = await client.fetch(query);
  return data;
}

export default async function singlePost({
  params,
}: {
  params: { slug: string };
}) {
  const data: singlePost = await getSinglePost(params.slug);
  return (
    <div className="px-4 w-screen">
      <PortableText value={data.content} components={RichTextComponents} />
    </div>
    /*<Container>
      <div className="px-4 py-3 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-brand-primary mb-3 mt-2 text-center text-xl font-bold dark:text-white lg:text-3xl lg:leading-snug">
          {data.title}
        </h1>

        <div className=" mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
          <Image
            src={urlFor(data.titleImage).url()}
            alt={data.titleImage?.alt || "Thumbnail"}
            height={720}
            width={1280}
            loading="eager"
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <PortableText value={data.content} components={RichTextComponents} />
      </div>
  </Container>*/
  );
}
