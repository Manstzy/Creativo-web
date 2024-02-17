import phone1 from "../../images/phone1.png";
import phone2 from "../../images/phone2.png";
import phone3 from "../../images/phone3.png";
import phone4 from "../../images/phone4.png";
import phone5 from "../../images/phone5.png";
import phone6 from "../../images/phone6.png";
const Portofolio = () => {
  return (
    <div id="portofolio" className="px-4 py-16 w-full">
      <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
        Our portofolio
      </h1>
      <p data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
        We envision a world where every idea, product, or service is brought to
        life through exceptional design.
      </p>
      <div className="grid grid-cols-1 p-2 mt-5 medium:grid-cols-2 medium:gap-4">
        <div>
          <img
            src={phone1}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          />
          <p
            className="p-4"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <a href="" className="font-semibold">
              Daily App
            </a>{" "}
            - Increasing your productifity
          </p>
        </div>
        <div>
          <img
            src={phone2}
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          />
          <p
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="p-4"
          >
            <a href="" className="font-semibold">
              Daily App
            </a>{" "}
            - Increasing your productifity
          </p>
        </div>
        <div>
          <img
            src={phone3}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          />
          <p
            className="p-4"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <a href="" className="font-semibold">
              Daily App
            </a>{" "}
            - Increasing your productifity
          </p>
        </div>
        <div>
          <img
            src={phone4}
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          />
          <p
            className="p-4"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <a href="" className="font-semibold">
              Daily App
            </a>{" "}
            - Increasing your productifity
          </p>
        </div>
        <div>
          <img
            src={phone5}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          />
          <p
            className="p-4"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <a href="" className="font-semibold">
              Daily App
            </a>{" "}
            - Increasing your productifity
          </p>
        </div>
        <div>
          <img
            src={phone6}
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          />
          <p
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="p-4"
          >
            <a href="" className="font-semibold">
              Daily App
            </a>{" "}
            - Increasing your productifity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
