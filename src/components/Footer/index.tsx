import Image from "next/image";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container className="box">
      <div className="content">
        <Image src="/images/logo.svg" width="150" height="30" alt="" />
        <p>
          &copy;2022{" "}
          <a href="https://github.com/JuanSanjuanLemos">Juan Lemos</a>
        </p>
      </div>
    </Container>
  );
}
