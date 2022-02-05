export interface PoetryType {
  title: string;
  author: string;
  ship: string;
  poem: string[][];
}

export const poetryList: PoetryType[] = [
  {
    title: "Cat & Mouse",
    author: "ToxicTraitor",
    ship: "AdamKiriko",
    poem: [
      [
        "The thrill of the hunt",
        "The thrill of the chase",
        "The awaited first kiss",
        "And an encircling embrace",
      ],
      [
        "A dance for two lovers",
        "A game of cat and mouse",
        "Her heart beating",
        "Beneath her blouse",
      ],
      [
        "His feet seek out a rhythm",
        "A waltz without rhyme",
        "All to entrance her",
        "It is just one of his crimes",
      ],
      [
        "She wraps her fingers",
        "Around his wrists",
        "Like a bracelet of cuffs",
        "That he cannot resist",
      ],
      [
        "She gives him her kiss",
        "Then she locks him away",
        "Deep inside her heart",
        "Where he is happy to stay",
      ],
    ],
  },
];
