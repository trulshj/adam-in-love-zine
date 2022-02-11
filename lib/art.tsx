import backCover from "../public/Adam in Love Back Cover lillachan-1.png";
import frontCover from "../public/Adam in Love Cover lillachan-1.png";
import badCollab from "../public/Adam_in_love_collab_bad-1.png";
import luDoscope from "../public/Adam_in_Love_Fantasy_AU_Lu.doscope_-1.png";
import kamedoriCollab from "../public/Adam_in_love_kame-dori_collab_shadow_tada_ai-1.png";
import kameDoriSpread from "../public/kamedori-spread.png";
import emailFic from "../public/Illustration (3).png";
import mirageprinceCollab from "../public/AdaminLove_EDENSnake_MiragePrince-1.png";
import tyulezhik from "../public/adaminlove_tadaai_tyulezhik-1.png";
import burns from "../public/AIL-ADAREKI-BURNS-1.png";
import burnsCollab from "../public/AIL-ADAREKI-BURNS-COLLAB-1.png";
import bad from "../public/BAD_BAD_TIME_adam_in_love-1.png";
import crumbs from "../public/CRUMBS_AIL_LoveBlossom-1.png";
import elianthos from "../public/Elianthos_TadaAi art1_AiL zine-1.png";
import elianthoscollab from "../public/Elianthos_TadaAi art2_collab w Queenie_AiL zine-1.png";
import grandtaco from "../public/ADAM_IN_LOVE-Dk JOE_CHERRY_ADAM_GRANDTACOSUPREM-1.png";
import lizardCollab from "../public/Lu.doscope__That_lizard_Collab_.png";
import krynnea1 from "../public/Krynnea1.png";
import krynnea2 from "../public/Krynnea2.png";

export interface ArtType {
  id: number;
  author: string;
  ship: string;
  image: StaticImageData;
}

export const artList: ArtType[] = [
  {
    id: 0,
    author: "lillachan",
    ship: "Front Cover",
    image: frontCover,
  },
  {
    id: 1,
    author: "bad", // collab
    ship: "Adam/Joe",
    image: badCollab,
  },
  {
    id: 2,
    author: "Lu.doscope",
    ship: "Adam/Joe/Cherry",
    image: luDoscope,
  },
  {
    id: 3,
    author: "kame-dori", // collab
    ship: "Adam/Shadow",
    image: kamedoriCollab,
  },
  {
    id: 4,
    author: "kame-dori",
    ship: "Adam/Joe",
    image: kameDoriSpread,
  },
  {
    id: 5,
    author: "kame-dori",
    ship: "Adam/Joe",
    image: kameDoriSpread,
  },
  {
    id: 6,
    author: "tyulezhik", // collab
    ship: "Adam/Tadashi",
    image: emailFic,
  },
  {
    id: 7,
    author: "GRANDTACOSUPREM",
    ship: "Adam/Joe/Cherry",
    image: grandtaco,
  },
  {
    id: 8,
    author: "MiragePrince",
    ship: "Adam/Langa/Tadashi",
    image: mirageprinceCollab,
  },
  {
    id: 9,
    author: "tyulezhik",
    ship: "Adam/Tadashi",
    image: tyulezhik,
  },
  {
    id: 10,
    author: "BURNS", // collab
    ship: "Adam/Reki",
    image: burnsCollab,
  },
  {
    id: 11,
    author: "BURNS",
    ship: "Adam/Reki",
    image: burns,
  },
  {
    id: 12,
    author: "bad",
    ship: "Adam/Langa/Tadashi",
    image: bad,
  },
  {
    id: 13,
    author: "crumbs",
    ship: "Adam/Cherry",
    image: crumbs,
  },
  {
    id: 14,
    author: "Elianthos",
    ship: "Adam/Tadashi",
    image: elianthoscollab,
  },
  {
    id: 15,
    author: "Elianthos", // collab
    ship: "Adam/Tadashi",
    image: elianthos,
  },
  {
    id: 16,
    author: "Krynnea",
    ship: "Adam/Langa",
    image: krynnea1,
  },
  {
    id: 17,
    author: "Krynnea",
    ship: "Adam/Miya",
    image: krynnea2,
  },
  {
    id: 18,
    author: "Lu.doscope", // collab
    ship: "Adam/Cherry",
    image: lizardCollab,
  },
  {
    id: 19,
    author: "lillachan",
    ship: "Back Cover",
    image: backCover,
  },
];
