import React from "react";
import { Pie } from "react-chartjs-2";
export const PieChart = ({ recovered, confirmed, deaths }) => {
  const data = {
    labels: ["recovered", "confirmed", "deaths"],
    datasets: [
      {
        data: [recovered, confirmed, deaths],
        backgroundColor: ["green", "blue", "red"],
        hoverBackgroundColor: ["#88d288", "#36A2EB", "#e04444"],
      },
    ],
  };
  console.log("re", recovered);
  return (
    <div>
      <Pie
        data={data}
        width={1000}
        height={380}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};
