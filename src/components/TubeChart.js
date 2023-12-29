import { BarChart, Bar, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    name: "Tube-1",
    uv: 4000,
    pv: 4080,
  },
  {
    name: "Tube-2",
    uv: 4000,
    pv: 4080,
    amt: 2210,
  },
  {
    name: "Tube-3",
    uv: 4000,
    pv: 4080,
    amt: 2290,
  },
  {
    name: "Tube-4",
    uv: 2780,
    pv: 4080,
    amt: 2000,
  },
  {
    name: "Tube-5",
    uv: 1890,
    pv: 4080,
    amt: 2181,
  },
];

const RoundBarWithGradient = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = 5;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={radius}
        ry={radius}
      />
    </g>
  );
};

export default function App() {
  return (
    <BarChart
      width={200}
      height={100}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={10}
    >
      <CartesianGrid strokeDasharray="0" vertical={false} horizontal={false} />

      <Bar
        dataKey="pv"
        shape={<RoundBarWithGradient />}
        fill="url(#colorUv)"
        name=""
      />

      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="50%" stopColor="#eee" />
          <stop offset="50%" stopColor=" #00B8A9" />
        </linearGradient>
      </defs>

      <Tooltip />
    </BarChart>
  );
}
