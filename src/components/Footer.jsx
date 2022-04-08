import { AiOutlineGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer text-align-center">
      <a
        href="https://www.linkedin.com/in/priyakothalkar/"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://twitter.com/PriyaKothalkar"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillTwitterCircle />
      </a>
      <a
        href="https://github.com/Kothalkarpriya"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub />
      </a>
      <p>Made by Priya Kothalkar</p>
    </footer>
  );
}
