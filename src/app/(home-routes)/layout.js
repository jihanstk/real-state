import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/commn/Footer/Footer";

const homeRoute = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <div className="min-h-[70vh] z-10 relative bg-slate-200 lg:mb-[440px] md:mb-[600px]  ">
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default homeRoute;
