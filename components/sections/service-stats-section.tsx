"use client";

import { Activity, ChartColumn, PieChart } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    value: 12,
    suffix: "+",
    label: "Years Experience",
    icon: Activity,
  },
  {
    value: 99,
    suffix: "%",
    label: "Customer Approval",
    icon: ChartColumn,
  },
  {
    value: 7,
    suffix: "K",
    label: "Trademark Managed",
    icon: PieChart,
  },
];

function AnimatedValue({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const totalSteps = 40;
    const increment = value / totalSteps;
    const interval = window.setInterval(() => {
      current += increment;

      if (current >= value) {
        setDisplayValue(value);
        window.clearInterval(interval);
        return;
      }

      setDisplayValue(Math.round(current));
    }, 30);

    return () => window.clearInterval(interval);
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export function ServiceStatsSection() {
  return (
    <section className="w-full bg-[#f4f8fd]">
      <div className="mx-auto grid min-h-[36vh] max-w-[1240px] items-center gap-6 px-6 py-12 sm:px-8 lg:grid-cols-3 lg:px-[60px]">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="flex h-[82px] w-[82px] items-center justify-center text-[#0f67af]">
                <Icon className="h-[68px] w-[68px] stroke-[1.8]" />
              </div>
              <p className="mt-7 font-heading text-[84px] font-extrabold leading-none tracking-[-0.05em] text-[#0f67af]">
                <AnimatedValue value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-[18px] leading-7 text-[#0f67af]">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
