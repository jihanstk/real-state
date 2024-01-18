import Image from "next/image";
import Link from "next/link";
import "./AreaProperty.css";
const AreaProperty = () => {
  const citiesArray = [
    {
      id: 1,
      cityName: "New York",
      photo:
        "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "The city that never sleeps, with iconic skyscrapers and bustling streets.",
    },
    {
      id: 2,
      cityName: "Paris",
      photo:
        "https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "The City of Lights, known for its romantic ambiance and historic landmarks.",
    },
    {
      id: 3,
      cityName: "Tokyo",
      photo:
        "https://images.pexels.com/photos/134643/pexels-photo-134643.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A modern metropolis with a mix of traditional and futuristic elements.",
    },
    {
      id: 4,
      cityName: "London",
      photo:
        "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&w=800s",
      description:
        "Rich in history and culture, with landmarks like the Big Ben and Buckingham Palace.",
    },
    {
      id: 5,
      cityName: "Rome",
      photo:
        "https://images.pexels.com/photos/240572/pexels-photo-240572.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "The Eternal City, home to ancient ruins like the Colosseum and the Roman Forum.",
    },
    {
      id: 6,
      cityName: "Sydney",
      photo:
        "https://images.pexels.com/photos/1707213/pexels-photo-1707213.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A vibrant city with iconic landmarks such as the Sydney Opera House and Harbour Bridge.",
    },
    {
      id: 7,
      cityName: "Rio de Janeiro",
      photo:
        "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Known for its lively atmosphere, beautiful beaches, and the iconic Christ the Redeemer statue.",
    },
    {
      id: 8,
      cityName: "Cairo",
      photo:
        "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Home to the ancient pyramids and Sphinx, a city with a rich historical legacy.",
    },
    {
      id: 9,
      cityName: "Seoul",
      photo:
        "https://images.pexels.com/photos/548084/pexels-photo-548084.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A dynamic city that seamlessly blends modernity with traditional Korean culture.",
    },
    {
      id: 10,
      cityName: "Marrakech",
      photo:
        "https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A vibrant city in Morocco, known for its bustling markets, palaces, and gardens.",
    },
  ];

  return (
    <div className="areaProperty-main">
      <div>
        <h1 className="text-4xl font-bold text-center">Property By Area</h1>
        <p className="md:w-1/2 w-11/12 text-slate-800/50 text-center mx-auto">
          Highlight the best of your properties by using the List Category
          shortcode. You can list categories, types, cities, areas and states of
          your choice.
        </p>
      </div>
      <div className="areaProperty-container gap-10">
        {citiesArray.map((city) => (
          <div key={city.id} className="areaProperty-sub ">
            <div className="areaProperty-img-container">
              <Image
                width={1000}
                height={1000}
                className="rounded-2xl city-image"
                src={city.photo}
                alt=""
              />
            </div>
            <div className="areaProperty-des-container">
              <Link
                href="#"
                className="text-xl font-semibold hover:text-slate-700"
              >
                {city.cityName}
              </Link>
              <p className="text-slate-800/50 ">30 property</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaProperty;
