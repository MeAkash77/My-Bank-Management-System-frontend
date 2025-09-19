"use client";

import React from "react";
import Chart, { Props } from "react-apexcharts";

const state: Props["series"] = [
  {
    name: "Deposit",
    data: [20000, 25000, 15000, 10000, 30000, 7000, 10000],
  },
  {
    name: "Withdraw",
    data: [3000, 20000, 14000, 40000, 2000, 1500, 3400],
  },
];

const options: Props["options"] = {
  chart: {
    type: "area",
    animations: {
      enabled: true,
      speed: 300,
      dynamicAnimation: {
        enabled: true,
        speed: 300,
      },
    },
    sparkline: {
      enabled: false,
    },
    brush: {
      enabled: false,
    },
    id: "basic-bar",
    fontFamily: "Inter, sans-serif",
    foreColor: "hsl(var(--nextui-default-800))",
    stacked: true,
    toolbar: {
      show: false,
    },
  },

  xaxis: {
    categories: [1, 2, 3, 4, 5, 6, 7],
    labels: {
      style: {
        colors: "hsl(var(--nextui-default-900))",
        fontFamily: "Inter, sans-serif",
      },
    },
    axisBorder: {
      color: "hsl(var(--nextui-default-300))",
    },
    axisTicks: {
      color: "hsl(var(--nextui-default-600))",
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "hsl(var(--nextui-secondary-900))",
        fontFamily: "Inter, sans-serif",
      },
    },
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    show: true,
    borderColor: "hsl(var(--nextui-default-300))",
    strokeDashArray: 0,
    position: "back",
  },
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0, // hides markers instead of using @ts-ignore
  },
};

export const TransactionChart = () => {
  return (
    <div className="w-full z-20">
      <h2 className="text-xl font-bold mb-3">Deposit & Withdraw Ratio</h2>
      <div id="chart">
        <Chart options={options} series={state} type="area" height={425} />
      </div>
    </div>
  );
};
