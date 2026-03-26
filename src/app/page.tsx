import AboutSection from "@/components/sections/AboutSection"; 
import CTASection from "@/components/sections/CTASection"; 
import FeaturesSection from "@/components/sections/FeaturesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SliderImage from "@/components/sections/SliderImage"; 

export default function Home() {
  return (
    <> 
      <SliderImage />
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
