import React, { useState } from "react";
import type { NextPage } from "next";

import styles from "../../styles/ArtOnly.module.css";
import listStyles from "../../styles/ZineItemList.module.css";

import { ArtType } from "../../lib/art";
import { ZineItemType, zineList } from "../../lib/zine";
import ArtItem from "../../components/zine-items/Art";

const ArtOnly: NextPage = () => {
  const [showingItem, setShowingItem] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  const showItem = (idx: number) => {
    setItemIndex(idx);
    setShowingItem(true);
  };

  const hideItem = () => {
    setItemIndex(-1);
    setShowingItem(false);
  };

  return !showingItem ? (
    <div className={listStyles.listContainer}>
      <h2>Art:</h2>
      {zineList.map((item, idx) =>
        !(item.type == ZineItemType.Art) ? null : (
          <a
            key={idx}
            className={listStyles.listItem}
            onClick={() => showItem(idx)}
            tabIndex={0}
          >
            {item.content.author}{" "}
            {item.content.ship != "" ? (
              <span>- {item.content.ship}</span>
            ) : null}
          </a>
        )
      )}
    </div>
  ) : (
    <div className={styles.artContainer}>
      <span>@{zineList[itemIndex].content.author}</span>
      <ArtItem art={zineList[itemIndex].content as ArtType} />
      <a className={listStyles.listItem} onClick={() => hideItem()}>
        &lt; Back to list
      </a>
    </div>
  );
};

export default ArtOnly;
