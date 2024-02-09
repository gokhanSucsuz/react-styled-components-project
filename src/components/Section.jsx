import Article from "./Article";
import { StyledSection } from "./styled";

export default function Section() {
  const article = [
    {
      title: "Lorem ipsum dolor",
      img: "https://picsum.photos/id/233/1200/450",
      content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eveniet!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eveniet!</p>
        `,
      link: "#"
    },
    {
      title: "Lorem ipsum dolor2",
      img: "https://picsum.photos/id/1032/1200/450",
      content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eveniet!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eveniet!</p>
        `,
      link: "#"
    }
  ];
  return (
    <StyledSection>
      {article.map((item, index) =>
        <Article
          key={index}
          title={item.title}
          img={item.img}
          content={item.content}
          link={item.link}
        />
      )}
    </StyledSection>
  );
}
