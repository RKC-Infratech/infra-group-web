
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

type PortfolioEntry = {
  sector: string;
  percentage: number;
  color: string;
};

interface InvestmentDonutChartProps {
  data: PortfolioEntry[];
}

const RADIAN = Math.PI / 180;

const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.9;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (percent < 0.08) return null; // Skip very small sectors for clarity

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={13}
      fontWeight={600}
      style={{
        textShadow: "0 2px 8px rgba(0,0,0,0.28)",
        filter: "brightness(1.5)"
      }}
    >
      {`${name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const InvestmentDonutChart: React.FC<InvestmentDonutChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={260}>
    <PieChart>
      <Pie
        data={data}
        dataKey="percentage"
        nameKey="sector"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={100}
        label={renderLabel}
        labelLine={false}
        isAnimationActive
      >
        {data.map((entry, idx) => (
          <Cell key={`cell-${idx}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{ backgroundColor: "#1e293b", border: "none", color: "#fff" }}
        formatter={(value, name) => [`${value}%`, name]}
      />
      {/* Legend hidden on small screens */}
      <Legend
        verticalAlign="bottom"
        align="center"
        iconType="circle"
        wrapperStyle={{
          fontSize: 13,
          color: "#fff",
          marginTop: 12,
          display: "none" // Hidden by default, could make responsive
        }}
      />
    </PieChart>
  </ResponsiveContainer>
);

export default InvestmentDonutChart;

