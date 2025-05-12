import HeroSection from "@/components/HeroSection";
import FeaturedInductee from "@/components/FeaturedInductee";
import OurStory from "@/components/OurStory";
import { getLatestInductee } from "@/data/players";

const Home = () => {
  const latestInductee = getLatestInductee();
  
  return (
    <>
      <HeroSection />
      <FeaturedInductee player={latestInductee} />
      <OurStory />
    </>
  );
};

export default Home;
