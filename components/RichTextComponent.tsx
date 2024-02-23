import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            src={urlFor(value).url()}
            alt="Post Image"
            className="object-contain"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-5 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-4 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-3 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl py-2 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-gray-500 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = value.href?.startsWith("/")
        ? undefined
        : "noreferrer noopener";
      return value.href ? (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-slate-800 hover:decoration-orange-500"
        >
          {children}
        </Link>
      ) : (
        <span className="underline decoration-slate-800 hover:decoration-orange-500">
          {children}
        </span>
      );
    },
  },
};
