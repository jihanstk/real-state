import AreaProperty from "@/components/AreaProperty/AreaProperty";
import Banner from "@/components/Banner/Banner";
import FeaturedHouse from "@/components/FeaturedHouse/FeaturedHouse";
import OurAgents from "@/components/OurAgents/OurAgents";
import Footer from "@/components/commn/Footer/Footer";

const page = () => {
  return (
    <div>
      <Banner />
      <AreaProperty />
      <FeaturedHouse />
      <OurAgents></OurAgents>
      <Footer></Footer>
    </div>
  );
};

export default page;
