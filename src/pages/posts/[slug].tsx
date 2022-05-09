import { GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import { Header } from "../../components/Header";
import getPrismicClient from "../../services/prismic";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: {
      heading: {
        text: string;
      }[];
      body: {
        text: string;
      }[];
    }[];
    updatedAt: string;
  };
}

export default function Post({ post }: PostPreviewProps) {
  return (
    <>
      <Header />
      <main>
        <article>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div>
            {post.content.map((item) => (
              <section key={item.heading[0].text}>
                <h2>{item.heading[0].text}</h2>
                <article
                  dangerouslySetInnerHTML={{
                    __html: RichText.asHtml(item.body),
                  }}
                />
              </section>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [] as unknown,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID("post", String(slug));

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: response.data.content,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    ),
  };
  return {
    props: { post },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
