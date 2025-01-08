import PostList from "@/components/section/PostList";
import { getAllPosts } from "@/lib/api";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-base-200 py-12">
      <div className="container mx-auto flex flex-col items-center">
        <link rel="canonical" href="https://hoyosmash.com/posts" />
        <h1 className="my-8 text-center text-4xl font-bold text-primary">
          All Posts
        </h1>
        <div className="w-full max-w-5xl">
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
}
