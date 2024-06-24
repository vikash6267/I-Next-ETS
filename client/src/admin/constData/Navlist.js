import { IoMdPersonAdd } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { SiCloudflareworkers } from "react-icons/si";
export const navbar = [
  {
    id: 1,
    title: "Make Admin",
    path: "/makeadmin",
    icon: <IoMdPersonAdd />,
  },
  {
    id: 2,
    title: "See Messages",
    path: "/messages",
    icon: <FaMessage />,
  },
  {
    id: 3,
    title: "Create Employee",
    path: "/createemployee",
    icon: <GrUserWorker />,
  },
  {
    id: 4,
    title: "Job-Application",
    path: "/jobapplication",
    icon: <SiCloudflareworkers />,
  },
];
