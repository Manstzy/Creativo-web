import { useState } from "react";
import down from "../../images/down.png";
import up from "../../images/up.png";

const Services = () => {
  const [slide, setSlide] = useState(false);
  const [slide1, setSlide1] = useState(false);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const handleSlide = () => {
    setSlide(!slide);
  };
  const handleSlide1 = () => {
    setSlide1(!slide1);
  };
  const handleSlide2 = () => {
    setSlide2(!slide2);
  };
  const handleSlide3 = () => {
    setSlide3(!slide3);
  };

  return (
    <div id="services" className=" w-full bg-[#1F1F39] px-5 py-8 ">
      <h1 className="text-white">Our Services</h1>
      <div>

      <div
        onClick={handleSlide}
        className="flex flex-col items-center justify-center py-4 border-b-[1px] border-white cursor-pointer"
      >
        <div className="flex gap-2">
          <h1 className="text-white text-2xl text-center mt-1">
            Visual Branding
          </h1>
          <img
            src={slide ? up : down}
            className="w-5 text-white filter invert h-5 mt-3 transition-all duration-300"
          />
        </div>
      </div>
      <div
        className={
          slide
            ? "bg-[#1F1F39] block p-4 border-b-[1px] transition-all duration-200 border-white text-white"
            : "bg-[#1F1F39] hidden p-4 border-b-[1px] transition-all duration-200 border-white text-white"
        }
      >
        Your brand is more than logo; its the essence of your business. We
        create compelling brand identities that tell your unique story and
        resonate with your target audience.
      </div>

      <div
        onClick={handleSlide1}
        className="flex flex-col items-center justify-center py-4 border-b-[1px] border-white cursor-pointer"
      >
        <div className="flex gap-2">
          <h1 className="text-white text-2xl text-center mt-1">
            Creative Campaign
          </h1>
          <img
            src={slide1 ? up : down}
            className="w-5 text-white filter invert h-5 mt-3 transition-all duration-300"
          />
        </div>
      </div>
      <div
        className={
          slide1
            ? "bg-[#1F1F39] block p-4 border-b-[1px] transition-all duration-200 border-white text-white"
            : "bg-[#1F1F39] hidden p-4 border-b-[1px] transition-all duration-200 border-white text-white"
        }
      >
        Your brand is more than logo; its the essence of your business. We
        create compelling brand identities that tell your unique story and
        resonate with your target audience.
      </div>

      <div
        onClick={handleSlide2}
        className="flex flex-col items-center justify-center py-4 border-b-[1px] border-white cursor-pointer"
      >
        <div className="flex gap-2">
          <h1 className="text-white text-2xl text-center mt-1">UI/UX Design</h1>
          <img
            src={slide2 ? up : down}
            className="w-5 text-white filter invert h-5 mt-3 transition-all duration-300"
          />
        </div>
      </div>
      <div
        className={
          slide2
            ? "bg-[#1F1F39] block p-4 border-b-[1px] transition-all duration-200 border-white text-white"
            : "bg-[#1F1F39] hidden p-4 border-b-[1px] transition-all duration-200 border-white text-white"
        }
      >
        Your brand is more than logo; its the essence of your business. We
        create compelling brand identities that tell your unique story and
        resonate with your target audience.
      </div>

      <div
        onClick={handleSlide3}
        className="flex flex-col items-center justify-center py-4 border-b-[1px] border-white cursor-pointer"
      >
        <div className="flex gap-2">
          <h1 className="text-white text-2xl text-center mt-1">Development</h1>
          <img
            src={slide3 ? up : down}
            className="w-5 text-white filter invert h-5 mt-3 transition-all duration-300"
          />
        </div>
      </div>
      <div
        className={
          slide3
            ? "bg-[#1F1F39] block p-4 border-b-[1px] transition-all duration-200 border-white text-white"
            : "bg-[#1F1F39] hidden p-4 border-b-[1px] transition-all duration-200 border-white text-white"
        }
      >
        Your brand is more than logo; its the essence of your business. We
        create compelling brand identities that tell your unique story and
        resonate with your target audience.
      </div>

      </div>

    </div>
  );
};

export default Services;
