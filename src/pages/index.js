import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/home/hero";
import FeaturePosts from "@/components/home/featured-posts";
import { useEffect } from "react";
import { getFeaturedPosts } from "../../helpers/posts-util";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturePosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
