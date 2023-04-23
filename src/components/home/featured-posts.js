import PostsGrid from "../posts/posts-grid";
import style from "./featured-posts.module.css";

export default function FeaturePosts({ posts }) {
  return (
    <section className={style.latest}>
      <h2>FeaturePosts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
