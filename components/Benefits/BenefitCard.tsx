"use client";

import { memo } from "react";
import { motion } from "framer-motion";

function BenefitCardComponent({
  benefit,
}: {
  benefit: {
    title: string;
    description: string;
    icon: any;
  };
}) {
  const Icon = benefit.icon;

  return (
    <motion.div
      className="
        glossy-card group relative rounded-lg border border-white/10
        p-6 md:p-8 lg:p-10 text-center cursor-pointer
        transition-shadow duration-500
        hover:shadow-2xl hover:shadow-primary/20
      "
    >
      <div className="transition-transform duration-500 group-hover:scale-[1.05]">
        {/* Icon */}
        <div className="mx-auto mb-6 md:mb-8 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/40">
          <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary transition-transform duration-500 group-hover:scale-110" />
        </div>

        {/* Title */}
        <h3 className="mb-3 md:mb-4 text-lg md:text-2xl font-bold text-white">
          {benefit.title}
        </h3>

        {/* Description */}
        <p className="leading-relaxed text-gray-200">{benefit.description}</p>
      </div>
    </motion.div>
  );
}

const BenefitCard = memo(BenefitCardComponent);
export default BenefitCard;
