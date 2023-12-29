import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    months: 140,
  },
  {
    name: "Feb",
    months: 195,
  },
  {
    name: "Mar",
    months: 155,
  },
  {
    name: "Apr",
    months: 220,
  },
  {
    name: "May",
    months: 170,
  },
  {
    name: "June",
    months: 310,
  },

  {
    name: "July",
    months: 130,
  },

  {
    name: "Aug",
    months: 270,
    fees: 8,
  },

  {
    name: "Sep",
    months: 220,
  },

  {
    name: "Oct",
    months: 340,
  },

  {
    name: "Nov",
    months: 255,
  },

  {
    name: "Dec",
    months: 320,
  },
];
const yTicks = Array.from({ length: 6 }, (_, index) => 100 + index * 50);

export default function Chart() {
  return (
    <LineChart
      width={790}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid opacity={0.7} vertical={false} />

      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        padding={{ left: 20, right: 20 }}
        tick={{ fill: "#B9B9C3" }} // Add padding for X axis
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        ticks={yTicks}
        domain={[100, 350]}
        tick={{ fill: "#B9B9C3" }} // Change Y-axis numbers color
        // Add padding for Y axis
      />
      <Tooltip
        contentStyle={{ backgroundColor: "#00b8a9", color: "#fff" }}
        itemStyle={{ color: "#fff" }}
        cursor={false}
      />
      <Line
        type="monotone"
        dataKey="months"
        stroke="#00b8a9"
        strokeWidth={3}
        dot={false}
      />
    </LineChart>
  );
}
