import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const BarChartStats = ({ barData }) => {
  const data = [
    {
      name: "0-100",
      price: barData.range1,
    },
    {
      name: "101-200",
      price: barData.range2,
    },
    {
      name: "201-300",
      price: barData.range3,
    },
    {
      name: "301-400",
      price: barData.range4,
    },
    {
      name: "401-500",
      price: barData.range5,
    },
    {
      name: "501-600",
      price: barData.range6,
    },
    {
      name: "601-700",
      price: barData.range7,
    },
    {
      name: "701-800",
      price: barData.range8,
    },
    {
      name: "801-900",
      price: barData.range9,
    },
    {
      name: "900<",
      price: barData.range10,
    },
  ];
  return (
    <div>
      <BarChart
        width={700}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 10,
          bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="price" fill="#088395" />
      </BarChart>
    </div>
  );
};

export default BarChartStats;
