import Image from "next/image";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import {
  PiFacebookLogoDuotone,
  PiInstagramLogoDuotone,
  PiLinkedinLogoDuotone,
  PiPhoneCallBold,
} from "react-icons/pi";

import "./OurAgents.css";
const OurAgents = () => {
  const realEstateAgents = [
    {
      id: 1,
      name: "John Smith",
      about:
        "Experienced real estate agent with a passion for helping clients find their dream homes. Dedicated to providing exceptional service and guiding clients through the buying or selling process.",
      photo:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt:
        "Committed to making your real estate journey smooth and successful.",
      socialAccounts: {
        facebook: "john.smith.facebook",
        linkedin: "@johnsmith_realtor",
        instagram: "@johnsmith_realestate",
      },
      category: "Sales agent",
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      about:
        "Specializing in luxury properties and investment opportunities. Known for her attention to detail and market expertise, Emily is dedicated to exceeding her clients' expectations.",
      photo:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Transforming dreams into reality through unparalleled service.",
      socialAccounts: {
        facebook: "emily.rodriguez.luxuryhomes",
        linkedin: "emily-rodriguez",
        instagram: "@emilyluxuryrealtor",
      },
      category: "buying agent",
    },
    {
      id: 3,
      name: "David Chang",
      about:
        "A commercial real estate expert with a proven track record of negotiating successful deals. David is committed to helping businesses find the perfect space to thrive.",
      photo:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt:
        "Your partner in finding the ideal commercial real estate solutions.",
      socialAccounts: {
        linkedin: "david-chang-commercial-realtor",
        facebook: "@davidchangCRE",
        instagram: "@davidchang_commercialrealty",
      },
      category: "sales agent",
    },
    // Add more agents as needed
  ];
  return (
    <div className="agent-main ">
      <div className="my-10 ">
        <h1 className="text-4xl text-center">Meet Our Agents</h1>
        <p className="text-slate-500 md:w-1/2 w-11/12 text-center mx-auto">
          With the “list agents shortcode” you can show your agents in any page,
          alognside with their contact details and link to their agent profile.
        </p>
      </div>
      <div className="agent-container">
        {realEstateAgents.map((agent) => (
          <div key={agent.id} className="agent-sub-container">
            <Link href="#">
              <div className="agent-image overflow-hidden rounded-md">
                <Image
                  width={500}
                  height={500}
                  className="h-44 object-cover rounded-md"
                  src={agent.photo}
                  alt={agent.name}
                />
              </div>
              <div className="py-5">
                <h1 className="text-xl my-0 pb-0 font-semibold">
                  {agent.name}
                </h1>
                <p className="opacity-65 my-0"> {agent.category} </p>
                <p className=" text-slate-600"> {agent.excerpt} </p>
              </div>
            </Link>
            <div className="flex justify-between">
              <div className="flex justify-between ">
                <a
                  href={agent.socialAccounts.facebook}
                  className="text-xl bg-yellow-200/20  p-2 ml-2"
                >
                  {" "}
                  <PiFacebookLogoDuotone />{" "}
                </a>
                <a
                  href={agent.socialAccounts.instagram}
                  className="text-xl bg-yellow-200/20  p-2 ml-2"
                >
                  {" "}
                  <PiInstagramLogoDuotone />{" "}
                </a>
                <a
                  href={agent.socialAccounts.linkedin}
                  className="text-xl bg-yellow-200/20  p-2 ml-2"
                >
                  {" "}
                  <PiLinkedinLogoDuotone />{" "}
                </a>
              </div>
              <div className="flex justify-between  ">
                <a
                  href={agent.socialAccounts.facebook}
                  className="text-xl bg-yellow-200/20  p-2 ml-2"
                >
                  {" "}
                  <BiLogoGmail />{" "}
                </a>
                <a
                  href={agent.socialAccounts.instagram}
                  className="text-xl bg-yellow-200/20  p-2 ml-2"
                >
                  {" "}
                  <PiPhoneCallBold />{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAgents;
