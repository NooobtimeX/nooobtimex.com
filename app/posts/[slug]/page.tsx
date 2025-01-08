import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts(); // Fetch posts asynchronously
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post(props: Params) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug); // Fetch post data asynchronously
  if (!post) return notFound();

  const content = await markdownToHtml(post.content || "");
  const datePublished = format(parseISO(post.datePublished), "LLLL d, yyyy");
  const dateModified = format(parseISO(post.dateModified), "LLLL d, yyyy");

  return (
    <main className="container mx-auto px-4 py-8 bg-base-200">
      <link rel="canonical" href={"https://hoyosmash.com/" + params.slug} />
      <article className="prose lg:prose-xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg">
        {/* Cover Image */}
        <div className="mb-6">
          <img
            src={post.Image}
            alt={`Cover Image for ${post.title}`}
            className="rounded-lg mx-auto w-full object-cover max-h-80"
          />
        </div>
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
          <div className="flex justify-center space-x-4 text-sm text-neutral-content">
            <time dateTime={post.datePublished}>
              Published: {datePublished}
            </time>
            <time dateTime={post.dateModified}>Updated: {dateModified}</time>
          </div>
        </div>
        {/* Content */}
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: content.replace(
              /<a /g,
              '<a class="text-blue-500 hover:underline" '
            ),
          }}
        />
      </article>
    </main>
  );
}
