import Image from "next/image";
import { BsPhoneFlip } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

import {
  FaFacebookF,
  FaInstagramSquare,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";

const Footer = () => {
  const houses = [
    {
      id: 1,
      housePhoto:
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Luxury House in Greenville",
      price: "$ 999 / month",
    },
    {
      id: 2,
      housePhoto:
        "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Modern Condo for Sale",
      price: "$ 860,000",
    },
    {
      id: 3,
      housePhoto:
        "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Apartment with Subunits",
      price: "$ 150,000",
    },
  ];

  return (
    <div className="bg-[#001a33] text-slate-300  w-full bottom-0 md:fixed z-0 left-0">
      <div className="w-11/12 m-auto flex justify-between p-8">
        <div>
          <p className="font-bold text-2xl mb-4 text-white">Contact Us</p>
          <p className="flex items-center my-3">
            <HiOfficeBuilding className="mr-3" />
            3755 Commercial St SE Salem, Corner
          </p>
          <p className="flex items-center my-3">
            <FaPhone className="mr-3" />
            +0158738473473
          </p>
          <p className="flex items-center my-3">
            <BsPhoneFlip className="mr-3" />
            +0158738473473
          </p>
          <p className="flex items-center my-3">
            <MdEmail className="mr-3" />
            youremail@gmail.com
          </p>
          <p className="flex items-center my-3">
            <RiComputerLine className="mr-3" />
            WP Residence
          </p>
          <div className="flex mt-6">
            <div className="m-2 bg-[#00284d] rounded text-center">
              <FaFacebookF className="m-3" />
            </div>
            <div className="m-2 bg-[#00284d] rounded text-center">
              <FaWhatsapp className="m-3" />
            </div>
            <div className="m-2 bg-[#00284d] rounded text-center">
              <FaTelegram className="m-3" />
            </div>
            <div className="m-2 bg-[#00284d] rounded text-center">
              <FaTiktok className="m-3" />
            </div>
            <div className="m-2 bg-[#00284d] rounded text-center">
              <FaXTwitter className="m-3" />
            </div>
            <div className="m-2 bg-[#00284d] rounded text-center">
              <FaYoutube className="m-3" />
            </div>
            <div className="m-2 bg-[#00284d] rounded text-center">
              <FaInstagramSquare className="m-3" />
            </div>
            <div className="m-2 bg-[#00284d] rounded text-center">
              <MdOutgoingMail className="m-3" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4 text-white">
            Lists By Category
          </h3>
          <p className=" my-2">Apartments (17)</p>
          <p className=" my-2">Condos (8)</p>
          <p className=" my-2">Houses (5)</p>
          <p className=" my-2">Industrials (1)</p>
          <p className=" my-2">Land (1)</p>
          <p className=" my-2">Offices (2)</p>
          <p className=" my-2">Retails (4)</p>
          <p className=" my-2">Villas (4)</p>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4 text-white">
            Latest Properties
          </h3>
          <div>
            {houses.map((house) => (
              <div key={house.id} className="flex items-center m-3">
                <Image
                  width={100}
                  height={90}
                  src={house.housePhoto}
                  alt={house.title}
                  className=" object-cover rounded-md duration-1000 ease-in-out"
                />
                <div className="ms-4">
                  <p>{house.title}</p>
                  <p>{house.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between p-6">
        <p>Copyright WP Estate. All Rights Reserved</p>
        <div className="flex">
          <p className="me-8">Documentation</p>
          <p className="me-8">Video Tutorial</p>
          <p className="me-8">Client Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
