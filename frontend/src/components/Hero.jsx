import heroImage from "../assets/profilepic.png";
import notebookL from "../assets/notebookL.png";
import notebookM from "../assets/notebookM.png";
import mobileR from "../assets/mobileR.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="relative grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8">
      <img
        className="absolute z-[-1] w-[400px] bottom-0 left-[-170px]"
        src={notebookL}
        alt=""
      />
      <img
        className="absolute z-[-1] w-[400px] bottom-0 left-[320px]"
        src={notebookM}
        alt=""
      />
      <img
        className="absolute z-[-1] w-[200px] bottom-[500px] left-[450px]"
        src={mobileR}
        alt=""
      />

      <div className="glass px-5 col-span-2 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <p className="mb-4 text-gray-500">{"I'm a"}</p>

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
        <p className="font-bold my-6 sm:text-lg lg:text-xl max-w-[200px] md:max-w-[600px] ml-1 text-gray-300">
          My name is Gerald Baalham and I have 5+ years experience in web
          development. A complete jigsaw, all of the pieces fit together
          perfectly.
        </p>
      </div>

      <div className="absolute bottom-0 right-0 w-[200px] lg:w-[600px]">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
