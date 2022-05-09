import { Article } from "./style";
import { ReactNode } from "react";

interface SmallPostProps {
  children: ReactNode;
}

export function SmallPost({
  children,
}: SmallPostProps) {
  return (
    <Article>
      {
        children
      }
    </Article>
  );
}
