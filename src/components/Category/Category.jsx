import Image from "next/image";

import img1 from "../../../assets/image1.jpg";
import img4 from "../../../assets/image2.jpg";
import img3 from "../../../assets/image3.jpg";
import img2 from "../../../assets/image4.jpg";
import img5 from "../../../assets/image5.jpg";
import img6 from "../../../assets/image6.jpg";

const Category = () => {
  return (
    <div className="w-4/5 m-auto">
      <div className="text-center w-4/6  m-auto">
        <h1 className="text-3xl font-bold">Find Your Dream Home</h1>
        <p className="text-xl my-7">
          Highlight the best of your properties by using the List Category
          shortcode. You can list specific properties categories, types, cities,
          areas.
        </p>
      </div>
      <div className="flex gap-3 w-full">
        <div className="w-3/6">
          <Image
            width={1000}
            height={1000}
            src={img1}
            alt="image"
            className="rounded-md w-full mb-2 h-[21rem] object-cover"
          />
          <div className="flex w-full gap-2">
            <Image
              width={1000}
              height={1000}
              src={img2}
              alt="image"
              className="rounded-md w-3/6"
            />
            <Image
              width={1000}
              height={1000}
              src={img3}
              alt="image"
              className="rounded-md w-3/6"
            />
          </div>
        </div>

        <div className="w-3/6">
          <div className="flex w-full gap-2">
            <Image
              width={1000}
              height={1000}
              src={img5}
              alt="image"
              className="rounded-md w-3/6 h-76"
            />
            <Image
              width={1000}
              height={1000}
              src={img6}
              alt="image"
              className="rounded-md w-3/6 h-76"
            />
          </div>
          <Image
            width={1000}
            height={1000}
            src={img4}
            alt="image"
            className="rounded-md w-full mt-2 h-[21rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
