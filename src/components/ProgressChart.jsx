import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { day: "20 Days", Theory: 20, Short: 10, MCQ: 5 },
  { day: "40 Days", Theory: 40, Short: 25, MCQ: 20 },
  { day: "60 Days", Theory: 60, Short: 45, MCQ: 35 },
  { day: "80 Days", Theory: 75, Short: 60, MCQ: 50 },
  { day: "100 Days", Theory: 90, Short: 75, MCQ: 65 },
  { day: "120 Days", Theory: 100, Short: 100, MCQ: 100 },
];

export default function ProgressChart() {
  return (
    <div className="glass p-6 rounded-2xl mx-auto w-fit">
      <LineChart width={700} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Theory" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Short" stroke="#8884d8" />
        <Line type="monotone" dataKey="MCQ" stroke="#ffcc00" />
      </LineChart>
    </div>
  );
}
