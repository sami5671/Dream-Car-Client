import {
  BarChart as RechartsBarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import UseToGetSoldCars from "../../../../Hooks/UseToGetSoldCars";
import { useEffect, useState } from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const AdminBarChartSales = () => {
  const [soldCars] = UseToGetSoldCars();
  // console.log(soldCars.length);
  const [janSales, setJanSales] = useState([]);
  const [febSales, setFebSales] = useState([]);
  const [marSales, setMarSales] = useState([]);
  const [aprSales, setAprilSales] = useState([]);
  const [maySales, setMaySales] = useState([]);
  const [junSales, setJunSales] = useState([]);
  const [julSales, setJulSales] = useState([]);
  const [augSales, setAugSales] = useState([]);
  const [sepSales, setSepSales] = useState([]);
  const [octSales, setOctSales] = useState([]);
  const [novSales, setNovSales] = useState([]);
  const [decSales, setDecSales] = useState([]);

  useEffect(() => {
    const jan = [];
    const feb = [];
    const mar = [];
    const apr = [];
    const may = [];
    const jun = [];
    const jul = [];
    const aug = [];
    const sep = [];
    const oct = [];
    const nov = [];
    const dec = [];

    soldCars.forEach((item) => {
      const date = new Date(item?.date);

      if (date.getUTCMonth() === 0) {
        jan.push(item);
      } else if (date.getUTCMonth() === 1) {
        feb.push(item);
      } else if (date.getUTCMonth() === 2) {
        mar.push(item);
      } else if (date.getUTCMonth() === 3) {
        apr.push(item);
      } else if (date.getUTCMonth() === 4) {
        may.push(item);
      } else if (date.getUTCMonth() === 5) {
        jun.push(item);
      } else if (date.getUTCMonth() === 6) {
        jul.push(item);
      } else if (date.getUTCMonth() === 7) {
        aug.push(item);
      } else if (date.getUTCMonth() === 8) {
        sep.push(item);
      } else if (date.getUTCMonth() === 9) {
        oct.push(item);
      } else if (date.getUTCMonth() === 10) {
        nov.push(item);
      } else if (date.getUTCMonth() === 11) {
        dec.push(item);
      }
    });

    setJanSales(jan);
    setFebSales(feb);
    setMarSales(mar);
    setAprilSales(apr);
    setMaySales(may);
    setJunSales(jun);
    setJulSales(jul);
    setAugSales(aug);
    setSepSales(sep);
    setOctSales(oct);
    setNovSales(nov);
    setDecSales(dec);
  }, [soldCars]);

  const totalSalesJan = janSales.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  const totalSalesFeb = febSales.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  const totalSalesMar = marSales.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  const totalSalesApr = aprSales.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  const totalSalesMay = maySales.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  const totalSalesJun = junSales.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  const totalSalesJul = julSales.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  const totalSalesAug = augSales.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  const totalSalesSep = sepSales.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  const totalSalesOct = octSales.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  const totalSalesNov = novSales.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  const totalSalesDec = decSales.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  const data = [
    { name: "Jan", totalSales: totalSalesJan },
    { name: "Feb", totalSales: totalSalesFeb },
    { name: "Mar", totalSales: totalSalesMar },
    { name: "Apr", totalSales: totalSalesApr },
    { name: "May", totalSales: totalSalesMay },
    { name: "Jun", totalSales: totalSalesJun },
    { name: "Jul", totalSales: totalSalesJul },
    { name: "Aug", totalSales: totalSalesAug },
    { name: "Sep", totalSales: totalSalesSep },
    { name: "Oct", totalSales: totalSalesOct },
    { name: "Nov", totalSales: totalSalesNov },
    { name: "Dec", totalSales: totalSalesDec },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar
          dataKey="totalSales"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top", angle: -45, fontSize: 12 }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default AdminBarChartSales;
