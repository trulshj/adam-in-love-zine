import React, { useState } from "react";
import type { NextPage } from "next";

import styles from "../../styles/Zine.module.css";

import CycleButtons from "../../components/CycleButtons";

import ArtItem from "../../components/zine-items/Art";
import PoemItem from "../../components/zine-items/Poem";
import ProseItem from "../../components/zine-items/Prose";

import { ZineItemType, zineList } from "../../lib/zine";
import { PoetryType } from "../../lib/poetry";
import { ProseType } from "../../lib/prose";
import { ArtType } from "../../lib/art";
import Author from "../../components/Author";

const FullZine: NextPage = () => {
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <div className={styles.container}>
      {zineList[itemIndex].type == ZineItemType.Art ? (
        <>
          <Author
            author={zineList[itemIndex].content.author}
            ship={zineList[itemIndex].content.ship}
          />
          <ArtItem art={zineList[itemIndex].content as ArtType} />
        </>
      ) : zineList[itemIndex].type == ZineItemType.Poetry ? (
        <PoemItem poem={zineList[itemIndex].content as PoetryType} />
      ) : (
        <ProseItem prose={zineList[itemIndex].content as ProseType} />
      )}
      <CycleButtons
        itemsLength={zineList.length}
        itemsIndex={itemIndex}
        setItemsIndex={setItemIndex}
      />
    </div>
  );
};

export default FullZine;
