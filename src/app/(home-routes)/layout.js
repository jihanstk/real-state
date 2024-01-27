import Navigation from "@/components/Navigation/Navigation";

const homeRoute = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <Navigation />
      {children}
    </div>
  );
};

export default homeRoute;
