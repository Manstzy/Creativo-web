import lampu from "../../images/lampu.png";
const Main = () => {
  return (
    <div
      id="home"
      className="px-4 py-16 desktop:px-8 flex justify-between items-center"
    >
      <div className="desktop:flex">
        <div className="h-[3px] mt-8 w-12 desktop:mt-11 desktop:mr-4 rounded-md bg-slate-800"></div>
        <div>
          <h1 className="font-inter medium:mt-10 text-4xl phone:text-[40px] medium:text-[50px] phone:mt-5 font-bold mt-3">
            Where
          </h1>
          <h1 className="font-inter text-4xl medium:mt-2 medium:text-[50px]  phone:text-[40px] font-bold">
            Design Meets
          </h1>
          <h1 className="font-inter text-4xl medium:mt-2 medium:text-[50px] phone:text-[40px] font-bold">
            Inovations!
          </h1>
          <p className="mt-5 max-w-[270px] phone:max-w-[300px] desktop:max-w-[520px] medium:max-w-[450px] text-xl phone:mt-10">
            Whether you are a starup looking to establish your brand identity or
            an established business aiming to refresh your image, we have got
            the creative firepower to make it happen.
          </p>
          <button className="bg-[#1F1F39] cursor-pointer desktop:px-6 hover:bg-indigo-900 transition-all duration-300 desktop:py-3 px-4 py-2 mt-16 text-white rounded-md font-inter">
            LETS TALK
          </button>
        </div>
      </div>
      <img
        src={lampu}
        className="large:block hidden w-[450px] h-[450px] desktop:w-[500px] desktop:h-[500px]"
        alt=""
      />
    </div>
  );
};

export default Main;
