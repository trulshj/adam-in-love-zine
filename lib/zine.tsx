import { artList, ArtType } from "./art";
import { proseList, ProseType } from "./prose";
import { poetryList, PoetryType } from "./poetry";

export enum ZineItemType {
  Art,
  Prose,
  Poetry,
}

interface ZineItem {
  type: ZineItemType;
  content: ArtType | ProseType | PoetryType;
}

const artZineItems = artList.map(
  (x) => ({ type: ZineItemType.Art, content: x } as ZineItem)
);

const proseZineItems = proseList.map(
  (x) => ({ type: ZineItemType.Prose, content: x } as ZineItem)
);

const poetryZineItems = poetryList.map(
  (x) => ({ type: ZineItemType.Poetry, content: x } as ZineItem)
);

// TODO: Order zine items correctly
export const zineList: ZineItem[] = [
  artZineItems[0], // lillachan cover front
  artZineItems[7], // grandtaco art (spread)
  proseZineItems[2], // email fic + art by tyulezhik (the pdf quality one)
  proseZineItems[9], // singeji fic
  artZineItems[14], // elianthos non-collab art
  proseZineItems[0], // delaccroix fic
  artZineItems[2], // lu.doscope non-collab art
  poetryZineItems[0], // poetry 1
  proseZineItems[3], // tulip fic
  artZineItems[4], // kamedori comic art TODO: Add the spread thing
  artZineItems[11], // burns non-collab art
  proseZineItems[12], // queenclaw fic
  proseZineItems[10], // that-lizart fic + lu.doscope art
  poetryZineItems[2], // poetry 3
  proseZineItems[7], // disconomi fic
  artZineItems[12], // bad non-collab art
  artZineItems[8], // marageprince art
  proseZineItems[6], // riye rose fic + burns art
  proseZineItems[15], // ness fic + krynnea art
  proseZineItems[4], // amuk fic
  proseZineItems[1], // smart zelda + kamedori collab
  proseZineItems[13], // treeviking fic
  artZineItems[13], // crumbs art
  poetryZineItems[1], // poetry 2
  proseZineItems[8], // keitora fic
  artZineItems[16], // krynnea art
  proseZineItems[11], // tweilightplants fic + bad art
  proseZineItems[14], // thechaoscryptid fic
  poetryZineItems[3], // poetry 4
  artZineItems[15], // thylezhik non-collab art
  proseZineItems[5], // queenie + elianthos collab
  artZineItems[19], // last page cover
];

/*
37 lillachan cover front 
38 grandtaco art (spread)
39 email fic + art for it (art by tyulezhik, the bad qulity ne lol)
40 singeji (fic)
41 elianthos (art, non-collab)
42 delacroix (fic)
43 lu.doscope (art, non-collab)
44 poetry 1
45 tulip (fic)
46 kamedori (the good comic, the one that has to become a spred)
47 burns (art, non-collab)
48 queenclaw (fic)
49 that-lizart + lu.docscope (collab)
50 disconomi (fic)
51 bad (non-collab, art)
52 mirageprince (art, the shitty comic lol)
53 riye rose + burns (collab)
54 ness + krynnea (art + fic)
55 amuk (fic)
56 smart zelda + kamedori (collab)
57 treeviking (fic)
58 crumbs (art)
59 poetry 2
60 keitora (fic)
61 krynnea (art)
62 tweilightplants + bad (fic+art)
63 thechaoscryptid (fic)
64 tyulezhik (art, non-collab)
65 queenie + elianthos (collab)
66 last page cover 
*/
