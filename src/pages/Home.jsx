import { CallToAction } from "../components/CallToAction";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { RealLife } from "../components/RealLife";

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <div className="section-divider"></div>
      <RealLife />
      <CallToAction />
      <Footer />
    </>
  );
};
