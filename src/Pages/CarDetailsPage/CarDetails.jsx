import { Helmet } from "react-helmet-async";
import Container from "../../Components/Shared/Container";
import { useLoaderData } from "react-router-dom";
import CarCarousal from "./CarCarousal";
import { FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";

const CarDetails = () => {
  // =================================================================
  const car = useLoaderData();
  // console.log(car);

  const [carPrice, setCarPrice] = useState(0);
  const newP = car?.CarPriceNew;
  const PreviousP = car?.CarPricePrevious;

  // it is used -->(Now, the logic to calculate carPrice will be executed after the initial render and whenever newP or PreviousP changes.)
  useEffect(() => {
    if (PreviousP && newP && newP < PreviousP) {
      const priceDrop = PreviousP - newP;
      setCarPrice(priceDrop);
    }
  }, [PreviousP, newP]);

  // console.log(carPrice);
  // =================================================================

  return (
    <>
      <Container>
        <Helmet>
          <title>Car Type || {car?.CarModel}</title>
        </Helmet>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-6">
          {/* car specification */}
          <div className="w-full">
            <CarCarousal car={car} />

            {/* info */}
            <div className="flex justify-between">
              <div>
                <p className="text-slate-500">{car?.CarCondition}</p>
                <h1 className="text-3xl">{car?.CarModel}</h1>
                <p className="mt-4">
                  <span className="font-bold text-4xl">
                    ${car?.CarPriceNew}
                  </span>
                  <span>{carPrice > 0 ? `$${carPrice} price drop` : " "}</span>
                </p>
              </div>
              <div>
                <button className="border-2 border-purple-900 hover:border-dotted px-3 py-1 rounded-full">
                  <span className="flex items-center gap-2">
                    <FaRegHeart /> Save
                  </span>
                </button>
              </div>
            </div>
            {/* info */}

            {/* key specification */}
            <h1 className="text-3xl font-bold mt-12"> key specification </h1>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="border-2 rounded-lg w-full p-2">
                <p className="text-xl font-semibold">{car?.FuelType}</p>
                <p className="text-slate-500 text-[12px]">Fuel Type</p>
              </div>
              <div className="border-2 rounded-lg w-full p-2">
                <p className="text-xl font-semibold">{car?.TopSpeed}Km</p>
                <p className="text-slate-500 text-[12px]">Top Speed</p>
              </div>
              <div className="border-2 rounded-lg w-full p-2">
                <p className="text-xl font-semibold">{car?.Mileage}Km</p>
                <p className="text-slate-500 text-[12px]">Mileage</p>
              </div>
              <div className="border-2 rounded-lg w-full p-2">
                <p className="text-xl font-semibold">{car?.Engine}</p>
                <p className="text-slate-500 text-[12px]">Engine</p>
              </div>
            </div>
            {/* key specification */}

            {/* basics */}
            <h1 className="text-4xl font-bold mt-12">Basics</h1>
            <div className="overflow-x-auto mt-6">
              <table className="table">
                {/* head */}

                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td className="font-bold text-xl">Exterior color</td>
                    <td>{car?.ExteriorColor}</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td className="font-bold text-xl">Interior color</td>
                    <td>{car?.InteriorColor}</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td className="font-bold text-xl">Drivetrain</td>
                    <td>{car?.Drivetrain}</td>
                  </tr>

                  <tr>
                    <td className="font-bold text-xl">Transmission</td>
                    <td>{car?.Transmission}</td>
                  </tr>
                  <tr>
                    <td className="font-bold text-xl">Engine</td>
                    <td>{car?.Engine}</td>
                  </tr>
                  <tr>
                    <td className="font-bold text-xl">Mileage</td>
                    <td>{car?.Mileage} mi.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* basics */}

            {/* features */}
            <h1 className="font-bold text-4xl mt-12">Features</h1>
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td className="font-bold text-xl">Convenience</td>
                    <td>
                      Adaptive Cruise Control <br /> Heated Seats <br /> Heated
                      Steering Wheel <br /> Navigation System
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td className="font-bold text-xl">Entertainment</td>
                    <td>
                      Bluetooth® <br /> HomeLink <br /> Premium Sound System
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td className="font-bold text-xl">Exterior</td>
                    <td>Alloy Wheels</td>
                  </tr>
                  <tr>
                    <td className="font-bold text-xl">Safety</td>
                    <td>
                      Backup Camera <br /> Blind Spot Monitor <br /> Brake
                      Assist
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold text-xl">Seating</td>
                    <td>
                      Leather Seats <br /> Memory Seat
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* features */}

            {/* seller Info */}
            <h1 className="text-4xl font-bold mt-12">Seller Info</h1>
            {/* seller Info */}
          </div>
          {/* checkout form */}
          <div className="w-full">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              quibusdam laudantium dolorum. Culpa quia veniam dolores tempore
              architecto quae sint minus dolorem est, inventore eaque
              doloremque! Accusamus, voluptate recusandae consequuntur maiores
              tempora in! Harum temporibus nesciunt obcaecati dicta autem a nisi
              vero nostrum incidunt dolorem totam ullam eum repudiandae
              laudantium, eius illum officia magnam est voluptate culpa.
              Repudiandae praesentium neque consequuntur quisquam repellat
              molestias hic! Reiciendis reprehenderit asperiores voluptates
              assumenda, esse rerum eaque pariatur adipisci cupiditate tempora
              quam temporibus in accusantium, doloremque quae tempore commodi
              facere culpa aperiam perspiciatis dignissimos et unde iure
              explicabo. Pariatur, minus amet suscipit atque natus reprehenderit
              porro minima cum maiores? Vitae molestiae architecto ea eius
              tenetur corrupti, autem facere delectus, veritatis sequi labore
              nihil laboriosam fugit debitis sed, aperiam excepturi itaque
              placeat impedit ipsam. Quasi dolore repellendus error voluptate
              perferendis asperiores dignissimos, eligendi officia inventore
              numquam, suscipit repellat quam quidem earum corrupti iste esse!
              Deleniti sequi temporibus praesentium possimus quas omnis
              repudiandae exercitationem quos quasi minus asperiores at dolorum
              voluptates nisi reprehenderit autem, corporis nesciunt repellat
              accusamus eligendi iusto? Eos officia ducimus quidem esse dolore
              saepe atque iste soluta eaque laboriosam quam laborum velit
              eligendi consequuntur corrupti neque, quisquam culpa modi
              obcaecati? Quia, harum molestias!
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CarDetails;
