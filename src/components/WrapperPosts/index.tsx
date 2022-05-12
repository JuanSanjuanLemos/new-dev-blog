import { Container } from "./style";


import { SmallPost } from "../../components/SmallPost";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";

interface PostsFormatted{
  slug:string;
  first_publication_date:string;
  title: string;
  subtitle:string;
  author:string;
  bannerURL:string;
}

interface PostProps {
  posts: PostsFormatted[];
}


export function WrapperPosts({ posts }: PostProps){
  return(
    <Container className="box">
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
                {post.first_publication_date}
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