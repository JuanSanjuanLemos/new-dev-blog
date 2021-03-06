import { GetStaticProps } from "next";
import Image from "next/image";
import { RichText } from "prismic-dom";
import getPrismicClient from "../../services/prismic";

import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill, BsTypeH1 } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";

import { BoxBanner, BoxImage, Container } from "../../components/Post/styles";
import { NavPost } from "../../components/NavPost";
import { useUtterances } from "../../hooks/useUterrances";
import Head from "next/head";

interface PostProps {
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
      image: {
        url: string;
      };
    }[];
    bannerUrl: {
      url: string;
    };
    updatedAt: string;
    author: string;
  };
  nextPost: {
    uid: string;
    data: {
      title: {
        text: string;
      }[];
    };
  };
  prevPost: {
    uid: string;
    data: {
      title: {
        text: string;
      }[];
    };
  };
  timeReading: number;
}

interface Item {
  body: {
    text: string;
  }[];
  heading: {
    text: string;
  }[];
}

export default function Post({
  post,
  timeReading,
  prevPost,
  nextPost,
}: PostProps) {
  const commentNodeId = "comments";
  useUtterances(commentNodeId);
  return (
    <>
      <Head>
        <title>ND | {post.title}</title>
      </Head>
      <div className="wrapper-page">
        <BoxBanner>
          <Image
            priority
            src={`${post.bannerUrl}`}
            alt="banner post"
            layout="fill"
          />
        </BoxBanner>

        <Container className="box">
          <article className="content">
            <h1>{post.title}</h1>
            <h3 className="about-post">
              <span>
                <AiOutlineCalendar />
              </span>
              {post.updatedAt}
            </h3>
            <h3 className="about-post">
              <span>
                <BsFillPersonFill />
              </span>
              {post.author}
            </h3>
            <h3 className="about-post">
              <span>
                <MdOutlineWatchLater />
              </span>
              {timeReading} minutos
            </h3>
            <div className="content-post">
              {post.content.map((item) => (
                <div key={item.heading[0].text}>
                  <h2>{item.heading[0].text}</h2>
                  <article
                    dangerouslySetInnerHTML={{
                      __html: RichText.asHtml(item.body),
                    }}
                  />

                  {item.image.url && (
                    <BoxImage>
                      <img src={item.image.url} alt="" />
                    </BoxImage>
                  )}
                </div>
              ))}
            </div>
          </article>
          <div className="wrapper-nav-posts">
            {prevPost && (
              <NavPost
                title={prevPost.data.title[0].text}
                link={prevPost.uid}
                typePost="Post anterior"
              />
            )}
            {nextPost && (
              <NavPost
                title={nextPost.data.title[0].text}
                link={nextPost.uid}
                typePost="Pr??ximo post"
                variant="next"
              />
            )}
          </div>
        </Container>
        <div id={commentNodeId} />
      </div>
    </>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  let lengthText = 0;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID("post", String(slug));

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: response.data.content,
    bannerUrl: response.data.banner.url,
    author: RichText.asText(response.data.author),
    updatedAt: new Date(response.first_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    ),
  };

  const nextPost = (
    await prismic.get({
      fetch: ["post.title"],
      pageSize: 1,
      orderings: ["document.first_publication_date desc"],
      after: response.id,
    })
  ).results[0];

  const prevPost = (
    await prismic.get({
      fetch: ["post.title"],
      pageSize: 1,
      orderings: ["document.first_publication_date"],
      after: response.id,
    })
  ).results[0];

  post.content.map((item: Item) => {
    item.body.map((p) => {
      if (p.text) {
        lengthText += p.text.split(" ").length;
      }
    });
    item.heading.map((p) => {
      lengthText += p.text.split(" ").length;
    });
  });

  const timeReading = (lengthText / 200).toFixed(0);

  return {
    props: {
      post,
      timeReading,
      prevPost: prevPost || null,
      nextPost: nextPost || null,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
