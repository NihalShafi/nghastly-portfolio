import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

function Grid() {
  return (
    <section>
      <BentoGrid className="py-20">
        {gridItems.map(({ className, title, id, spareImg,img,imgClassName,titleClassName, description }) => (
          <BentoGridItem
            className={className}
            title={title}
            key={id}
            id={id}
            description={description}
            img={img}
            imgClassName={imgClassName}
            spareImg={spareImg}

            
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
