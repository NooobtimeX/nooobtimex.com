import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <div className="card bg-base-100 shadow-xl" key={post.slug}>
          <Link href={`/posts/${post.slug}`} className="block">
            <div className="card-body p-0">
              {/* Card Image */}
              <figure>
                <Image
                  src={post.Image}
                  alt={`Cover image for ${post.title}`}
                  className="rounded-2xl object-cover"
                  width={600}
                  height={200}
                />
              </figure>
              {/* Card Title */}
              <div className="card-title mt-4 text-center text-base-content text-lg px-4">
                {post.title}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
