import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import UseToGetUserAddedCarByEmail from "../../../../Hooks/UseToGetUserAddedCarByEmail";

const UserPieChart = () => {
  // =================================================
  const [userAddedCarByEmail] = UseToGetUserAddedCarByEmail();

  const rejectedCar = userAddedCarByEmail.filter(
    (item) => item?.CarStatus === "cancel"
  );
  const acceptedCar = userAddedCarByEmail.filter(
    (item) => item?.CarStatus === "accepted"
  );

  //----------------------------------------------------------------
  const PieData = [
    { name: "Rejected Car", value: rejectedCar.length },
    { name: "Accepted Car", value: acceptedCar.length },
  ];

  const COLORS = ["#67e8f9", "#d4d4d8"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#7c2d12"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={PieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          cursor="pointer"
          fill="#8884d8"
          dataKey="value"
        >
          {PieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default UserPieChart;
