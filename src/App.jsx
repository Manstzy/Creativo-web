import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Portofolio from "./components/Portofolio";
import Collaborate from "./components/Collaborate";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Main />
      <Services />
      <Portofolio />
      <Collaborate />
    </>
  );
};

export default App;
