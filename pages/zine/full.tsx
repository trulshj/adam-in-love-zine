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

const FullZine: NextPage = () => {
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <div className={styles.container}>
      <CycleButtons
        itemsLength={zineList.length}
        itemsIndex={itemIndex}
        setItemsIndex={setItemIndex}
      />
      {zineList[itemIndex].type == ZineItemType.Art ? (
        <ArtItem art={zineList[itemIndex].content as ArtType} />
      ) : zineList[itemIndex].type == ZineItemType.Poetry ? (
        <PoemItem poem={zineList[itemIndex].content as PoetryType} />
      ) : (
        <ProseItem prose={zineList[itemIndex].content as ProseType} />
      )}
    </div>
  );
};

export default FullZine;
