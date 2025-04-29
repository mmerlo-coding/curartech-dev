"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const pricingData = [
  {
    id: 1,
    name: "Starter",
    price: 10,
    unit_amount: 1000,
    nickname: "Starter",
    offers: ["1000 messages", "1000 emails", "1000 sms"],
  },
  {
    id: 2,
    name: "Pro",
    price: 20,
    unit_amount: 2000,
    nickname: "Pro",
    offers: ["1000 messages", "1000 emails", "1000 sms"],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing Table"
            title="Our Pricing Plan"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
