import { AreaChart, Area } from "recharts";

const data = [
  {
    name: "Jan",
    months: 100,
  },
  {
    name: "Feb",
    months: 230,
  },
  {
    name: "Mar",
    months: 180,
  },
  {
    name: "Apr",
    months: 350,
  },
  {
    name: "May",
    months: 210,
  },
  {
    name: "June",
    months: 450,
  },
  {
    name: "July",
    months: 330,
  },
];

function SmallChart() {
  return (
    <div>
      <AreaChart
        width={155}
        height={59}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00b8a9" stopOpacity={2} />
            <stop offset="100%" stopColor="#00777e" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="months"
          stroke=""
          fill="url(#chartGradient)"
        />
      </AreaChart>
    </div>
  );
}

export default SmallChart;
