import AreaProperty from "@/components/AreaProperty/AreaProperty";
import Banner from "@/components/Banner/Banner";
import ChoiceUs from "@/components/ChoiceUs/ChoiceUs";
import Contact from "@/components/Contact/Contact";
import FeaturedHouse from "@/components/FeaturedHouse/FeaturedHouse";
import OurAgents from "@/components/OurAgents/OurAgents";

const page = () => {
  return (
    <div>
      <Banner />
      <AreaProperty />
      <FeaturedHouse />
      <OurAgents />
      <ChoiceUs></ChoiceUs>
      <Contact></Contact>
    </div>
  );
};

export default page;
