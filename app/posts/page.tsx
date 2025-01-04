import { getAllPosts } from "@/lib/api";
import PostList from "@/components/section/PostList";

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <div className="container mx-auto flex max-w-5xl flex-col items-center px-4">
      <link rel="canonical" href="https://hoyosmash.com/posts" />

      <h1 className="my-6 text-center text-4xl font-bold">All Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}
