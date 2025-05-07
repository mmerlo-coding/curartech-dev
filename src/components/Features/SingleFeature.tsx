import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, image } = feature;
  return (
    <div
      className="fadeInUp mb-12 flex flex-col gap-8 md:flex-row"
      data-wow-delay=".15s"
    >
      <div className="w-full md:w-1/2">
        <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
          <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
          {title}
        </h3>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
          {paragraph}
        </p>
      </div>
      <div className="relative h-[400px] w-full rounded-[12px] shadow-md md:w-1/2">
        <Image
          src={image}
          alt={`curartech - ${title}`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SingleFeature;
