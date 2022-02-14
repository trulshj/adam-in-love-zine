import styles from "../styles/about_pages/FaqItem.module.css";

interface FaqItemProps {
  question: string;
  answer: string;
}

export const faqs: FaqItemProps[] = [
  {
    question: "Will this zine be digital or physical?",
    answer:
      "This zine will be presented as a collection of digital works on a permanent website, currently scheduled for publication in February 2022.",
  },
  {
    question: "How will contributors be compensated?",
    answer: `The website will be completely free to view online, so no physical or monetary compensation is involved.<br />
    However, contributors will receive an exclusive digital PDF copy of the zine at the end of the project. If they wish to produce physical copies of the zine themselves, the mod team will send printer-friendly versions alongside the digital PDF.`,
  },
  {
    question: "How old do you have to be to join as a contributor?",
    answer: "Contributors must be 18+ by the end of the application period.",
  },
  {
    question: "What ships will be allowed?",
    answer:
      "Any and all Adam ships are allowed as long as characters are appropriately aged up/down (minor x minor, adult x adult) and portrayed in a SFW way. As this project welcomes pre-canon, canon, post-canon and temporal AU ship dynamics, you can age up/down any character (e.g. teen Reki x teen Adam.)",
  },
  {
    question: "Will there be solo Adam conent?",
    answer: `The webzine will consist of ship content only to feature as many Adam ships as possible, focusing on romantic love and other types of love.<br />
            However, if you are interested in more gen content for Adam, our team is also organizing <a href='https://www.adamflourishzine.com/' target='_blank' rel='noreferrer'>Flourish</a>, an upcoming post-canon Adam zine for charity! You can follow our Twitter for the latest updates <a href='https://twitter.com/adamsk8flourish' target='_blank' rel='noreferrer'>here</a>!`,
  },
];

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className={styles.container}>
      <h4 className={styles.question}>{question}</h4>
      <p
        className={styles.answer}
        dangerouslySetInnerHTML={{ __html: answer }}
      ></p>
    </div>
  );
}
