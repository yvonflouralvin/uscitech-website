import AboutSection from "@/components/sections/AboutSection";
// import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";
// import FactultiesImages from "@/components/sections/facultiesImages";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Slideshow from "@/components/sections/slideshow/SliderShow"; 

export default function Home() {
  return (
    <>
      <Slideshow />
      {/* <FactultiesImages /> */}
      <div className="mt-[20px]">
        <FeaturesSection />
      </div>
      <AboutSection />
      <ServicesSection />
      {/* <BlogSection /> */}
      {/* <BlogSection /> */}
      <CTASection />
    </>
  );
}
