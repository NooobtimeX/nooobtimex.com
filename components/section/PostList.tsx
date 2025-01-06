import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  Image: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {posts.map((post) => (
        <div
          className="rounded-2xl bg-neutral-800 p-2 shadow-lg"
          key={post.slug}
        >
          <Link
            href={`/posts/${post.slug}`}
            className="block transition-shadow"
          >
            <div className="flex flex-col">
              <img
                src={post.Image}
                alt={`Cover image for ${post.title}`}
                className="h-auto w-full rounded-2xl object-cover"
                width={600}
                height={200}
              />
              <div className="grid p-2">
                <h2 className="mb-2 text-center text-base sm:text-xl">
                  {post.title}
                </h2>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
