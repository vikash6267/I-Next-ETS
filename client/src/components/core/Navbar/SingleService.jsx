import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function SingleService({ services, services2 = false, serviceName }) {
  useEffect(() => {
    // console.log(services);
  });
  return (
    <div>
      <h1 className=" mb-7 font-bold text-xl">{serviceName}</h1>

      <ul className=" flex flex-col gap-2 text-lg  ">
        {services?.map((service) => (
          <li key={service.id}>
            <Link
              to={service.path}
              className="text-black !important hover:text-blue-600 "
            >
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SingleService;
