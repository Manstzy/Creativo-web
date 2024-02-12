import phone1 from "../../images/phone1.png";
import phone2 from "../../images/phone2.png";
import phone3 from "../../images/phone3.png";
import phone4 from "../../images/phone4.png";
import phone5 from "../../images/phone5.png";
import phone6 from "../../images/phone6.png";
const Portofolio = () => {
  return (
    <div id="portofolio" className="px-4 py-16 w-full">
      <h1>Our portofolio</h1>
      <p>
        We envision a world where every idea, product, or service is brought to
        life through exceptional design.
      </p>
      <div className="grid grid-cols-1 p-2 mt-5 medium:grid-cols-2 medium:gap-4">
        <div>
          <img src={phone1} />
          <p className="p-4">
            <a href="" className="font-semibold">
              Daily App
            </a>{" "}
            - Increasing your productifity
          </p>
        </div>
        <div>
          <img src={phone2} />
          <p className="p-4">
            <a href="" className="font-semibold">
              Daily App
            </a>{" "}
            - Increasing your productifity
          </p>
        </div>
        <div>
          <img src={phone3} />
          <p className="p-4">
            <a href="" className="font-semibold">
              Daily App
            </a>{" "}
            - Increasing your productifity
          </p>
        </div>
        <div>
          <img src={phone4} />
          <p className="p-4">
            <a href="" className="font-semibold">
              Daily App
            </a>{" "}
            - Increasing your productifity
          </p>
        </div>
        <div>
          <img src={phone5} />
          <p className="p-4">
            <a href="" className="font-semibold">
              Daily App
            </a>{" "}
            - Increasing your productifity
          </p>
        </div>
        <div>
          <img src={phone6} />
          <p className="p-4">
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
