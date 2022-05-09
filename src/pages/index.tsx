import { GetStaticProps } from "next";
import * as prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

import getPrismicClient from "../services/prismic";
import { Header } from "../components/Header";
import { SmallPost } from "../components/SmallPost";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { WrapperPosts } from "../components/WrapperPosts";

interface Content {
  type: string;
  text: unknown;
}

type Post = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  excerpt: string;
  updatedAt: string;
};

interface PostProps {
  posts: Post[];
}

export default function Home({ posts }: PostProps) {
  return (
    <>
      <Header />
      <WrapperPosts posts={posts}/>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient();
  const response = await client.get({
    predicates: prismic.predicate.at("document.type", "post"),
    fetch: ["publication.title", "publication.content"],
    pageSize: 10,
  });

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      subtitle: RichText.asText(post.data.subtitle),
      author: RichText.asText(post.data.author),
      excerpt:
        post.data.content.find(
          (content: Content) => content.type === "paragraph"
        )?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
