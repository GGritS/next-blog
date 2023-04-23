import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "../../../helpers/posts-util";
import Head from "next/head";

export default function AllPostPage({ posts }) {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="All posts"/>
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
