import Image from "next/image";
import Link from "next/link";
import { IoBedOutline, IoStar } from "react-icons/io5";
import { PiToiletDuotone } from "react-icons/pi";

import "./FeaturedHouse.css";

const FeaturedHouse = () => {
  const houses = [
    {
      id: 1,
      housePhoto:
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Modern Home",
      description:
        "Indulge in the epitome of luxury with this beachfront villa offering 5 bedrooms, 4 toilets, and a spacious 3500 square feet. Owned by AliceJohnson, this exquisite property seamlessly blends comfort and coastal living. Located in Coastal C, it is currently for sale at $750,000 with a remarkable rating of 4.7.",
      bedroom: 4,
      toilet: 3,
      houseSize: 2500,
      user: "JohnDoe",
      location: "City A",
      status: "For Sale",
      price: 500000,
      rating: 4.5,
    },
    {
      id: 2,
      housePhoto:
        "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Cozy Cottage",
      description:
        "Escape to the charm of this cozy cottage, surrounded by a lovely garden. Perfect for a peaceful retreat, this property features 2 bedrooms, 1 toilet, and a comfortable house size of 1200 square feet. Owned by JaneSmith, located in Suburb B, this cottage is available for rent at $2000 per month with a rating of 4.0.",
      bedroom: 2,
      toilet: 1,
      houseSize: 1200,
      user: "JaneSmith",
      location: "Suburb B",
      status: "For Rent",
      price: 2000,
      rating: 4.0,
    },
    {
      id: 3,
      housePhoto:
        "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Beachfront Villa",
      description:
        "Experience luxurious living in this spacious and modern home with stunning views. Ideal for family living and entertaining, this property offers 4 bedrooms, 3 toilets, and a generous house size of 2500 square feet. Owned by JohnDoe, located in City A, this home is currently for sale at $500,000 with a stellar rating of 4.5.",
      bedroom: 5,
      toilet: 4,
      houseSize: 3500,
      user: "AliceJohnson",
      location: "Coastal C",
      status: "For Sale",
      price: 750000,
      rating: 4.7,
    },
    {
      id: 4,
      housePhoto:
        "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Rustic Cabin",
      description:
        "Escape to the charm of this cozy cottage, surrounded by a lovely garden. Perfect for a peaceful retreat, this property features 2 bedrooms, 1 toilet, and a comfortable house size of 1200 square feet. Owned by JaneSmith, located in Suburb B, this cottage is available for rent at $2000 per month with a rating of 4.0.",
      bedroom: 3,
      toilet: 2,
      houseSize: 1800,
      user: "BobMiller",
      location: "Forest D",
      status: "For Rent",
      price: 1500,
      rating: 4.2,
    },
    {
      id: 5,
      housePhoto:
        "https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "City Loft",
      description:
        "Experience luxurious living in this spacious and modern home with stunning views. Ideal for family living and entertaining, this property offers 4 bedrooms, 3 toilets, and a generous house size of 2500 square feet. Owned by JohnDoe, located in City A, this home is currently for sale at $500,000 with a stellar rating of 4.5.",

      bedroom: 1,
      toilet: 1,
      houseSize: 800,
      user: "EvaWilliams",
      location: "City E",
      status: "For Sale",
      price: 300000,
      rating: 4.0,
    },
    {
      id: 6,
      housePhoto:
        "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Mansion on the Hill",
      description:
        "Escape to the charm of this cozy cottage, surrounded by a lovely garden. Perfect for a peaceful retreat, this property features 2 bedrooms, 1 toilet, and a comfortable house size of 1200 square feet. Owned by JaneSmith, located in Suburb B, this cottage is available for rent at $2000 per month with a rating of 4.0.",
      bedroom: 6,
      toilet: 5,
      houseSize: 5000,
      user: "DanielSmith",
      location: "Hillside F",
      status: "For Sale",
      price: 1200000,
      rating: 4.8,
    },
    {
      id: 7,
      housePhoto:
        "https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Country Retreat",
      description:
        "Escape to the charm of this cozy cottage, surrounded by a lovely garden. Perfect for a peaceful retreat, this property features 2 bedrooms, 1 toilet, and a comfortable house size of 1200 square feet. Owned by JaneSmith, located in Suburb B, this cottage is available for rent at $2000 per month with a rating of 4.0.",
      bedroom: 4,
      toilet: 3,
      houseSize: 2800,
      user: "SophiaBrown",
      location: "Rural G",
      status: "For Rent",
      price: 1800,
      rating: 4.5,
    },
    {
      id: 8,
      housePhoto:
        "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Sky High Penthouse",
      description:
        "Escape to the charm of this cozy cottage, surrounded by a lovely garden. Perfect for a peaceful retreat, this property features 2 bedrooms, 1 toilet, and a comfortable house size of 1200 square feet. Owned by JaneSmith, located in Suburb B, this cottage is available for rent at $2000 per month with a rating of 4.0.",
      bedroom: 3,
      toilet: 3,
      houseSize: 3200,
      user: "WilliamJones",
      location: "City H",
      status: "For Sale",
      price: 900000,
      rating: 4.6,
    },
    {
      id: 9,
      housePhoto:
        "https://images.pexels.com/photos/2893177/pexels-photo-2893177.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Lakeside Retreat",
      description:
        "Escape to the charm of this cozy cottage, surrounded by a lovely garden. Perfect for a peaceful retreat, this property features 2 bedrooms, 1 toilet, and a comfortable house size of 1200 square feet. Owned by JaneSmith, located in Suburb B, this cottage is available for rent at $2000 per month with a rating of 4.0.",
      bedroom: 2,
      toilet: 2,
      houseSize: 1500,
      user: "OliviaDavis",
      location: "Lake I",
      status: "For Sale",
      price: 600000,
      rating: 4.3,
    },
    {
      id: 10,
      housePhoto:
        "https://images.pexels.com/photos/276593/pexels-photo-276593.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Elegant Townhouse",
      description:
        "Escape to the charm of this cozy cottage, surrounded by a lovely garden. Perfect for a peaceful retreat, this property features 2 bedrooms, 1 toilet, and a comfortable house size of 1200 square feet. Owned by JaneSmith, located in Suburb B, this cottage is available for rent at $2000 per month with a rating of 4.0.",
      bedroom: 3,
      toilet: 2,
      houseSize: 2000,
      user: "MichaelWilson",
      location: "City J",
      status: "For Rent",
      price: 2500,
      rating: 4.1,
    },
  ];
  return (
    <div className="latest-main">
      <div className="my-10">
        <h1 className="text-4xl text-center">Latest Properties</h1>
        <p className="md:w-1/2 w-11/12 mx-auto text-center text-slate-800/60">
          These are the latest properties in the Sales category. You can create
          the list using the “latest listing shortcode” and show items by
          specific categories.
        </p>
      </div>
      <div className="latest-container">
        {houses.slice(0, 6).map((house) => (
          <div key={house.id} className="latest-sub">
            <div className="latest-post-image overflow-hidden">
              <Image
                width={1000}
                height={1000}
                src={house.housePhoto}
                alt={house.title}
                className="h-[12rem] object-cover rounded-md hover:scale-110 duration-1000"
              />
            </div>
            <div className="latest-post-content py-5">
              <Link href="#">
                <h2 className="text-xl  hover:text-green-700 duration-200">
                  {house.title}
                </h2>
              </Link>
              <p className="text-slate-500">
                {house.description.slice(0, 100)}
              </p>
              <div className="flex justify-between mt-3 text-center text-slate-600">
                <p className="flex gap-2 items-center text-xl w-3/4 text-center">
                  <span>
                    <IoBedOutline />
                  </span>
                  <span>{house.bedroom}</span>
                </p>
                <p className=" text-xl w-full text-left">
                  <span>
                    {house.houseSize} FT<sup>2</sup>
                  </span>
                </p>
                <p className="flex gap-2 items-center text-xl w-full text-center ">
                  <span>
                    <PiToiletDuotone />
                  </span>
                  <span>{house.toilet}</span>
                </p>
              </div>
              <div className="flex items-center justify-between my-4">
                <p className="text-xl">
                  <span className="font-bold"> $ </span>
                  {house.price}
                </p>
                <p className="flex gap-2 items-center ">
                  {" "}
                  <span className="flex items-center text-yellow-500 text-xl">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </span>{" "}
                  <span className="text-xl"> {house.rating}</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  width={100}
                  height={100}
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="user"
                />
                <Link href="#">
                  <p className="text-xl">{house.user}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedHouse;
