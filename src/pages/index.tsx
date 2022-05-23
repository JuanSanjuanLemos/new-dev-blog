import { GetStaticProps } from "next";
import * as prismic from "@prismicio/client";

import getPrismicClient from "../services/prismic";

import { WrapperPosts } from "../components/WrapperPosts";
import { useEffect, useState } from "react";
import { BoxBanner, Container } from "../components/HomePage/styles";
import { useGetPosts } from "../hooks/useGetPosts";
import Head from "next/head";
import Image from "next/image";

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
  getPosts: (response: ResponseRequest) => any
}

interface ResponseRequest {
  next_page: string | null;
  results: Post[];
}



interface PostPagination {
  next_page: string|null;
  results: Post[];
}
export default function Home({ posts, next_page, getPosts }: PostProps) {
  const [listPosts, setListPosts] = useState(posts);
  const [nextPage, setNextPage] = useState(next_page);
  async function GetMorePosts() {
    const nextPosts = await fetch(`${nextPage}`);

    const nextPostsJSON = await nextPosts.json();
    setNextPage(nextPostsJSON.next_page);
    const morePost = useGetPosts(nextPostsJSON);
    setListPosts([...listPosts, ...morePost]);
  }
  useEffect(()=>{
    if(document.querySelector('#ward')){
      const intersectionObserver = new IntersectionObserver((entries)=>{
  
        if(entries.some(entry => entry.isIntersecting)){
          GetMorePosts();
        }
  
      })

      intersectionObserver.observe(document.querySelector('#ward')!);

      return () => intersectionObserver.disconnect();
    }
  },[nextPage])
  return (
    <>
    <Head>
      <title>DewDevBlog</title>
    </Head><BoxBanner>
        <div className="text">
          <h1>New Dev Blog</h1>
          <p>
            Um blog focando em conteúdos para devs iniciante. Meu o objetivo é
            que a cada post que o júnior ou sand ler, deixe ele um passo mais próximo de alcançar seus objetivos🤓.
          </p>
        </div>
        <Image priority src="/images/banner.jpg" alt="banner" layout="fill" />
      </BoxBanner>
      <Container className="box">
      
        <div className="content">
          <WrapperPosts posts={listPosts} nextPage={nextPage&& nextPage}/>

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
    pageSize: 6,
  });

  function getPosts(response:PostPagination):PostsFormatted[] {
    const postsFormatted = response.results.map(post => {
      return {
        slug: post.uid,
        first_publication_date: new Date(post.first_publication_date).toLocaleDateString(
          "pt-BR",
          {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }
        ),
          title: post.data.title[0].text,
          subtitle: post.data.subtitle[0].text,
          author: post.data.author[0].text,
          bannerURL: post.data.banner.url
        }
    });
    return postsFormatted;
  }

  const posts = getPosts(response as unknown as PostPagination);

  const next_page = response.next_page;

  return {
    props: {
      posts,
      next_page,
    },
    revalidate: 60 * 60 // 1 hour
  };
};
