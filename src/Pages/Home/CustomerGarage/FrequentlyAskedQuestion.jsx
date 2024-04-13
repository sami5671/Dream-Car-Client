import Container from "../../../Components/Shared/Container";

const FrequentlyAskedQuestion = () => {
  return (
    <>
      <Container>
        <div className="mt-24 mb-12">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Have more questions? <br /> We have the answers.
          </h1>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I start tracking my values?
          </div>
          <div className="collapse-content lg:w-[550px]">
            <p>
              Once your account is created, simply add your vehicle via license
              plate, VIN, or model details to start tracking.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I track the value of more than one car?
          </div>
          <div className="collapse-content lg:w-[550px]">
            <p>Yep, you can track as many cars as you’d like (up to 99).</p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is my information private?
          </div>
          <div className="collapse-content lg:w-[550px]">
            <p>
              We will not share your account or vehicle information that is in
              Your Garage. If you decide to list your vehicle for sale, your
              contact information will be shared with buyers at that time.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is the difference between the values shown?
          </div>
          <div className="collapse-content lg:w-[550px]">
            <p>
              Market value shows what you can expect to get if you listed and
              sold your vehicle yourself on Cars.com. Instant Offer is what you
              would get if you sold the vehicle to a dealership partner of
              Cars.com today.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I track the value of a vehicle I don’t own?
          </div>
          <div className="collapse-content lg:w-[550px]">
            <p>
              Yes, simply add the vehicle make, model, year, and trim to start
              tracking its value.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Why is the value given a range?
          </div>
          <div className="collapse-content lg:w-[550px]">
            <p>
              There are many factors that go into a vehicle valuation, including
              each aspect of its condition. The range Cars.com provides will
              give you an idea of what you can expect in the current market.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How are the values calculated?
          </div>
          <div className="collapse-content lg:w-[550px]">
            <p>
              Our machine learning algorithm takes into consideration the
              current market pricing of each specific model, unique
              value-impacting details of your vehicle (such as mileage, color,
              and accident history), and your zip code to determine the
              predicted value.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FrequentlyAskedQuestion;
