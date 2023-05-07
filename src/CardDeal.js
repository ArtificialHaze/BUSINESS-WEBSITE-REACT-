import React from "react";
import { card } from "./assets";
import styles, { layout } from "./styles";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Lorem ipsum <br className="sm:block hidden" /> dolor sit amet.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis dicta
          deleniti, dolorem error fugit nesciunt!
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="Card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
