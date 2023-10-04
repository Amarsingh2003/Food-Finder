import image from "../assets/images/QuickDelivery.png";
const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center  ">
        Quick Delivery App
      </h3>

      <div className="container mx-auto grid gap-4 md:grid-cols-2 my-5 mb-0">
        <img className="mx-auto my-4 md:w-3/4" src={image} alt="apps" />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get the App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless convenience on-demand
          </h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              laborum, architecto praesentium, ipsam harum reprehenderit ea
              sapiente ab distinctio aperiam, aspernatur explicabo? Unde
              accusantium quod accusamus, facilis odit nesciunt voluptas, libero
              qui sunt ut itaque ab maxime veniam placeat ea nobis ducimus
              commodi.Quas eum quam suscipit quis iusto! Modi.{" "}
            </p>
          </div>

          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
