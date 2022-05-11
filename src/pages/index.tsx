import { GetStaticProps } from "next";
import * as prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

import getPrismicClient from "../services/prismic";
import { Header } from "../components/Header";

import { WrapperPosts } from "../components/WrapperPosts";
import { useState } from "react";
import { Container } from "../components/HomePage/styles";
import { Carousel } from "../components/Carousel";

type Post = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  updatedAt: string;
  bannerURL: string,
};

type PostRequest = {
  uid: string;
  data: {
    slug: string;
    title: string;
    subtitle: string;
    author: string;
  };
  last_publication_date: string;
};

interface PostProps {
  posts: Post[];
  next_page: null | string;
}

export default function Home({ posts, next_page }: PostProps) {
  const [listPosts, setListPosts] = useState(posts);
  const [nextPage, setNextPage] = useState(next_page);
  async function getMorePosts() {
    const nextPosts = await fetch(`${nextPage}`);

    const nextPostsJSON = await nextPosts.json();
    setNextPage(nextPostsJSON.next_page);
    const morePost = nextPostsJSON.results.map((post: PostRequest) => {
      return {
        slug: post.uid,
        title: RichText.asText(post.data.title),
        subtitle: RichText.asText(post.data.subtitle),
        author: RichText.asText(post.data.author),
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
    setListPosts([...listPosts, ...morePost]);
  }

  return (
    <>
      <Header />
      <Container className=".box">
        <div className="content">
          <Carousel posts={posts} />
          <WrapperPosts posts={listPosts} />
          {nextPage && <h3 className="load-more" onClick={getMorePosts}>Carregar mais Posts</h3>}
        </div>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient();
  const response = await client.get({
    predicates: prismic.predicate.at("document.type", "post"),
    fetch: ["publication.title"],
    pageSize: 10,
  });

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      subtitle: RichText.asText(post.data.subtitle),
      bannerURL: post.data.banner.url,
      author: RichText.asText(post.data.author),
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

  const next_page = response.next_page;
  
  return {
    props: {
      posts,
      next_page,
    },
  };
};
