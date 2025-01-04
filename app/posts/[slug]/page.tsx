import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { parseISO, format } from "date-fns";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts(); // Make it async
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post(props: Params) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug); // Ensure this is also async
  if (!post) return notFound();

  const content = await markdownToHtml(post.content || "");
  const datePublished = format(parseISO(post.datePublished), "LLLL d, yyyy");
  const dateModified = format(parseISO(post.dateModified), "LLLL d, yyyy");

  return (
    <main className="container mx-auto mb-4 px-3">
      <link rel="canonical" href={"https://hoyosmash.com/" + params.slug} />
      <article>
        <div className="m-auto my-2 max-w-3xl">
          <img
            src={post.Image}
            alt={`Cover Image for ${post.title}`}
            className="m-auto max-h-80 rounded-xl"
          />
        </div>
        <div className="m-auto max-w-4xl">
          <h1>{post.title}</h1>
          <div className="flex justify-end space-x-2">
            <time
              dateTime={post.datePublished}
              className="mb-6 text-sm text-neutral-200"
            >
              {datePublished}
            </time>
            <time
              dateTime={post.datePublished}
              className="mb-6 text-sm text-neutral-200"
            >
              {dateModified}
            </time>
          </div>
          <div
            className="mx-auto whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: content.replace(
                /<a /g,
                '<a class="text-blue-500 hover:underline" ',
              ),
            }}
          />
        </div>
      </article>
    </main>
  );
}
