import notebook from "../assets/notebookM.png";
import mobile from "../assets/mobileR.png";

const About = () => {
  return (
    <div className="text-white gap-4 max-w-[1200px] mx-auto my-12 grid sm:grid-cols-3">
      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4">
        <div className="max-w-[80%] mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            I can create your web site or app
          </h2>
          <p className="text-gray-200">
            from begining to end utilising the latest technologies. From backend
            databases to frontend animation, including all the pieces in the
            middle, all the boxes are ticked for a seamless development and
            deployment
          </p>
        </div>
      </div>

      <div className="hidden md:block sm:col-span-1 glass overflow-hidden">
        <img
          className="w-[200px] md:w-[500px] absolute"
          src={notebook}
          alt="image of a notebook"
        />
      </div>

      <div className="hidden md:block sm:col-span-1 glass overflow-hidden">
        <img
          className="w-[200px] md:w-[500px] absolute"
          src={mobile}
          alt="image of a mobile phone"
        />
      </div>
      <div className="md:hidden relative overflow-hidden h-[200px] glass">
        <img
          className="absolute w-[400px]"
          src={notebook}
          alt="image of a notebook"
        />
        <img
          className="w-[200px] right-0 absolute"
          src={mobile}
          alt="image of a mobile phone"
        />
      </div>

      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4">
        <div className="max-w-[80%] mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            I can create your web site or app
          </h2>
          <p className="text-gray-200">
            begining to end utilising the latest technologies. Backend databases
            to frontend animation, including all the pieces in the middle, all
            the boxes are ticked for a seamless development and deployment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
