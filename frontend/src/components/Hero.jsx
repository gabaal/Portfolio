import heroImage from "../assets/profilepic.png";
import notebookL from "../assets/notebookL.png";
import notebookM from "../assets/notebookM.png";
import mobileR from "../assets/mobileR.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="relative grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto overflow-hidden md:overflow-visible py-8"
      id="hero"
    >
      <img
        className="hidden md:block absolute z-[-1] w-[400px] bottom-0 left-[-170px]"
        src={notebookL}
        alt=""
      />
      <img
        className="absolute z-[-1] w-[400px] -bottom-[190px] md:bottom-0 md:left-[320px]"
        src={notebookM}
        alt=""
      />
      <img
        className="absolute z-[-1] w-[200px] bottom-[750px] left-[450px]"
        src={mobileR}
        alt=""
      />

      <div className="glass px-5 col-span-2 my-auto z-[-1]">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold md:p-0">
          <p className="md:mb-4 text-gray-500">{"I'm a"}</p>

          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Backend Dev",
              1000,
              "Web Designer",
              1000,
              "Full Stack Dev",
              1000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </h1>
        <p className="font-bold mb-6 md:mb-0 md:my-6 text-sm sm:text-lg lg:text-xl max-w-[280px] p-4 md:max-w-[600px] ml-1 text-gray-300">
          My name is Gerald Baalham and I create full stack web applications. I
          complete the whole jigsaw, fitting all of the pieces together
          perfectly for a smooth development process.
        </p>
      </div>

      <div className="absolute bottom-0 right-0 w-[250px] lg:w-[600px] z-[-1]">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
