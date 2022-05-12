import { GetStaticProps } from "next";
import * as prismic from "@prismicio/client";

import getPrismicClient from "../services/prismic";
import { Header } from "../components/Header";

import { WrapperPosts } from "../components/WrapperPosts";
import { useState } from "react";
import { Container } from "../components/HomePage/styles";
import { Carousel } from "../components/Carousel";
import { useGetPosts } from "../hooks/useGetPosts";
import Head from "next/head";

interface Post {
  uid: string;
  first_publication_date: string;
  data: {
    title: {
      text: string;
    }[];
    subtitle: {
      text: string;
    }[];
    author: {
      text: string;
    }[];
    banner: {
      url: string;
    };
  };
}

interface PostsFormatted {
  slug: string;
  first_publication_date: string;
  title: string;
  subtitle: string;
  author: string;
  bannerURL: string;
}

interface PostProps {
  posts: PostsFormatted[];
  next_page: null | string;
}

interface ResponseRequest {
  next_page: string | null;
  results: Post[];
}

export default function Home({ posts, next_page }: PostProps) {
  const [listPosts, setListPosts] = useState(posts);
  const [nextPage, setNextPage] = useState(next_page);
  async function getMorePosts() {
    const nextPosts = await fetch(`${nextPage}`);

    const nextPostsJSON = await nextPosts.json();
    setNextPage(nextPostsJSON.next_page);

    const morePost = useGetPosts(nextPostsJSON);
    setListPosts([...listPosts, ...morePost]);
  }

  return (
    <>
    <Head>
      <title>DewDevBlog</title>
    </Head>
      <Container className="box">
        <div className="content">
          <Carousel posts={posts} />
          <WrapperPosts posts={listPosts} />
          {nextPage && (
            <h3 className="load-more" onClick={getMorePosts}>
              Carregar mais Posts
            </h3>
          )}
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

  const posts: PostsFormatted[] = useGetPosts(
    response as unknown as ResponseRequest
  );

  const next_page = response.next_page;

  return {
    props: {
      posts,
      next_page,
    },
  };
};
