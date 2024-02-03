import AreaProperty from "@/components/AreaProperty/AreaProperty";
import Banner from "@/components/Banner/Banner";
import Category from "@/components/Category/Category";
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
      <Category></Category>
      <OurAgents />
      <ChoiceUs></ChoiceUs>
      <Contact></Contact>

    </div>
  );
};

export default page;
