"use client";

import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

const Grid = () => {
  const { t } = useLanguage();

  const translatedGridItems = [
    { ...gridItems[0], title: t("grid.item1") },
    { ...gridItems[1], title: t("grid.item2") },
    {
      ...gridItems[2],
      title: t("grid.item3Title"),
      description: t("grid.item3Desc"),
    },
    { ...gridItems[3], title: t("grid.item4") },
    {
      ...gridItems[4],
      title: t("grid.item5Title"),
      description: t("grid.item5Desc"),
    },
    { ...gridItems[5], title: t("grid.item6") },
  ];

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {translatedGridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
