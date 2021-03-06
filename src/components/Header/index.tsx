import Image from "next/image";
import Link from "next/link";
import { Content } from "./styles";

export function Header() {
  return (
    <Content>
      <Link href="/">
        <div className="wrapper-logo">
          <Image src="/images/logo.svg" layout="fill" alt="logo"/>
        </div>
      </Link>
    </Content>
  );
}
