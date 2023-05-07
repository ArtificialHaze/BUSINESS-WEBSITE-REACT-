import React from "react";
import styles, { layout } from "./styles";
import { features } from "./staticTexts";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, i }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        i !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[62px] h-[62px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="Icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className={`flex-1 flex flex-col ml-3`}>
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Lorem ipsum dolor sit amet, <br className="sm:block hidden" />{" "}
          consectetur adipisicing elit.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          veritatis nesciunt eveniet eum odit accusantium?
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} i={i} />
        ))}
      </div>
    </section>
  );
};

export default Business;
