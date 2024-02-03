import React from "react";
import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { BiSolidHomeHeart } from "react-icons/bi";

import './ChoiceUs.css';

const ChoiceUs = () => {
  const reasons = [
    {
      id: 1,
      title: "Sell your home",
      description:
        "We do a free evaluation to be sure you want to start selling.",
      icon:<FaHome/>
    },
    {
      id: 2,
      title: "Rent your home",
      description:
        "We do a free evaluation to be sure you want to start selling.",
      icon:<FaBuilding />
    },
    {
      id: 3,
      title: "Beachfront Villa",
      description:
        "We do a free evaluation to be sure you want to start selling.",
      icon:<BsBuildingsFill />
    },
    {
      id: 4,
      title: "Rustic Cabin",
      description:
        "We do a free evaluation to be sure you want to start selling.",
      icon:<BiSolidHomeHeart />
    },
  ];
  return (
    <div className="w-5/6 m-auto mb-14">
      <div className="w-4/6 m-auto text-center">
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <p className="text-xl my-5">Utilizing his exceptional experience and knowledge of the luxury waterfront markets, Roland serves an extensive and elite worldwide client base.</p>
      </div>
      <div className="thirdChild grid gap-4 grid-cols-4 ">
        {reasons.map((reason) => (
          <div key={reason.id} className="bg-slate-200 p-4 thirdDesign rounded">
            <p className="text-5xl">{reason.icon}</p>
            <h3 className="text-2xl font-bold my-5">{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoiceUs;
