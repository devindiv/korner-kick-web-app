import LatestNews from "@/components/LatestNews";
import TransferNews from "@/components/TransferNews";
import { getFeaturedPosts, getPosts } from "@/lib/getPosts";
import { postList } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import Container from "@/components/ui/container";
import Hero from "@/components/Hero";

export const revalidate = 30;

export default async function Home() {
  const featured: postList[] = await getFeaturedPosts();
  const featuredPost = featured[0];
  return (
    <>
      <Hero />
      <TransferNews />
    </>
  );
}
