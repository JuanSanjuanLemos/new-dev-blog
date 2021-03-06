import { Container } from "./style";

import { SmallPost } from "../../components/SmallPost";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

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
  nextPage: string | null;
}

export function WrapperPosts({ posts, nextPage }: PostProps) {
  return (
    <Container className="box">
      <div className="content">
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} passHref>
            <a>
              <SmallPost>
                <div className="wrapper-img">
                  <Image src={`${post.bannerURL}`} layout="fill" alt='post imagem' />
                </div>
                
                <div className="post-content">
                  <h1>{post.title}</h1>
                  <h2>
                    {post.subtitle}
                  </h2>
                  <div>
                    <h3>
                      <span>
                        <AiOutlineCalendar />
                      </span>
                      {post.first_publication_date}
                    </h3>
                    <h3>
                      <span>
                        <BsFillPersonFill />
                      </span>
                      {post.author}
                    </h3>
                  </div>
                </div>
              </SmallPost>
            </a>
          </Link>
        ))}
      </div>
      {nextPage && <div id="ward" />}
    </Container>
  );
}
