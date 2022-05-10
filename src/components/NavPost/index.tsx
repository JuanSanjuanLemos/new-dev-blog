import Link from "next/link";
import { Box } from "./styles";

interface NavPostProps{
  variant?: string;
  title: string;
  typePost: string;
  link:string;
}

export function NavPost({title,typePost,variant, link}:NavPostProps){
  return(
    <Box className={`-${variant}`}>
      <h2>{title}</h2>
      <Link href={`/posts/${link}`}>
        <h3>{typePost}</h3>
      </Link>
    </Box>
  )
}