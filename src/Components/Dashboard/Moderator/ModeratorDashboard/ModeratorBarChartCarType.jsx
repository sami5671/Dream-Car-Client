import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import UseAllCar from "../../../../Hooks/UseAllCar";

const ModeratorBarChartCarType = () => {
  const [allCars] = UseAllCar();
  // console.log(allCars);
  const electric = allCars.filter((item) => item?.Category === "Electric");
  const suv = allCars.filter((item) => item?.Category === "Suv");
  const sedan = allCars.filter((item) => item?.Category === "Sedan");
  const pickup = allCars.filter((item) => item?.Category === "Pickup");
  const luxury = allCars.filter((item) => item?.Category === "Luxury");
  const crossover = allCars.filter((item) => item?.Category === "Crossover");
  const hybrid = allCars.filter((item) => item?.Category === "Hybrid");
  const diesel = allCars.filter((item) => item?.Category === "Diesel");
  const van = allCars.filter((item) => item?.Category === "Van");
  const coupe = allCars.filter((item) => item?.Category === "Coupe");
  const minivan = allCars.filter((item) => item?.Category === "Minivan");

  const data = [
    {
      name: "Electric",
      car: electric.length,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Suv",
      car: suv.length,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Sedan",
      car: sedan.length,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Pickup",
      car: pickup.length,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Luxury",
      car: luxury.length,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Crossover",
      car: crossover.length,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Hybrid",
      car: hybrid.length,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Diesel",
      car: diesel.length,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Van",
      car: van.length,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Coupe",
      car: coupe.length,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Minivan",
      car: minivan.length,
      pv: 680,
      amt: 1700,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 0,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="name"
          scale="band"
          fontSize={12}
          angle={-45}
          textAnchor="end"
          height={50}
          stroke="#334155"
          tick={{ fill: "#fff" }}
        />
        <YAxis stroke="#fff" tick={{ fill: "#fff" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="car" barSize={20} fill="#cbd5e1" />
        <Line type="monotone" dataKey="car" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ModeratorBarChartCarType;
