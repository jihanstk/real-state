import AreaProperty from "@/components/AreaProperty/AreaProperty";
import Banner from "@/components/Banner/Banner";
import FeaturedHouse from "@/components/FeaturedHouse/FeaturedHouse";
import OurAgents from "@/components/OurAgents/OurAgents";

const page = () => {
  return (
    <div>
      <Banner />
      <AreaProperty />
      <FeaturedHouse />
      <OurAgents></OurAgents>
    </div>
  );
};

export default page;
