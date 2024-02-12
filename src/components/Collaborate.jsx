import star from "../../images/star.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";
const Collaborate = () => {
  return (
    <div
      id="collaborate"
      className="w-full z-10 px-4 = py-4 bg-[#1F1F39] flex flex-col"
    >
      <h1 className="text-white mt-20">Lets Collaborate</h1>
      <p className="text-white text-lg mt-5">
        Ready to turn your ideas into exceptional designs? Contact us today, and
        let make something amazing together
      </p>
      <button className="bg-white py-2 px-4 w-52 mx-auto rounded-md mt-6 cursor-pointer hover:bg-indigo-900 hover:text-white transition-all duration-200">
        Lets Talk
      </button>

      <div className="laptop:flex laptop:justify-between">
        <div>
          <div className="flex items-center laptop:items-start laptop:mt-0 mt-8 gap-2">
            <img src={star} className="w-5 h-5 mb-1 text-white invert filter" />
            <h1 className="text-white font-inter">Creative.</h1>
          </div>
          <p className="mt-4 laptop:mt-8 laptop:max-w-[450px] text-white">
            Creative is where your imagination and our expertise converge to
            create design solutions that elevate your brand and set your apart
            from the competions.
          </p>
          <h1 className="text-white font-semibold mt-4"> hello@creativ0.com</h1>
        </div>
        <div className="flex justify-between px-8 py-4">
          <div className="text-white laptop:mr-32 desktop:mr-52">
            <ul>
              <li className="py-5 hover:text-slate-300 duration-300 transition-all cursor-pointer">
                Company
              </li>
              <li className="py-5 hover:text-slate-300 duration-300 transition-all cursor-pointer">
                About
              </li>
              <li className="py-5 hover:text-slate-300 duration-300 transition-all cursor-pointer">
                Services
              </li>
              <li className="py-5 hover:text-slate-300 duration-300 transition-all cursor-pointer">
                Careers
              </li>
              <li className="py-5 hover:text-slate-300 duration-300 transition-all cursor-pointer">
                Blog
              </li>
              <li className="py-5 hover:text-slate-300 duration-300 transition-all cursor-pointer">
                Pricing
              </li>
            </ul>
          </div>
          <div className="text-white desktop:mr-20 ">
            <ul>
              <li className="py-5 hover:text-slate-300 duration-300 transition-all cursor-pointer">
                Contact
              </li>
              <li className="py-5 hover:text-slate-300 duration-300 transition-all cursor-pointer">
                Help
              </li>
              <li className="py-5 hover:text-slate-300 duration-300 transition-all cursor-pointer">
                FAQs
              </li>
              <li className="py-5 hover:text-slate-300 duration-300 transition-all cursor-pointer">
                Press
              </li>
              <li className="py-5 hover:text-slate-300 duration-300 transition-all cursor-pointer">
                Term & Conditions
              </li>
              <li className="py-5 hover:text-slate-300 duration-300 transition-all cursor-pointer">
                Partners
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <p className="text-white text-center mx-auto cursor-pointer">
          Copyright &copy; 2024 Muhammad arif. All rights reserved
        </p>
      </div>
      <div className="flex mx-auto gap-4">
        <img
          src={linkedin}
          className="w-5 h-5 text-white invert filter mt-4"
          alt=""
        />
        <img
          src={twitter}
          className="w-5 h-5 text-white invert filter mt-4"
          alt=""
        />
        <img
          src={youtube}
          className="w-5 h-5 text-white invert filter mt-4"
          alt=""
        />
      </div>
    </div>
  );
};

export default Collaborate;
