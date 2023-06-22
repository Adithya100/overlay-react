import React from "react";
import styles from "./Group492.module.scss";

const Group492 = () => {
  return (
    <div className={styles.group492}>
      <div className={styles.flexWrapperOne}>
        <div className={styles.content}>
          <p className={styles.groceriesAtDoorstep}>
            Groceries at <br />
            Doorstep
          </p>
          <p className={styles.loremIpsumIsSimplyDummyText}>
            Lorem Ipsum is simply dummy text
          </p>
          <div className={styles.link}>
            <p className={styles.shopNow}>SHOP NOW</p>
            <div className={styles.rectangle14} />
          </div>
        </div>
      </div>
      <img
        alt=""
        className={
          styles.shoesShoePngTransparentShoeImagesP
        }
        src="https://static.overlay-tech.com/assets/8b362be7-7504-478f-bccd-8a0ce252295c.png"
      />
    </div>
  );
};

export default Group492;