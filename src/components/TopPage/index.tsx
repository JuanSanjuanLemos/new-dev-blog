import { Box } from "./styles";

import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export function TopPage() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    backToTop? (
      <Box>
        <span onClick={scrollUp}>
          <FaArrowUp />
        </span>
      </Box>
    )
    : <></>
  );
}
