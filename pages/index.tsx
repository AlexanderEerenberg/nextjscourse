import "fetch-everywhere";
import Paragraph from "../components/Paragraph";
import ReactMarkdown from "react-markdown/with-html";
import { GithubStyles } from "../styles/github";
import { Header } from "../components/Header";
import Link from "next/link";

function Index(props: any) {
  console.log(props);
  return (
    <>
      <Header />
      Hellooooooo2
      <ReactMarkdown source={props.markdown} escapeHtml={false} />
      <h1 id="demo">
        DEMO: {props.section ? `/${props.section}` : null}
        {props.id ? `/${props.id}` : null}
      </h1>
      <Paragraph
        style={{ color: "red" }}
        text={"This is a paragraph. Why don't you click me?"}
      />
      <div>
        <Link href="/DataPage">
          <a>* Difference between SSR and CSR.</a>
        </Link>
      </div>
      <div>
        <Link
          href={`/index?section=sectionName&id=123`}
          as="/section/123"
          passHref={true}
          scroll={false}
        >
          <a>* URL params</a>
        </Link>
      </div>
      {GithubStyles}
    </>
  );
}

Index.getInitialProps = async ({ query }) => {
  const markdown = await fetch(
    "https://course-2.willemliu.now.sh/static/README.md"
  ).then(res => res.text());
  return { markdown, section: query.section, id: query.id };
};

export default Index;
