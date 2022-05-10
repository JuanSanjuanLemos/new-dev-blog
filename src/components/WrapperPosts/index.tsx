import { Container } from "./style";


import { SmallPost } from "../../components/SmallPost";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  updatedAt: string;
};

interface PostProps {
  posts: Post[];
}


export function WrapperPosts({ posts }: PostProps){
  return(
    <Container className=".box">
      <div className="content">
        {posts.map((post) => (
          <SmallPost key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <h1>{post.title}</h1>
            </Link>
            <h2>{post.subtitle}</h2>
            <div>
              <h3>
                <span><AiOutlineCalendar /></span>
                {post.updatedAt}
              </h3>
              <h3>
                <span><BsFillPersonFill /></span>
                {post.author}
              </h3>
            </div>
          </SmallPost>
        ))}
      </div>
    </Container>
  )
}