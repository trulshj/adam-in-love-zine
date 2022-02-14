interface ModProfileProps {
  name: string;
  pronouns: string;
  age: number;
  username: string;
  url: string;
  role: string;
  experience: string[];
}

export const mods: ModProfileProps[] = [
  {
    name: "tulip",
    pronouns: "he/him",
    age: 21,
    username: "fishnobi",
    url: "https://twitter.com/fishnobi",
    role: "Writing, Art, Formatting and Web Dev Mod",
    experience: [
      "Formatting Mod for <a href='https://twitter.com/sk8TTSzine' target='_blank' rel='noreferrer'>Sk8 Through the Seasons zine</a>",
      "General, Art & Formatting Mod for <a href='https://twitter.com/sk8auzine' target='_blank' rel='noreferrer'>Sk8 AU zine</a>",
      "Graphics Mod for <a href='https://twitter.com/acscrapbookzine' target='_blank' rel='noreferrer'>Animal Crossing Scrapbook zine</a>",
      "Art & Formatting Mod for <a href='https://twitter.com/sexpositivebnha' target='_blank' rel='noreferrer'>Sex Positive BNHA zine</a> [nsfw]",
    ],
  },
  {
    name: "vince",
    pronouns: "she/her",
    age: 21,
    username: "vestaaqui",
    url: "https://twitter.com/vestaaqui",
    role: "Organization, Communications and Social Media Mod",
    experience: [
      "Organization, Merch & Finance Mod for <a href='https://twitter.com/sk8TTSzine' target='_blank' rel='noreferrer'>Sk8 Through the Seasons zine</a>",
      "Organization & Finance Mod for <a href='https://twitter.com/sk8auzine' target='_blank' rel='noreferrer'>ShinDeku Unbroken Bonds zine</a>",
      "Finance Mod for <a href='https://twitter.com/miyusawazine' target='_blank' rel='noreferrer'>MiyuaSawa Battery zine</a> [leftover sales]",
    ],
  },
  {
    name: "rayfelle",
    pronouns: "she/her",
    age: 27,
    username: "rayfelle_exe",
    url: "https://twitter.com/rayfelle_exe",
    role: "Graphics Mod",
    experience: ["5+ years of professional graphic design"],
  },
  {
    name: "unrivalling",
    pronouns: "they/them",
    age: 28,
    username: "unrivalling",
    url: "https://twitter.com/unrivalling",
    role: "Writing Mod (Prose & Poetry)",
    experience: [
      "Writer Mod for <a href='https://twitter.com/FodlanFrontier' target='_blank' rel='noreferrer'>FE3H Fodlan Frontier zine</a>",
      "Head and Writer Mod for <a href='https://twitter.com/Lorenz_Zine' target='_blank' rel='noreferrer'>FE3H Rose of Gloucester zine</a> [nsfw]",
      "Writer Mod/Contributor for multiple other zines",
    ],
  },
];

export default function ModProfile({
  name,
  pronouns,
  age,
  username,
  url,
}: Partial<ModProfileProps>) {
  return (
    <h3>
      {name?.toUpperCase()} | {pronouns?.toUpperCase()} | {age} |{" "}
      <a href={url} target="_blank" rel="noreferrer">
        @{username?.toUpperCase()}
      </a>
    </h3>
  );
}
