import React from "react";

const HowWeWork = () => {
  return (
    <>
      <div className="mt-[87px] w-11/12 mx-auto">
        <div className="grid gap-5 mt-7">
          <p className="text-xl lg:text-3xl font-bold text-center">
            Our Process
          </p>
          <p className="text-xl  text-center">
            See what our projects have to go through..!
          </p>
          <img
            src="https://www.groovyweb.co/assets/img/assets-img/Diagram.svg"
            alt="not found"
          />
        </div>

        <div>
          <div className="first">
            <p className="text-3xl font-bold">
              Premium <span className="text-orange-500">Tech Recruitment</span>{" "}
              and
              <span className="text-blue-600"> Software Development</span>{" "}
              Services
            </p>

            <p className="text-xl">
              For demanding clients and challenging projects.
            </p>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="second">
            <img src="./images/developer_male.jpg" alt="not found" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
